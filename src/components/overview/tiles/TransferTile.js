import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./TransferTile.css";
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

const data2 = [
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
    amt: 6500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 4100,
  },
];


function Transfer() {
  return (
    <div className='transferTile one-tile'>
      <h1>Market Snapshot</h1>
      <div className="stock">
          <div className="ticker">SPY</div>
          <div className="stock-chart">
          <ResponsiveContainer height={20}>
              <LineChart width={30} height={10} data={data2}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#52c8a0"
                  dot={false}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='stock-price'>$380.82</div>
      </div>

      <div className="stock2">
          <div className="ticker">QQQ</div>
          <div className="stock-chart">
          <ResponsiveContainer height={20}>
              <LineChart width={30} height={10} data={data2}>
                <Line
                  type="monotone"
                  dataKey="amt"
                  stroke="#52c8a0"
                  dot={false}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='stock-price'>$264.48</div>
      </div>

      <div className="stock2">
          <div className="ticker">PINS</div>
                    <div className="stock-chart">
          <ResponsiveContainer height={20}>
              <LineChart width={30} height={10} data={data2}>
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#ec898b"
                  dot={false}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='stock-price2'>$264.48</div>
      </div>

      {/* <div className="stock2">
          <div className="ticker">TSLA</div>
          <div className='stock-price'>$257.48</div>
      </div> */}
      </div>

  )
  }
  export default Transfer
