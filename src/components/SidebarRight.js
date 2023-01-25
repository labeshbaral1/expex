import React, { useEffect, useState } from "react";
import "./SidebarRight.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";



function SidebarRight() {

  function isToday(date) {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  }
  
  function isYesterday(date) {
    const today = new Date();
    today.setDate(today.getDate() - 2);
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  }
  
  function isThisWeek(date) {
    const today = new Date();
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));
    return date >= startOfWeek && date <= endOfWeek;
  }
  
  function getDayOfWeek(date) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    return daysOfWeek[date.getDay()];
  }
  
  function getFormattedMonthDay(date) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[date.getMonth()]} ${date.getDate()}`;
  }



  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts.accounts);

  useEffect(() => {

  }, []);

  function getTop5Transactions() {
    const res = [];
    Object.entries(accounts).forEach(([key, value]) => {
      const transactions = value.transactions.slice(0, 10);
      res.push(...transactions);
    });
    res.sort((a, b) => new Date(b.date) - new Date(a.date));
    return res.slice(0, 10);
  }

  let amount = 0;
  const mappedDictionary = Object.entries(getTop5Transactions()).map(([key, value]) => {
    amount = value.amount;
    const date = new Date(value.date);
    let formattedDateString;
    if (isToday(date)) {
      formattedDateString = 'Today';
    } else if (isYesterday(date)) {
      formattedDateString = 'Yesterday';
    } else if (isThisWeek(date)) {
      formattedDateString = getDayOfWeek(date);
    } else {
      formattedDateString = getFormattedMonthDay(date);
    }
    return (
      <div key={value.id} className="transaction" >
        <div className="transac-container">
          <div className="tran-name-containter">
            <div className="merchant-name">{value.merchant_name || value.name.substring(0,12) + "..." ||value.name}</div>
            <div className="date">{formattedDateString}</div>
          </div>
          <div className="price" style={{ color: amount > 0 ? '#52c8a0' : '#ec898b' }}>{amount > 0 ? '+' : ''}{amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'symbol' })}</div>
        </div>
      </div>
    );
  });
  
  return (
    <div className="sidebarRight">
      <h1 className="sideBarRight-title">Recent Transactions</h1>
      {mappedDictionary}
    </div>
  );
}

export default SidebarRight;















// import React, { useEffect, useState } from "react";
// import "./SidebarRight.css";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";



// function SidebarRight() {
//   const dispatch = useDispatch();
//   const accounts = useSelector((state) => state.accounts.accounts);

//   useEffect(() => {

//   }, []);

//   function getTop5Transactions() {
//     const res = [];
//     Object.entries(accounts).forEach(([key, value]) => {
//       const transactions = value.transactions.slice(0, 10);
//       res.push(...transactions);
//     });
//     res.sort((a, b) => new Date(b.date) - new Date(a.date));
//     return res.slice(0, 10);
//   }

// let amount =0
//   const mappedDictionary = Object.entries(getTop5Transactions()).map(
//     ([key, value]) => {
//       amount=value.amount;  
//       return (
//         <div key={value.id} className="transaction">
//           <div className="transac-container">
//           <div className="tran-name-containter">
//           <div className="merchant-name">{value.merchant_name || value.category}</div>
//             <div className="date">{value.date}</div>
//           </div>
//             <div className="price">{amount.toLocaleString("en-US", {style: "currency", currency: "USD", currencyDisplay: "symbol",})}</div>
//           </div>
//         </div>
//       );
//     }
//   );

//   return (
//     <div className="sidebarRight">
//       <h1 className="sideBarRight-title">Transactions</h1>
//       {mappedDictionary}
//     </div>
//   );
// }

// export default SidebarRight;
