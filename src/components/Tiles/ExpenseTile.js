import React, { PureComponent } from 'react';
import "./ExpenseTile.css"
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Sector } from 'recharts';

const Data1 = [
  {
    "account_id": "mxXMzz6a74i1Jyo8llajCDV73ELM9NtMBKmWd",
    "account_owner": null,
    "amount": 6.33,
    "authorized_date": "2022-11-13",
    "authorized_datetime": null,
    "category": [
      "Travel",
      "Taxi"
    ],
    "category_id": "22016000",
    "check_number": null,
    "date": "2022-11-14",
    "datetime": null,
    "iso_currency_code": "USD",
    "location": {
      "address": null,
      "city": null,
      "country": null,
      "lat": null,
      "lon": null,
      "postal_code": null,
      "region": null,
      "store_number": null
    },
    "merchant_name": "Uber",
    "name": "Uber 072515 SF**POOL**",
    "payment_channel": "in store",
    "payment_meta": {
      "by_order_of": null,
      "payee": null,
      "payer": null,
      "payment_method": null,
      "payment_processor": null,
      "ppd_id": null,
      "reason": null,
      "reference_number": null
    },
    "pending": false,
    "pending_transaction_id": null,
    "personal_finance_category": null,
    "transaction_code": null,
    "transaction_id": "35Xn77ZLo6U5AKdeBBXbt4KvdRJldof83BaoP",
    "transaction_type": "special",
    "unofficial_currency_code": null
  },
  {
    "account_id": "y1WkQQ6DyoIbeQEdmmnrhzWR6ZMbldcWV13lA",
    "account_owner": null,
    "amount": -4.22,
    "authorized_date": "2022-11-26",
    "authorized_datetime": null,
    "category": [
      "Transfer",
      "Credit"
    ],
    "category_id": "21005000",
    "check_number": null,
    "date": "2022-11-26",
    "datetime": null,
    "iso_currency_code": "USD",
    "location": {
      "address": null,
      "city": null,
      "country": null,
      "lat": null,
      "lon": null,
      "postal_code": null,
      "region": null,
      "store_number": null
    },
    "merchant_name": null,
    "name": "INTRST PYMNT",
    "payment_channel": "other",
    "payment_meta": {
      "by_order_of": null,
      "payee": null,
      "payer": null,
      "payment_method": null,
      "payment_processor": null,
      "ppd_id": null,
      "reason": null,
      "reference_number": null
    },
    "pending": false,
    "pending_transaction_id": null,
    "personal_finance_category": null,
    "transaction_code": null,
    "transaction_id": "db3MnnRNBqt4ZXoJjjnPiMeba7Gla6C6em3gX",
    "transaction_type": "special",
    "unofficial_currency_code": null
  },
  {
    "account_id": "mxXMzz6a74i1Jyo8llajCDV73ELM9NtMBKmWd",
    "account_owner": null,
    "amount": 89.4,
    "authorized_date": "2022-11-26",
    "authorized_datetime": null,
    "category": [
      "Food and Drink",
      "Restaurants"
    ],
    "category_id": "13005000",
    "check_number": null,
    "date": "2022-11-27",
    "datetime": null,
    "iso_currency_code": "USD",
    "location": {
      "address": null,
      "city": null,
      "country": null,
      "lat": null,
      "lon": null,
      "postal_code": null,
      "region": null,
      "store_number": null
    },
    "merchant_name": null,
    "name": "SparkFun",
    "payment_channel": "in store",
    "payment_meta": {
      "by_order_of": null,
      "payee": null,
      "payer": null,
      "payment_method": null,
      "payment_processor": null,
      "ppd_id": null,
      "reason": null,
      "reference_number": null
    },
    "pending": false,
    "pending_transaction_id": null,
    "personal_finance_category": null,
    "transaction_code": null,
    "transaction_id": "BXKLnnovAau9nmzNBBM8CJrewQbXw4FLnQGeL",
    "transaction_type": "place",
    "unofficial_currency_code": null
  },
  {
    "account_id": "mxXMzz6a74i1Jyo8llajCDV73ELM9NtMBKmWd",
    "account_owner": null,
    "amount": 12,
    "authorized_date": "2022-11-28",
    "authorized_datetime": null,
    "category": [
      "Food and Drink",
      "Restaurants",
      "Fast Food"
    ],
    "category_id": "13005032",
    "check_number": null,
    "date": "2022-11-28",
    "datetime": null,
    "iso_currency_code": "USD",
    "location": {
      "address": null,
      "city": null,
      "country": null,
      "lat": null,
      "lon": null,
      "postal_code": null,
      "region": null,
      "store_number": "3322"
    },
    "merchant_name": "McDonald's",
    "name": "McDonald's",
    "payment_channel": "in store",
    "payment_meta": {
      "by_order_of": null,
      "payee": null,
      "payer": null,
      "payment_method": null,
      "payment_processor": null,
      "ppd_id": null,
      "reason": null,
      "reference_number": null
    },
    "pending": false,
    "pending_transaction_id": null,
    "personal_finance_category": null,
    "transaction_code": null,
    "transaction_id": "rPW7aa6K1ei8RxEneejJheLoqBQPqltDgnvKd",
    "transaction_type": "place",
    "unofficial_currency_code": null
  },
  {
    "account_id": "mxXMzz6a74i1Jyo8llajCDV73ELM9NtMBKmWd",
    "account_owner": null,
    "amount": 4.33,
    "authorized_date": "2022-11-28",
    "authorized_datetime": null,
    "category": [
      "Food and Drink",
      "Restaurants",
      "Coffee Shop"
    ],
    "category_id": "13005043",
    "check_number": null,
    "date": "2022-11-28",
    "datetime": null,
    "iso_currency_code": "USD",
    "location": {
      "address": null,
      "city": null,
      "country": null,
      "lat": null,
      "lon": null,
      "postal_code": null,
      "region": null,
      "store_number": null
    },
    "merchant_name": "Starbucks",
    "name": "Starbucks",
    "payment_channel": "in store",
    "payment_meta": {
      "by_order_of": null,
      "payee": null,
      "payer": null,
      "payment_method": null,
      "payment_processor": null,
      "ppd_id": null,
      "reason": null,
      "reference_number": null
    },
    "pending": false,
    "pending_transaction_id": null,
    "personal_finance_category": null,
    "transaction_code": null,
    "transaction_id": "zLwlZZ6AVgFBeWbwqqVli5NboD9Po8TgWzGPw",
    "transaction_type": "place",
    "unofficial_currency_code": null
  },
  {
    "account_id": "mxXMzz6a74i1Jyo8llajCDV73ELM9NtMBKmWd",
    "account_owner": null,
    "amount": -500,
    "authorized_date": "2022-11-29",
    "authorized_datetime": null,
    "category": [
      "Travel",
      "Airlines and Aviation Services"
    ],
    "category_id": "22001000",
    "check_number": null,
    "date": "2022-11-29",
    "datetime": null,
    "iso_currency_code": "USD",
    "location": {
      "address": null,
      "city": null,
      "country": null,
      "lat": null,
      "lon": null,
      "postal_code": null,
      "region": null,
      "store_number": null
    },
    "merchant_name": "United Airlines",
    "name": "United Airlines",
    "payment_channel": "in store",
    "payment_meta": {
      "by_order_of": null,
      "payee": null,
      "payer": null,
      "payment_method": null,
      "payment_processor": null,
      "ppd_id": null,
      "reason": null,
      "reference_number": null
    },
    "pending": false,
    "pending_transaction_id": null,
    "personal_finance_category": null,
    "transaction_code": null,
    "transaction_id": "KXNAzzLy6MurgBjlEEzws8vBWX6aWGFmbLvwR",
    "transaction_type": "special",
    "unofficial_currency_code": null
  },
  {
    "account_id": "mxXMzz6a74i1Jyo8llajCDV73ELM9NtMBKmWd",
    "account_owner": null,
    "amount": 5.4,
    "authorized_date": "2022-11-30",
    "authorized_datetime": null,
    "category": [
      "Travel",
      "Taxi"
    ],
    "category_id": "22016000",
    "check_number": null,
    "date": "2022-12-01",
    "datetime": null,
    "iso_currency_code": "USD",
    "location": {
      "address": null,
      "city": null,
      "country": null,
      "lat": null,
      "lon": null,
      "postal_code": null,
      "region": null,
      "store_number": null
    },
    "merchant_name": "Uber",
    "name": "Uber 063015 SF**POOL**",
    "payment_channel": "in store",
    "payment_meta": {
      "by_order_of": null,
      "payee": null,
      "payer": null,
      "payment_method": null,
      "payment_processor": null,
      "ppd_id": null,
      "reason": null,
      "reference_number": null
    },
    "pending": false,
    "pending_transaction_id": null,
    "personal_finance_category": null,
    "transaction_code": null,
    "transaction_id": "qk1Jdd6qM7Sg5EwVZZJptzyxqLEVqjCVkZqbd",
    "transaction_type": "special",
    "unofficial_currency_code": null
  },
  {
    "account_id": "y1WkQQ6DyoIbeQEdmmnrhzWR6ZMbldcWV13lA",
    "account_owner": null,
    "amount": 25,
    "authorized_date": "2022-11-30",
    "authorized_datetime": null,
    "category": [
      "Payment",
      "Credit Card"
    ],
    "category_id": "16001000",
    "check_number": null,
    "date": "2022-12-01",
    "datetime": null,
    "iso_currency_code": "USD",
    "location": {
      "address": null,
      "city": null,
      "country": null,
      "lat": null,
      "lon": null,
      "postal_code": null,
      "region": null,
      "store_number": null
    },
    "merchant_name": null,
    "name": "CREDIT CARD 3333 PAYMENT *//",
    "payment_channel": "other",
    "payment_meta": {
      "by_order_of": null,
      "payee": null,
      "payer": null,
      "payment_method": null,
      "payment_processor": null,
      "ppd_id": null,
      "reason": null,
      "reference_number": null
    },
    "pending": false,
    "pending_transaction_id": null,
    "personal_finance_category": null,
    "transaction_code": null,
    "transaction_id": "xMWDee6RypIb8aVRwwJWh3jRQvn7QECAvqElk",
    "transaction_type": "special",
    "unofficial_currency_code": null
  }
]



const data = Data1.filter(transaction => transaction.amount < 0)
  .map(transaction => ({
    name: transaction.category[0] || "other",
    value: Math.abs(transaction.amount)
  }));

const newDic = {};

data.forEach(transaction => {
  if (newDic[transaction.name]) {
    newDic[transaction.name] += transaction.value;
  } else {
    newDic[transaction.name] = transaction.value;
  }
});

const dataForPieChart = Object.entries(newDic).map(([name, value]) => ({ name, value }));


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
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
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

      {/* <text className='bob' x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text className='bob' x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999"> */}

      <text className='bob' x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={2} dx={-8} textAnchor={textAnchor} fill="black">
        {`${(percent * 100).toFixed(0)}%`}</text>
      {/* <text className='bob' x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`${(percent * 100).toFixed(2)}%`}
      </text> */}
    </g>
  );
};

export default class Example extends PureComponent {



  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='expenseTile'>
          <h1 className='tile-title'>Expenses</h1>
          <ResponsiveContainer width="140%" height="88%" >
          {/* <div className="chart-container"> */}
            <PieChart margin={{top: 10, left: 90, right: 90, bottom: 10}} className='jim' width="160%" height="120%">
              <Pie
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                data={dataForPieChart}
                cx="50%"
                cy="50%"
                // innerRadius="48%"
                // outerRadius="70%"
                innerRadius="60%"
                outerRadius="80%"
                fill="#635BFF"
                dataKey="value"
                onMouseEnter={this.onPieEnter}
              />
            </PieChart>
            {/* </div> */}
          </ResponsiveContainer>

        </div>
      </React.Fragment>
    );
  }
}




// function MyChart() {
//   const data = Data1.filter(transaction => transaction.amount < 0)
//     .map(transaction => ({
//       name: transaction.merchant_name || "other",
//       value: Math.abs(transaction.amount)
//     }));

//   return (
//     <React.Fragment>
//       <div className='expenseTile'>
//         <h1 className='tile-title'>Expenses</h1>
//         <ResponsiveContainer width={340} height={250}>
//           <PieChart className={"chart-cont"} width={160} height={160}>
//             <Pie
//               dataKey="value"
//               isAnimationActive={true}
//               data={data}
//               cx="50%"
//               cy="50%"
//               outerRadius={80}
//               fill="#635BFF"
//               label="name"
//             />
//             {/* <Legend /> */}
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </React.Fragment>

//   )
// }

// export default MyChart

// function IncomeTile() {
//   return (
//     <div className='incomeTile'>
//     <h1 className='tile-title'>Income</h1>
// </div>  

// )
// }