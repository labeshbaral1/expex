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
        client_name: "Expex",
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

    // const liabilitiesResponse = await client.liabilitiesGet({
    //   access_token: accessToken,
    // });
    // const liabilities = await liabilitiesResponse.data;
    
      const liabilitiesResponse = await client.liabilitiesGet({
        access_token: accessToken,
      });
      const liabilities = await liabilitiesResponse.data || null;
    
    
    

    const balanceResponse = await client.accountsBalanceGet({
      access_token: accessToken,
    });

    const accounts = await balanceResponse.data

    const transactionRequest = await client.transactionsGet({
      access_token: accessToken,
       start_date: ('2022-12-01'),

      end_date: moment().format('YYYY-MM-DD')
    });
    
    let transactions = transactionRequest.data.transactions;
    const total_transactions = transactionRequest.data.total_transactions;
    while (transactions.length < total_transactions) {
      const paginatedRequest = {
        access_token: accessToken,
         start_date: ('2022-12-01'),
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
        transactions: transactions,
        liabilities: liabilities

      })

  })

})


app.use("/api", function (error, request, response, next) {
  prettyPrintResponse(error.response);
  response.json(formatError(error.response));
});

const prettyPrintResponse = (response) => {
  console.log(util.inspect(response.data, { colors: true, depth: 4 }));
};


const formatError = (error) => {
  return {
    error: { ...error.data, status_code: error.status },
  };
};


// exports.api = functions.https.onRequest(api)
