import React, { useEffect, useState } from "react";
import "./SidebarRight.css";
import { Link } from "react-router-dom";
import { useSelect } from "@mui/base";
import { useSelector, useDispatch } from "react-redux";
function SidebarRight() {
  const [bal, setBal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBalance = async () => {
      const balanceResponse = await fetch("http://localhost:8000/api/balance", {
        method: "GET",
      });

      const balance = await balanceResponse.json();

      let totalBalance = 0;
      for (const account of balance.accounts) {
        totalBalance += account.balances.current;
      }

    //   dispatch(setBalance({ balance: totalBalance }));
      setBal(totalBalance)
    };

    getBalance();
  }, []);

  return (
    <div class="sidebarRight">
      <div className="account">
        <div className="account-list">
          <div className="title">Accounts</div>
          <p className="account">Account 1 : $100,000</p>
          <p className="account">Account 2 : $200,000</p>
          <p className="account">Account 3 : $300,000</p>
        </div>
      </div>
      <div className="transactions">
        <div className="title">Balance</div>
        <div className="balance">{bal}</div>
      </div>
    </div>
  );
}

export default SidebarRight;
