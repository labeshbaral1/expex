require("dotenv").config();
const {
  Configuration,
  PlaidApi,
  Products,
  PlaidEnvironments,
} = require("plaid");
const util = require("util");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const cors = require("cors");
// const functions = require('firebase-functions ')

//initialize important constants for Plaid Api
const {
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_ENV,
  PLAID_PRODUCTS,
  PLAID_COUNTRY_CODES,
  PLAID_REDIRECT_URI,
} = require("./key");

let ACCESS_TOKEN = null;
let ITEM_ID = null;

const APP_PORT = 8000;

const configuration = new Configuration({
  basePath: PlaidEnvironments[PLAID_ENV],
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": PLAID_CLIENT_ID,
      "PLAID-SECRET": PLAID_SECRET,
      "Plaid-Version": "2020-09-14",
    },
  },
});

const client = new PlaidApi(configuration);

//Initialize Server
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

const server = app.listen(APP_PORT, function () {
  console.log("plaid-quickstart server listening on port " + APP_PORT);
});


app.get("/", (req, res) => {
  res.send("Server is currently running");
});

// Create a link token with configs which we can then use to initialize Plaid Link client-side.
//Reqired when initalizing a link to the account (everytime the user signs in). A public token is returned when link is initized which can be used for an access_token
app.post("/api/create_link_token", function (request, response, next) {
  let { uid } = request.body;

  Promise.resolve()
    .then(async function () {
      const configs = {
        user: {
          // This should correspond to a unique id for the current user.
          client_user_id: uid,
        },
        client_name: "Plaid Quickstart",
        products: PLAID_PRODUCTS,
        country_codes: PLAID_COUNTRY_CODES,
        language: "en",
      };

      if (PLAID_REDIRECT_URI !== "") {
        configs.redirect_uri = PLAID_REDIRECT_URI;
      }

      const createTokenResponse = await client.linkTokenCreate(configs);

      prettyPrintResponse(createTokenResponse);
      response.json(createTokenResponse.data);
    })
    .catch(next);
});

//Exchange a Link public_token(return if create_link_token) for an API access_token after the onSucess callback on the Link
app.post("/api/set_access_token", function (request, response, next) {
  const { publicToken } = request.body;

  Promise.resolve()
    .then(async function () {
      const tokenResponse = await client.itemPublicTokenExchange({
        public_token: publicToken,
      });

      prettyPrintResponse(tokenResponse);

      ACCESS_TOKEN = tokenResponse.data.access_token;
      ITEM_ID = tokenResponse.data.item_id;

      // if (PLAID_PRODUCTS.includes(Products.Transfer)) {
      //   TRANSFER_ID = await authorizeAndCreateTransfer(ACCESS_TOKEN);
      // }

      response.json({
        // the 'access_token' is a private token, DO NOT pass this token to the frontend in your production environment
        access_token: ACCESS_TOKEN,
        item_id: ITEM_ID,
        error: null,
      });
    })
    .catch(next);
});


app.post("/api/main", function (request, response, next) {
  const { accessToken } = request.body;
  Promise.resolve()
  .then(async function() {

    const itemResponse = await client.itemGet({
      access_token: accessToken,
    });
    const item = await itemResponse.data.item

    // Also pull information about the institution
    const configs = {
      institution_id: itemResponse.data.item.institution_id,
      country_codes: PLAID_COUNTRY_CODES,
    };
    const instResponse = await client.institutionsGetById(configs);
    const institution = await instResponse.data.institution

    const balanceResponse = await client.accountsBalanceGet({
      access_token: accessToken,
    });
    const accounts = await balanceResponse.data

    const transactionRequest = await client.transactionsGet({
      access_token: accessToken,
      start_date: moment().startOf('month').format('YYYY-MM-DD'),
      end_date: moment().format('YYYY-MM-DD')
    });
    
    let transactions = transactionRequest.data.transactions;
    const total_transactions = transactionRequest.data.total_transactions;
    while (transactions.length < total_transactions) {
      const paginatedRequest = {
        access_token: accessToken,
         start_date: moment().date(5).format("YYYY-MM-DD"),
        end_date: moment().format('YYYY-MM-DD'),
        options: {
          offset: transactions.length,
        },
      };
    
      const paginatedResponse = await client.transactions.get(paginatedRequest);
      transactions = transactions.concat(
        paginatedResponse.data.transactions,
      );
    }

      response.json({
        item: item, 
        institution: institution,
        accounts: accounts,
        transactions: transactions
      })

  })

})


// Retrieve Transactions for an Item
// https://plaid.com/docs/#transactions
app.post("/api/transactions", function (request, response, next) {
  const { accessToken, numberOfTransactions } = request.body;

  Promise.resolve()
    .then(async function () {
      // Set cursor to empty to receive all historical updates
      let cursor = null;
      // New transaction updates since "cursor"
      let added = [];
      let modified = [];
      // Removed transaction ids
      let removed = [];
      let hasMore = true;
      // Iterate through each page of new transaction updates for item
      while (hasMore) {
        const request = {
          access_token: accessToken,
          cursor: cursor,
          
        };
        const response = await client.transactionsSync(request);
        const data = response.data;
        // Add this page of results
        added = added.concat(data.added);
        modified = modified.concat(data.modified);
        removed = removed.concat(data.removed);
        hasMore = data.has_more;
        // Update cursor to the next cursor
        cursor = data.next_cursor;
        prettyPrintResponse(response);
      }

      const compareTxnsByDateAscending = (a, b) =>
        (a.date > b.date) - (a.date < b.date);
      // Return the 8 most recent transactions

      const recently_added = [...added]
        .sort(compareTxnsByDateAscending)
        .slice(numberOfTransactions * -1);
      response.json({ latest_transactions: recently_added });
    })
    .catch(next);
});



app.post("/api/month-transactions", function (request, response, next) {
  const { accessToken } = request.body;

  Promise.resolve()
    .then(async function () {
      const transactionRequest = await client.transactionsGet({
        access_token: accessToken,
        start_date: moment().startOf('month').format('YYYY-MM-DD'),
        end_date: moment().format('YYYY-MM-DD')
      });
      
      let transactions = transactionRequest.data.transactions;
      const total_transactions = transactionRequest.data.total_transactions;
      while (transactions.length < total_transactions) {
        const paginatedRequest = {
          access_token: accessToken,
           start_date: moment().date(5).format("YYYY-MM-DD"),
          end_date: moment().format('YYYY-MM-DD'),
          options: {
            offset: transactions.length,
          },
        };
      
        const paginatedResponse = await client.transactions.get(paginatedRequest);
        transactions = transactions.concat(
          paginatedResponse.data.transactions,
        );
      }
            
      response.json({ transactions: transactions });

    
    }) 
    .catch(next);})


// Retrieve Investment Transactions for an Item
// https://plaid.com/docs/#investments
app.get("/api/investments_transactions", function (request, response, next) {
  const { accessToken } = request.body;

  Promise.resolve()
    .then(async function () {
      const startDate = moment().subtract(30, "days").format("YYYY-MM-DD");
      const endDate = moment().format("YYYY-MM-DD");
      const configs = {
        access_token: accessToken,
        start_date: startDate,
        end_date: endDate,
      };
      const investmentTransactionsResponse =
        await client.investmentsTransactionsGet(configs);
      prettyPrintResponse(investmentTransactionsResponse);
      response.json({
        error: null,
        investments_transactions: investmentTransactionsResponse.data,
      });
    })
    .catch(next);
});

// Retrieve Identity for an Item
// https://plaid.com/docs/#identity
app.post("/api/identity", function (request, response, next) {
  const { accessToken } = request.body;
  Promise.resolve()
    .then(async function () {
      const identityResponse = await client.identityGet({
        access_token: accessToken,
      });
      prettyPrintResponse(identityResponse);
      response.json({ identity: identityResponse.data.accounts });
    })
    .catch(next);
});

// Retrieve real-time Balances for each of an Item's accounts
// https://plaid.com/docs/#balance
app.post("/api/balance", function (request, response, next) {
  const { accessToken } = request.body;
  Promise.resolve()
    .then(async function () {
      const balanceResponse = await client.accountsBalanceGet({
        access_token: accessToken,
      });
      prettyPrintResponse(balanceResponse);
      response.json(balanceResponse.data);
    })
    .catch(next);
});

// Retrieve Holdings for an Item
// https://plaid.com/docs/#investments
app.get("/api/holdings", function (request, response, next) {
  const { accessToken } = request.body;

  Promise.resolve()
    .then(async function () {
      const holdingsResponse = await client.investmentsHoldingsGet({
        access_token: accessToken,
      });
      prettyPrintResponse(holdingsResponse);
      response.json({ error: null, holdings: holdingsResponse.data });
    })
    .catch(next);
});

// Retrieve  for an Item
// https://plaid.com/docs/#liabilities
app.get("/api/liabilities", function (request, response, next) {
  const { accessToken } = request.body;

  Promise.resolve()
    .then(async function () {
      const liabilitiesResponse = await client.liabilitiesGet({
        access_token: accessToken,
      });
      prettyPrintResponse(liabilitiesResponse);
      response.json({ error: null, liabilities: liabilitiesResponse.data });
    })
    .catch(next);
});

//Remove item
app.post("/api/remove_item", function (request, response, next) {
  const { accessToken } = request.body;

  Promise.resolve()
    .then(async function () {
      // Pull the Item - this includes information about available products,
      // billed products, webhook information, and more.
      const itemResponse = await client.itemRemove({
        access_token: accessToken,
      });

      prettyPrintResponse(itemResponse);
      response.json({
        removed: itemResponse.removed,
      });
    })
    .catch(next);
});

// Retrieve information about an Item
// https://plaid.com/docs/#retrieve-item
app.post("/api/item", function (request, response, next) {
  const { accessToken } = request.body;

  Promise.resolve()
    .then(async function () {
      // Pull the Item - this includes information about available products,
      // billed products, webhook information, and more.
      const itemResponse = await client.itemGet({
        access_token: accessToken,
      });
      // Also pull information about the institution
      const configs = {
        institution_id: itemResponse.data.item.institution_id,
        country_codes: PLAID_COUNTRY_CODES,
      };
      const instResponse = await client.institutionsGetById(configs);
      prettyPrintResponse(itemResponse);
      response.json({
        item: itemResponse.data.item,
        institution: instResponse.data.institution,
      });
    })
    .catch(next);
});

// Retrieve an Item's accounts
// https://plaid.com/docs/#accounts
app.post("/api/accounts", function (request, response, next) {
  const { accessToken } = request.body;

  Promise.resolve()
    .then(async function () {
      const accountsResponse = await client.accountsGet({
        access_token: accessToken,
      });
      prettyPrintResponse(accountsResponse);
      response.json(accountsResponse.data);
    })
    .catch(next);
});

// Create and then retrieve an Asset Report for one or more Items. Note that an
// Asset Report can contain up to 100 items, but for simplicity we're only
// including one Item here.
// https://plaid.com/docs/#assets
app.get("/api/assets", function (request, response, next) {
  Promise.resolve()
    .then(async function () {
      // You can specify up to two years of transaction history for an Asset
      // Report.
      const daysRequested = 10;

      // The `options` object allows you to specify a webhook for Asset Report
      // generation, as well as information that you want included in the Asset
      // Report. All fields are optional.
      const options = {
        client_report_id: "Custom Report ID #123",
        // webhook: 'https://your-domain.tld/plaid-webhook',
        user: {
          client_user_id: "Custom User ID #456",
          first_name: "Alice",
          middle_name: "Bobcat",
          last_name: "Cranberry",
          ssn: "123-45-6789",
          phone_number: "555-123-4567",
          email: "alice@example.com",
        },
      };
      const configs = {
        access_tokens: [ACCESS_TOKEN],
        days_requested: daysRequested,
        options,
      };
      const assetReportCreateResponse = await client.assetReportCreate(configs);
      prettyPrintResponse(assetReportCreateResponse);
      const assetReportToken =
        assetReportCreateResponse.data.asset_report_token;
      const getResponse = await getAssetReportWithRetries(
        client,
        assetReportToken
      );
      const pdfRequest = {
        asset_report_token: assetReportToken,
      };

      const pdfResponse = await client.assetReportPdfGet(pdfRequest, {
        responseType: "arraybuffer",
      });
      prettyPrintResponse(getResponse);
      prettyPrintResponse(pdfResponse);
      response.json({
        json: getResponse.data.report,
        pdf: pdfResponse.data.toString("base64"),
      });
    })
    .catch(next);
});

app.get("/api/transfer", function (request, response, next) {
  Promise.resolve()
    .then(async function () {
      const transferGetResponse = await client.transferGet({
        transfer_id: TRANSFER_ID,
      });
      prettyPrintResponse(transferGetResponse);
      response.json({
        error: null,
        transfer: transferGetResponse.data.transfer,
      });
    })
    .catch(next);
});

// This functionality is only relevant for the UK/EU Payment Initiation product.
// Retrieve Payment for a specified Payment ID
app.get("/api/payment", function (request, response, next) {
  Promise.resolve()
    .then(async function () {
      const paymentGetResponse = await client.paymentInitiationPaymentGet({
        payment_id: PAYMENT_ID,
      });
      prettyPrintResponse(paymentGetResponse);
      response.json({ error: null, payment: paymentGetResponse.data });
    })
    .catch(next);
});

//TO-DO: This endpoint will be deprecated in the near future
app.get(
  "/api/income/verification/paystubs",
  function (request, response, next) {
    Promise.resolve()
      .then(async function () {
        const paystubsGetResponse = await client.incomeVerificationPaystubsGet({
          access_token: ACCESS_TOKEN,
        });
        prettyPrintResponse(paystubsGetResponse);
        response.json({ error: null, paystubs: paystubsGetResponse.data });
      })
      .catch(next);
  }
);

app.use("/api", function (error, request, response, next) {
  prettyPrintResponse(error.response);
  response.json(formatError(error.response));
});

const prettyPrintResponse = (response) => {
  console.log(util.inspect(response.data, { colors: true, depth: 4 }));
};

// This is a helper function to poll for the completion of an Asset Report and
// then send it in the response to the client. Alternatively, you can provide a
// webhook in the `options` object in your `/asset_report/create` request to be
// notified when the Asset Report is finished being generated.

const getAssetReportWithRetries = (
  plaidClient,
  asset_report_token,
  ms = 1000,
  retriesLeft = 20
) =>
  new Promise((resolve, reject) => {
    const request = {
      asset_report_token,
    };

    plaidClient
      .assetReportGet(request)
      .then(resolve)
      .catch(() => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject("Ran out of retries while polling for asset report");
            return;
          }
          getAssetReportWithRetries(
            plaidClient,
            asset_report_token,
            ms,
            retriesLeft - 1
          ).then(resolve);
        }, ms);
      });
  });

const formatError = (error) => {
  return {
    error: { ...error.data, status_code: error.status },
  };
};

// This is a helper function to authorize and create a Transfer after successful
// exchange of a public_token for an access_token. The TRANSFER_ID is then used
// to obtain the data about that particular Transfer.

const authorizeAndCreateTransfer = async (accessToken) => {
  // We call /accounts/get to obtain first account_id - in production,
  // account_id's should be persisted in a data store and retrieved
  // from there.
  const accountsResponse = await client.accountsGet({
    access_token: accessToken,
  });
  const accountId = accountsResponse.data.accounts[0].account_id;

  const transferAuthorizationResponse =
    await client.transferAuthorizationCreate({
      access_token: accessToken,
      account_id: accountId,
      type: "credit",
      network: "ach",
      amount: "1.34",
      ach_class: "ppd",
      user: {
        legal_name: "FirstName LastName",
        email_address: "foobar@email.com",
        address: {
          street: "123 Main St.",
          city: "San Francisco",
          region: "CA",
          postal_code: "94053",
          country: "US",
        },
      },
    });
  prettyPrintResponse(transferAuthorizationResponse);
  const authorizationId = transferAuthorizationResponse.data.authorization.id;

  const transferResponse = await client.transferCreate({
    idempotency_key: "1223abc456xyz7890001",
    access_token: accessToken,
    account_id: accountId,
    authorization_id: authorizationId,
    type: "credit",
    network: "ach",
    amount: "12.34",
    description: "Payment",
    ach_class: "ppd",
    user: {
      legal_name: "FirstName LastName",
      email_address: "foobar@email.com",
      address: {
        street: "123 Main St.",
        city: "San Francisco",
        region: "CA",
        postal_code: "94053",
        country: "US",
      },
    },
  });
  prettyPrintResponse(transferResponse);
  return transferResponse.data.transfer.id;
};

//Run the Server

// exports.api = functions.https.onRequest(api)
