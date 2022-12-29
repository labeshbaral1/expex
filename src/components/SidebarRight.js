import React, { useEffect, useState } from "react";
import "./SidebarRight.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBalance } from "../actions/api/balance";
import { updateTransaction } from "../actions/api/transactions";

function SidebarRight() {
  const dispatch = useDispatch()
  const email = useSelector(state => state.user.email)



  useEffect(()=>{
    updateTransaction(email, dispatch)
  }, [])
  

  return (
    <div class="sidebarRight">
      Right SideBar

      
    </div>
  );
}

export default SidebarRight;
