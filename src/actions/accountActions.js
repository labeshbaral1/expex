import React from "react";
import axios from "axios";

export const getAccounts = async () => {
  const accessTokensDoc = await db
    .collection("users")
    .doc(btoa(email))
    .collection("accounts")
    .doc("accessTokens")
    .get();

  if (accessTokensDoc.exists) {
    const accessTokens = accessTokensDoc.data().accessTokens;
  }
};
