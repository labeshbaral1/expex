import { db } from "../../firebase/firebase";
import axios from 'axios'

export const updateTransaction = async (email, dispatch) => {

  console.log("POST call made to updateTransactions")

  const numberOfTransactions = 5

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
        const transactionResponse = await axios.post(
          "http://localhost:8000/api/transactions",
          { accessToken , numberOfTransactions},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
         const transactions = await transactionResponse.data;
         console.log(transactions)
      }
    }
  }
};
