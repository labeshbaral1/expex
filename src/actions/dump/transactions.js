import { db } from "../../firebase/firebase";
import axios from "axios";
import { setTransactions } from "../../redux/accountSlice";

export const updateTransaction = async (email, dispatch) => {
  console.log("POST call made to updateTransactions");

  const numberOfTransactions = 5;

  const accessTokensDoc = await db
    .collection("users")
    .doc(btoa(email))
    .collection("accounts")
    .doc("accessTokens")
    .get();

  if (accessTokensDoc.exists) {
    const accessTokens = accessTokensDoc.data().accessTokens;

    if (accessTokens.length > 0) {
      const res = [];
      for (const accessToken of accessTokens) {
        // Make the API request to get the item
        const transactionResponse = await axios.post(
          "http://localhost:8000/api/transactions",
          {
            accessToken: accessToken,
            numberOfTransactions: numberOfTransactions,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const transactions = await transactionResponse.data.latest_transactions;

        const itemResponse = await axios.post(
          "http://localhost:8000/api/item",
          { accessToken },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const item_id = await itemResponse.data.item.item_id;
        res.push({
          item_id: item_id,
          transactions: transactions,
        });
      }
      dispatch(setTransactions(res));
    }
  }
};

export const getMonthTransactions = async (email, dispatch) => {
  console.log("POST call made to getMonthTransactions");

  const accessTokensDoc = await db
    .collection("users")
    .doc(btoa(email))
    .collection("accounts")
    .doc("accessTokens")
    .get();

  if (accessTokensDoc.exists) {
    const accessTokens = accessTokensDoc.data().accessTokens;

    if (accessTokens.length > 0) {
      const res = [];
      for (const accessToken of accessTokens) {
        // Make the API request to get the item
        const transactionResponse = await axios.post(
          "http://localhost:8000/api/month-transactions",
          {
            accessToken: accessToken,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const transactions = await transactionResponse.data.transactions;

        const itemResponse = await axios.post(
          "http://localhost:8000/api/item",
          { accessToken },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const item_id = await itemResponse.data.item.item_id;
        res.push({
          item_id: item_id,
          transactions: transactions,
        });
      }
      dispatch(setTransactions(res));
    }
  }
};
