import React, { useEffect, useState } from "react";
import "./SidebarRight.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";



function SidebarRight() {
  const dispatch = useDispatch();
const accounts = useSelector((state) => state.accounts.accounts);

  useEffect(() => {

  }, []);

  function getTop5Transactions() {
    const res = [];
    Object.entries(accounts).forEach(([key, value]) => {
      const transactions = value.transactions.slice(0, 5);
      res.push(...transactions);
    });
    res.sort((a, b) => new Date(b.date) - new Date(a.date));
    return res.slice(0, 5);
  }

  const mappedDictionary = Object.entries(getTop5Transactions()).map(
    ([key, value]) => {
      return (
        <div key={value.transaction_id} className="transaction">
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
    <h1 className="sideBarRight-title">Transactions
</h1>
      {mappedDictionary}
    </div>
  );
}

export default SidebarRight;
