import React, { PureComponent } from "react";
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

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/tiny-line-chart-r5z0f";

  render() {
    return (
      <React.Fragment>
        <div className="totvalTile two-tile">
          <h1 className="tile-title">Total Asset Value</h1>
          <div className="tot-amount">$56,400.90</div>
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
      </React.Fragment>
    );
  }
}