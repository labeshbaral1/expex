import React, { useEffect } from "react";
import "./BalanceTile.css";
import { useSelector, useDispatch } from "react-redux";
import { updateBalances } from "../../actions/api/balance";

function BalanceTile() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  let accounts = useSelector((state) => state.accounts.accounts);

  useEffect(() => {
    updateBalances(email, dispatch);
  }, []);

  return (
    <div className="balanceTile">
      <h1 className="tile-title">Account Balances</h1>

      {accounts.length == 0 ? (
        <>BALANCES IS EMPTY</>
      ) : (
        accounts.map((element) => {
          return (
            <div className="account">
              <div className="intitution">{element.name}:</div>
              <p className="balance">${element.balance}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default BalanceTile;
