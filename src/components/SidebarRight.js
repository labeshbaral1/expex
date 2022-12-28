import React, { useEffect, useState } from "react";
import "./SidebarRight.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBalance } from "../actions/balance";
import { db } from "../firebase/firebase";

function SidebarRight() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  let balances = useSelector((state) => state.accounts.balances);
  let i = 1;

  useEffect(() => {
    updateBalance(email, dispatch);
  }, []);

  return (
    <div class="sidebarRight">
      Right SideBar

      <div className="list">
        {balances.length == 0 ? (
          <>BALANCES IS EMPTY</>
        ) : (
          balances.map((element) => {
            return <div>Account Balance: {element}</div>;
          })
        )}
      </div>
    </div>
  );
}

export default SidebarRight;
