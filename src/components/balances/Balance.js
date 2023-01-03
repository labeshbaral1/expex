import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import AccountCard from "./ItemCard";
import "./Balance.css";

export default function Balance() {
  const email = useSelector((state) => state.user.email);
  const accounts = useSelector((state) => state.accounts.accounts);

  const mappedDictionary = Object.entries(accounts).map(([key, value]) => {
    return (
      <AccountCard
        key={key}
        name={value.name}
        numberOfAccounts={value.accounts.length}
        balance={value.balance}
        allTransactions={value.transactions}
        accounts = {value.accounts}
      />
    );
  });

  return (
    <div className="balances">
      <div className="accounts-container">{mappedDictionary}</div>
    </div>
  );
}
