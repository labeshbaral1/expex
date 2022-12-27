import React, { useEffect, useState } from "react";
import "./SidebarRight.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {updateBalance} from "../actions/balance"

function SidebarRight() {

  const dispatch = useDispatch();
  const [bal, setBal] = useState(0)


  useEffect(()=> {

    updateBalance(dispatch).then(b => setBal(b))

    
}, [])
 



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
