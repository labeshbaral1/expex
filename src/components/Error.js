import { SystemSecurityUpdate } from '@mui/icons-material';
import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

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
      "amount": 4.22,
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
      "amount": 500,
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


function MyChart() {
  const data = Data1.map(transaction => ({
    name: transaction.merchant_name || "other",
    value: transaction.amount
  }));
  
  return (
    <ResponsiveContainer width="100%" height={600}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={200}
          fill="#635BFF"
          label="name"
        />
        {/* <Legend /> */}
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

// const Data1 = [
//   {
//     "merchantName": "jolewe",
//     "amount": 6.33
//   },
//   {
//     "merchantName": "jolee",
//     "amount": 4.33
//   },
//   {
//     "merchantName": "jole",
//     "amount": 1.33
//   },
//   {
//     "merchantName": "joleer",
//     "amount": 7.33
//   }
// ]

export default MyChart

// const Data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
//   { name: 'Group E', value: 278 },
//   { name: 'Group F', value: 189 },
// ];





