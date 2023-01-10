import React, { useEffect } from "react";
import "./BalanceTile.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { unLinkAccount } from "../../../actions/api/account";
import { db } from "../../../firebase/firebase";
import "./main.css"


function BalanceTile() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const accounts = useSelector((state) => state.accounts.accounts);

  useEffect(() => {

  }, []);

  const mappedDictionary = Object.entries(accounts).map(([key, value]) => {
    return (

      <div key={value.name} className="bank">
        <div className="bank-container">
          <div className="bank-name">{value.name}:</div>
          <div className="account-number">**9022</div>
        </div>
        <p className="bank-amount">${value.balance.toLocaleString()}</p>
      </div>
    );
  });

  return (
    
    <div className="balanceTile one-tile">
      <h1 className="tile-title">Account Balances</h1>
      {accounts.length == 0 ? <>BALANCES IS EMPTY</> : mappedDictionary}
    </div>

  );
}

export default BalanceTile;
