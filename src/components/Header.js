import React from 'react'
import "./Header.css"
import { Link  } from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


function Header() {
  return (
    <nav className='navbar'>
      <div className="container">

        <Link to="">
        <div className='cust-logo'>
          <div className='double-e'>ƎE</div>
          <div className='name'>EXPEX</div>
        </div>
        </Link>

        <div className="navigation">

          <Link to="overview">
            <div className="tab">Dashboard</div>
          </Link>

          <Link to="error">
          <div className="tab">Balances</div>
          </Link>

          <Link to="budget">
          <div className="tab">Financial Planner</div>
          </Link>

          <Link to="history">
          <div className="tab">Invest</div>
          </Link>


        



        </div>
      </div>
    </nav>
  )
}

export default Header