import React, { useEffect, useState } from "react";
import "./SidebarRight.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBalance } from "../actions/api/balance";
import { getMonthTransactions, updateTransaction } from "../actions/api/transactions";

function SidebarRight() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const accounts = useSelector((state) => state.accounts.accounts);

  useEffect(() => {
    getMonthTransactions(email, dispatch)
  }, []);

  function getTop5Transactions() {
    const res = [];

    // Iterate over the accounts in the accounts object
    Object.entries(accounts).forEach(([key, value]) => {
      // Get the first 5 transactions for the current account
      const transactions = value.transactions.slice(0, 5);
      // Add the transactions to the res array
      res.push(...transactions);
    });

    // Sort the transactions by date in descending order
    res.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Return the first 5 transactions
    return res.slice(0, 5);
  }

  const mappedDictionary = Object.entries(getTop5Transactions()).map(
    ([key, value]) => {
      return (
        <div key={value.id} className="transaction">
          <div className="merchant-name">{value.merchant_name}</div>
          <div className="transaction-container">
            <div className="date">{value.date}</div>
            <div className="price">{value.amount}</div>
          </div>
        </div>
      );
    }
  );

  return (
    <div className="sidebarRight">
    <h1 className="sideBarRight-title">
</h1>
      {mappedDictionary}
    </div>
  );
}

export default SidebarRight;
