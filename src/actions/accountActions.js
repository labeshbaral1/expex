import React from "react";
import axios from "axios";
import { setAccounts, setDisplayElements } from "../redux/accountSlice";

export const getAccounts = (uid, dispatch, callback) => {
  axios
    .post("http://localhost:8000/accounts", {
      method: "POST",
      body: JSON.stringify({ uid }),
    })

    .then((res) => {
      console.log(res.data.accounts);

      if (res.status === 200) {
        dispatch(setAccounts(res.data.accounts));

        if (callback) {
          callback(res.data.accounts);
        }
      }
    });
};

export const parseAccounts = (rawAccounts, dispatch) => {
  let elements = rawAccounts.map((rawAccount) => (
    <tr>
      <td>{rawAccount.item_id}</td>
    </tr>
  ));

  dispatch(setDisplayElements(elements));
};
