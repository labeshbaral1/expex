import React, { useEffect } from "react";
import "./BalanceTile.css";
import { useSelector, useDispatch } from "react-redux";
import { updateBalances } from "../../actions/api/balance";
import { unLinkAccount } from "../../actions/api/account";
import { db } from "../../firebase/firebase";

function BalanceTile() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  let accounts = useSelector((state) => state.accounts.accounts);

  useEffect(() => {
    updateBalances(email, dispatch);
  }, []);

  const mappedDictionary = Object.entries(accounts).map(([key, value]) => {
    return (
      <div key={value.id} className="bank">
        <div className="bank-container">
          <div className="bank-name">{value.name}:</div>
          <div className="account-number">**9022</div>
        </div>
        <p className="bank-amount">${value.balance}</p>
      </div>
    );
  });

  return (
    <div className="balanceTile">
      <h1 className="tile-title">Account Balances</h1>

      {accounts.length == 0 ? <>BALANCES IS EMPTY</> : mappedDictionary}
    </div>
  );
}

export default BalanceTile;
