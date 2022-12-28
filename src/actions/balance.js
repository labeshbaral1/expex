import { db } from "../firebase/firebase";
import { setBalances } from "../redux/accountSlice";
import axios from "axios";

export const updateBalance = async (email, dispatch) => {
  const accessTokensDoc = await db
    .collection("users")
    .doc(btoa(email))
    .collection("accounts")
    .doc("accessTokens")
    .get();

  if (accessTokensDoc.exists) {
    const accessTokens = accessTokensDoc.data().accessTokens;

    if (accessTokens.length > 0) {
      const balances = [];

      // Loop through the access tokens
      for (const accessToken of accessTokens) {
        // Make the API request to get the balance
        const balanceResponse = await axios.post(
          "http://localhost:8000/api/balance",
          { accessToken },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const accounts = balanceResponse.data.accounts;

        // Calculate the total balance for this access token
        let totalBalance = 0;
        for (const account of accounts) {
          totalBalance += account.balances.current;
        }

        // Add the total balance to the balances array
        balances.push(totalBalance);
      }

      // Store the balances array in the database
      dispatch(setBalances({balances: balances}))
    }
  }
};
