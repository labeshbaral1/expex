
import React, { useState, useEffect, useMemo } from "react";
import queryString from "query-string";
import { useSelector, useDispatch } from "react-redux";
import "./History.css";

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell
} from "recharts";
import axios from 'axios';



const API_TOKEN = "cf643daad3i9lmcgqu10cf643daad3i9lmcgqu1g";
const STOCK_SYMBOLS = ["TSLA", "MSFT", "DIS", "SBUX", "SNAP"]
const INTERVAL_OPTIONS = [30, 60, 90, 120]
const API_URL = "https://finnhub.io/api/v1/stock/candle"
const RESOLUTION = "D"
const COLORS = ["blue", "green", "yellow", "coral"]

const allocation = [
  {
    name: "TSLA",
    value: 0.35,
  },
  {
    name: "MSFT",
    value: 0.2,
  },
  {
    name: "DIS",
    value: 0.2,
  },
  {
    name: "SBUX",
    value: 0.25
  }
];

function getUnixTime(date) {
  return date.getTime() / 1000 | 0;
}

function transformData(data) {
  return data.c.map((item, index) => ({
    close: Number(item).toFixed(2),
    open: Number(data.o[index]).toFixed(2),
    timestamp: new Date(data.t[index] * 1000).toLocaleDateString()
  }))
}

function History() {
  const [symbol, setSymbol] = useState(STOCK_SYMBOLS[0])
  const [data, setData] = useState(null);
  const [interval, setInterval] = useState(INTERVAL_OPTIONS[0]);

  const to = useMemo(() => {
    return getUnixTime(new Date());
  }, []);
  const from = useMemo(() => {
    let d = new Date();
    d.setDate(d.getDate() - interval);

    return getUnixTime(d);
  }, [interval])

  useEffect(() => {
    if (!from || !to || !symbol) {
      return;
    }

    const query = {
      token: API_TOKEN,
      resolution: RESOLUTION,
      from,
      to,
      symbol
    };

    fetch(`${API_URL}?${queryString.stringify(query)}`)
      .then(async data => setData(transformData(await data.json())))
      .catch(error => console.error(error))

  }, [from, to, symbol]);

  const handleChangeStock = event =>
    setSymbol(event.target.value);

  const handleChangeInterval = event =>
    setInterval(event.target.value);

  return (
    <div>
      <div className="container">
        <div className="selector">
          <label for="stock_select" className="label">
            <strong>Stock Symbol: </strong>
          </label>
          <select id="stock_select" onChange={handleChangeStock}>
            {STOCK_SYMBOLS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="selector">
          <label for="interval_select" className="label">
            <strong>Time Interval: </strong>
          </label>
          <select onChange={handleChangeInterval}>
            {INTERVAL_OPTIONS.map(s => <option key={s} value={s}>Past {s} days</option>)}
          </select>
        </div>
      </div>
      <div className="container">
        <LineChart width={900} height={500} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis type="number" allowDecimals={true}
            allowDataOverflow={true} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="open" stroke="blue" dot={false} />
          <Line type="monotone" dataKey="close" stroke="gray" dot={false} />
        </LineChart>
      </div>
      <div className="container">
        <PieChart width={730} height={250}>
          <Pie data={allocation} dataKey="value" nameKey="name">
            {allocation.map((item, index) => (
              <Cell key={index} stroke={'#000'} strokeWidth={1} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default History;