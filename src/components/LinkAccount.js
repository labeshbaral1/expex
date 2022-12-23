import React from 'react'
import "./LinkAccount.css"
import Jack from "../assets/jack.png"
import { FiLink } from "react-icons/fi";


function LinkAccount() {
  return (
    <div className='link'>
        <div className="tile">
            <FiLink className="symbol" size={150}/>
            <h3>Link your Account</h3>
        </div>
        <img className="jack" src={Jack} alt="" />

    </div>
  )
}

export default LinkAccount