import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./TotValTile.css";
import "./main.css"
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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function TotValTile() {

  const accounts = useSelector((state) => state.accounts.accounts);

  const [liabilities, setLiabilities] = useState(0)


  function getLiabilities(accounts) {

    let credit_balance = 0
    let loan_balance = 0
    let total_debt = 0
    let investment_balance = 0
    let cash_balance = 0
    let total_assets = 0
    let net_worth = 0

    Object.entries(accounts).map(([key, value]) => {


      for (const account of value.accounts) {

        if (account.type === 'credit') {
          credit_balance += account.balances.current

        }
        else if (account.type === 'loan') {
          loan_balance += account.balances.current

        }

        else if(account.type === 'investment'){
          investment_balance += account.balances.current
        }

        else if(account.type === 'depository'){
          cash_balance += account.balances.current
        }

        total_debt = credit_balance + loan_balance
        total_assets = investment_balance + cash_balance
        net_worth = total_assets - total_debt
        net_worth = Math.round(net_worth * 100) / 100;
        

      }
    })

    return { credit_balance: credit_balance, loan_balance: loan_balance, total_debt: total_debt.toLocaleString(), total_assets: total_assets.toLocaleString(), investment_balance: investment_balance.toLocaleString(), cash_balance: cash_balance.toLocaleString(), net_worth: net_worth.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol",})}
  }

  useEffect(() => setLiabilities(getLiabilities(accounts)), [])

    return (
        <div className="totvalTile two-tile">
          <h1 className="tile-title">Total Asset Value</h1>
          <div className="tot-amount">{liabilities.net_worth}</div>
          <div className="gain-loss-cont">
            <div className="gain-loss">
              <div className="up-arrow">▲</div>
              <div>1.41%</div>
            </div>
          </div>

          <div className="tot-chart">
            <ResponsiveContainer height={100}>
              <LineChart width={300} height={100} data={data}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#635BFF"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
    );
  }

  export default TotValTile

  // .toLocaleString("en-US", {
  //   style: "currency",
  //   currency: "USD",
  //   currencyDisplay: "symbol",
  // });