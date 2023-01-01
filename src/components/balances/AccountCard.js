import { useState } from "react";
import "./AccountCard.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function AccountCard({ name, numberOfAccounts, balance, transactions }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const imgUrl = `/assets/logo/${name
    .toLowerCase()
    .replace(/\s/g, "")}-logo.png`;

  const img = new Image();
  img.src = imgUrl;

  return (
    <>
      <div
        className="account-card"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <div className="left-container">
          <div className="account-logo">
            {img.naturalWidth === 0 ? (
              <img
                src="/assets/logo/default-logo.png"
                alt={`/assets/logo/default-logo.png`}
              />
            ) : (
              <img src={imgUrl} alt={`/assets/logo/default-logo.png`} />
            )}
          </div>
          <div className="account-content">
            <h1 className="account-name">{name}</h1>
            <div className="account-number">
              {numberOfAccounts ? numberOfAccounts : "no"} accounts available
            </div>
          </div>
        </div>
        {numberOfAccounts && <div className="drop-carrot">⌄</div>}

        <div className="account-balance">${balance}</div>
      </div>

      <div
        className="dropDown"
        style={{ display: showDropDown ? "block" : "none" }}
      >
        <div className="dropDown-titles">
          <div className="dropDownTitle">Date</div>
          <div className="dropDownTitle">Merchant</div>
          <div className="dropDownTitle">Name</div>
        </div>
        {transactions.map((transaction) => {
          return (
            <div className="account-card-transaction">
              <div className="account-card-transaction-date">
                {transaction.date}
              </div>
              <div className="account-card-transaction-name">
                {transaction.merchant_name
                  ? transaction.merchant_name
                  : transaction.name}
              </div>
              <div className="account-card-transaction-amount"></div>
              {transaction.amount}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AccountCard;
