import React, { useEffect } from "react";
import "./BalanceTile.css";
import { useSelector, useDispatch } from "react-redux";
import { updateBalance } from "../../actions/balance";

function BalanceTile() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  let balances = useSelector((state) => state.accounts.balances);

  useEffect(() => {
    updateBalance(email, dispatch);
  }, []);

  return (
    <div className="balanceTile">
      <h1 className="tile-title">Account Balances</h1>

      {balances.length == 0 ? (
        <>BALANCES IS EMPTY</>
      ) : (
        balances.map((element) => {
          return (
            <div className="account">
              <div className="intitution">Account Balance:</div>
              <p className="balance">${element}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default BalanceTile;
