import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LinkAccount.css";
import Jack from "../assets/jack.png";
import { FiLink } from "react-icons/fi";
import { PlaidLink } from "react-plaid-link";
import { generateLinkTransactions } from "../actions/linkActions";
import { getAccounts, parseAccounts} from "../actions/accountActions";
import {getTransactions} from "../actions/signinAction"
import {parseTransactions} from "../actions/transactionActions"

function LinkAccount() {
  const linkToken = useSelector((state) => state.user.linkToken);

  const uid = useSelector((state) => state.user.uid);
  const email = useSelector(state => state.user.email)
  const dispatch = useDispatch()


  return (
    <div className="link">
      <PlaidLink
        className="plaid-link"
        token={linkToken}
        onSuccess={(public_token) => {
          generateLinkTransactions(public_token, uid, email, dispatch, (uid) => {
            getAccounts(uid, dispatch, (accounts) => {
              parseAccounts(accounts, dispatch);
            });

            getTransactions(uid, dispatch, (transactions) => {
              parseTransactions(transactions, dispatch);
            });
          });
        }}
      >
        <div className="tile">
          <FiLink className="symbol" size={150} />
          <h3>Link your Account</h3>
        </div>
        <img className="jack" src={Jack} alt="" />{" "}
      </PlaidLink>
    </div>
  );
}

export default LinkAccount;
