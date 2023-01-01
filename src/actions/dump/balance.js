import { db } from "../../firebase/firebase";
import { setAccounts } from "../../redux/accountSlice";
import axios from "axios";

export const updateBalances = async (email, dispatch) => {
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

      // Loop through the access tokens
      console.log("POST Call to updateBalances")

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
        const accounts = balanceResponse.data.accounts

        const itemResponse = await axios.post(
          "http://localhost:8000/api/item",
          { accessToken },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

         const institution = await itemResponse.data.institution.name;
        const item_id = await itemResponse.data.item.item_id;

        let totalBalance = 0;
        for (const account of accounts) {
          totalBalance += account.balances.available;
        }

        // Add the total balance to the balances array
        res.push({
          item_id: item_id,
          name: institution, 
          balance: totalBalance,
          access_token: accessToken
        })
      }

      // Store the balances array in the database
      dispatch(setAccounts(res))
    }
  }
};
