import { useState } from "react";
import "./ItemCard.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountCard from "./AccountCard";

function ItemCard({
  name,
  numberOfAccounts,
  balance,
  allTransactions,
  accounts,
}) {


  const [showDropDown, setShowDropDown] = useState(false);
  const imgUrl = `/assets/logo/${name
    .toLowerCase()
    .replace(/\s/g, "")}-logo.png`;

  const img = new Image();
  img.src = imgUrl;

  function getTransactions(account_id, allTransactions) {
    const transactions = []

    // Loop through all the transactions
    for (let i = 0; i < allTransactions.length; i++) {
      // Check if the transaction's account ID matches the provided account ID
      const transactions = allTransactions.filter(
        (transaction) => transaction.account_id == account_id
      );

      // Return the array of transactions
      return transactions;
    }
  }

    return (
      <>
        <div
          className="item-card"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <div className="left-container">
            <div className="item-logo">
              {img.naturalWidth === 0 ? (
                <img
                  src="/assets/logo/default-logo.png"
                  alt={`/assets/logo/default-logo.png`}
                />
              ) : (
                <img src={imgUrl} alt={`/assets/logo/default-logo.png`} />
              )}
            </div>
            <div className="item-content">
              <h1 className="item-name">{name}</h1>
              <div className="item-number">
                {numberOfAccounts ? numberOfAccounts : "no"} accounts available
              </div>
              
            </div>
          </div>
          {/* <div className="drop-carrot">⌄</div> */}
          <div className="item-balance">{balance ? balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : ''}</div>
        </div>

        <div
          className="dropDown"
          style={{ display: showDropDown ? "block" : "none" }}
        >
          {showDropDown &&
            accounts.map((account) => {


const transactions = getTransactions(
                account.account_id,
                allTransactions
              );
              return (
                <AccountCard
                  name={account.name}
                  balance={account.balances.available}
                  transactions={transactions}
                />
              );
            })}
        </div>
      </>
    );
  }


export default ItemCard;

// {transactions.map((transaction) => {
//   return (
//     <div className="account-card-transaction">
//       <div className="account-card-transaction-date">
//         {transaction.date}
//       </div>
//       <div className="account-card-transaction-name">
//         {transaction.merchant_name
//           ? transaction.merchant_name
//           : transaction.name}
//       </div>
//       <div className="account-card-transaction-amount"></div>
//       {transaction.amount}
//     </div>
//   );
// })}
