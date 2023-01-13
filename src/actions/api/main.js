import { db } from "../../firebase/firebase";
import { setAccounts } from "../../redux/accountSlice";
import axios from "axios";
import { toggleAPIloading } from "../../redux/stateSlice";

export const main = async (accessTokensDoc, dispatch) => {
  var start = new Date().getTime();
  console.log(accessTokensDoc)

  const accessTokens = accessTokensDoc.data().accessTokens;

  if (accessTokens.length > 0) {
    const res = [];

    for (const accessToken of accessTokens) {
      const apiResponse = await axios.post(
        "http://localhost:8000/api/main",
        { accessToken },
        { headers: { "Content-Type": "application/json" } }
      );


      const item_id = await apiResponse.data.item.item_id;

      const institution = await apiResponse.data.institution.name;

      const accounts = await apiResponse.data.accounts.accounts;

      let totalBalance = 0;

      for (const account of accounts) {
        if (account.type == "depository") {
          totalBalance += account.balances.current;
        } else if (account.type == "credit") {
          totalBalance -= account.balances.current;
        }
      }

      const transactions = await apiResponse.data.transactions;

      const liabilities = await apiResponse.data.liabilities.liabilities;

      // Add the total balance to the balances array
      res.push({
        item_id: item_id,
        name: institution,
        balance: totalBalance,
        accounts: accounts,
        transactions: transactions,
        access_token: accessToken,
        liabilities: liabilities,
      });
    }

    dispatch(setAccounts(res));
    dispatch(toggleAPIloading(false));
    console.log(
      "API request completed in " +
        (new Date().getTime() - start) +
        " milliseconds"
    );
  }
};

// import { db } from "../../firebase/firebase";
// import { setAccounts } from "../../redux/accountSlice";
// import axios from "axios";

// export const main = async (email, dispatch) => {
//   const accessTokensDoc = await db
//     .collection("users")
//     .doc(btoa(email))
//     .collection("accounts")
//     .doc("accessTokens")
//     .get();

//   if (accessTokensDoc.exists) {
//     const accessTokens = accessTokensDoc.data().accessTokens;

//     if (accessTokens.length > 0) {
//       const res = [];

//       for (const accessToken of accessTokens) {
//         //Updateing Balances
//         console.log("POST: updateBalances <" + accessToken + ">");

//         const balanceResponse = await axios.post(
//           "http://localhost:8000/api/balance",
//           { accessToken },
//           { headers: { "Content-Type": "application/json" } }
//         );
//         const accounts = balanceResponse.data.accounts;

//         let totalBalance = 0;
//         for (const account of accounts) {
//           totalBalance += account.balances.available;
//         }

//         console.log("POST: getTransactions <" + accessToken + ">");

//         const transactionResponse = await axios.post(
//           "http://localhost:8000/api/month-transactions",
//           {
//             accessToken: accessToken,
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const transactions = await transactionResponse.data.transactions;

//         const itemResponse = await axios.post(
//           "http://localhost:8000/api/item",
//           { accessToken },
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const institution = await itemResponse.data.institution.name;
//         const item_id = await itemResponse.data.item.item_id;

//         // Add the total balance to the balances array
//         res.push({
//           item_id: item_id,
//           name: institution,
//           balance: totalBalance,
//           transactions: transactions,
//           access_token: accessToken,
//         });
//       }

//       // Store the balances array in the database
//       dispatch(setAccounts(res));
//     }
//   }
// };
