import { useState } from "react";
import "./AccountCard.css";

function AccountCard({ name, balance, transactions }) {
  const [showTransactions, setShowTransactions] = useState(false);

  return (
    <div className="account-card" onClick={() => setShowTransactions(!showTransactions)}>
      <div className="account">
        <div className="account-name">{name}</div>
        <div className="account-balance">{balance ? balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : ''}</div>
      </div>

      <div
        className="drop-down-transactions"
        style={{ display: showTransactions ? "block" : "none" }}
      >
        {

          transactions.map((transaction) => {
            return (
              <div className="drop-down-transaction">
                <div className="drop-down-transaction-category">
                  {transaction.category[0]}
                </div>
                <div className="drop-down-transaction-name">
                  {transaction.name}
                </div>
                <div className="drop-down-transaction-amount">
                  {transaction.amount < 0 ? `-$` : `$`}{Math.abs(transaction.amount)}
                </div>
              </div>
            );


          })}
      </div>
    </div>
  );
}

export default AccountCard;
