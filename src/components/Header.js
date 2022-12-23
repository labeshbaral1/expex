import React from 'react'
import "./Header.css"
import { Link  } from 'react-router-dom'


function Header() {
  return (
    <nav className='navbar'>
      <div className="container">

        <Link to="">
          <h1 className="logo">expex</h1>
        </Link>

        <div className="navigation">

          <Link to="overview">
            <div className="nav-item" >Overview</div>
          </Link>
          <Link to="transactions">
          <div className="nav-item">Transactions</div>
          </Link>

          <Link to="budget">
          <div className="nav-item">Budget</div>
          </Link>

          <Link to="history">
          <div className="nav-item">History</div>
          </Link>

          <Link to="error">
          <div className="nav-item">Help</div>
          </Link>

          
        </div>
      </div>
    </nav>
  )
}

export default Header