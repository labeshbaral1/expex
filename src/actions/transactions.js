import { db } from "../firebase/firebase";
import axios from 'axios'

export const updateTransaction = async (email, dispatch) => {
  const accessTokensDoc = await db
    .collection("users")
    .doc(btoa(email))
    .collection("accounts")
    .doc("accessTokens")
    .get();

  if (accessTokensDoc.exists) {
    const accessTokens = accessTokensDoc.data().accessTokens;

    if (accessTokens.length > 0) {
      for (const accessToken of accessTokens) {
        // Make the API request to get the item
        const balanceResponse = await axios.post(
          "http://localhost:8000/api/accounts",
          { accessToken },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

         const accounts = await balanceResponse.data;
        console.log(accounts)
      }
    }
  }
};
