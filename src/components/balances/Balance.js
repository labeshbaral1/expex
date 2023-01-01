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
import AccountCard from "./AccountCard";
import "./Balance.css";

export default function Balance() {
  const email = useSelector((state) => state.user.email);
  const accounts = useSelector((state) => state.accounts.accounts);

  const mappedDictionary = Object.entries(accounts).map(([key, value]) => {
    return (
      <AccountCard
        key={key}
        name={value.name}
        numberOfAccounts={2}
        balance={value.balance}
        transactions={value.transactions}
      />
    );
  });

  return (
    <div className="balances">
      <div className="accounts-container">{mappedDictionary}</div>
    </div>
  );
}
