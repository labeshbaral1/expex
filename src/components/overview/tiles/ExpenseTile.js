import React, { useState } from "react";
import "./IncomeTile.css";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Sector,
} from "recharts";
import { useSelector } from "react-redux";
import "./main.css";

export default function ExpeseTile() {

  const accounts = useSelector((state) => state.accounts.accounts);
  

  function getData(accounts) {
    let res = [];
    Object.entries(accounts).map(
      ([key, value]) => {    
        res.push(...value.transactions)
  })
  return res
}


  const Data1 = getData(accounts)
  const data = Data1.filter(transaction => transaction.amount < 0)
  .map(transaction => ({
    name: transaction.category[0] || "other",
    value: Math.abs(transaction.amount)
  }));


  const newDic = {};

  data.forEach((transaction) => {
    if (newDic[transaction.name]) {
      newDic[transaction.name] += transaction.value;
    } else {
      newDic[transaction.name] = transaction.value;
    }
  });

  const dataForPieChart = Object.entries(newDic).map(([name, value]) => ({
    name,
    value,
  }));

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text
          className="center-text"
          x={cx}
          y={cy}
          dy={8}
          textAnchor="middle"
          fill={fill}
        >
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          className="bob"
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={2}
          dx={-8}
          textAnchor={textAnchor}
          fill="black"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <React.Fragment>
      <div className="incomeTile one-tile">
        <h1 className="tile-title">Expense</h1>
        <ResponsiveContainer width="140%" height="88%">
          <PieChart
            margin={{ top: 10, left: 90, right: 90, bottom: 10 }}
            className="jim"
            width="160%"
            height="auto"
          >
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={dataForPieChart}
              innerRadius="48%"
              outerRadius="70%"
              fill="#635BFF"
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>
  );
};
