import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function Header() {
  // Use a state variable to store the currently selected tab
  const [selectedTab, setSelectedTab] = useState("overview");

  // This function is called when a tab is clicked
  function handleTabClick(divId) {
    setSelectedTab(divId);
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="about"
        >
          <div className="cust-logo">
            <div className="double-e">ƎE</div>
            <div className="name">EXPEX</div>
          </div>
        </Link>

        <div className="navigation">
          <Link to="overview" onClick={() => handleTabClick("overview")}>
            <div
              id={"overview"}
              className={`tab ${selectedTab === "overview" ? "selected" : ""}`}
            >
              Dashboard
            </div>
          </Link>

          <Link to="balances" onClick={() => handleTabClick("balances")}>
            <div
              id={"balances"}
              className={`tab ${selectedTab === "balances" ? "selected" : ""}`}
            >
              Balances
            </div>
          </Link>

          <Link
            to="financial_planner"
            onClick={() => handleTabClick("financial_planner")}
          >
            <div
              id={"financial_planner"}
              className={`tab ${selectedTab === "financial_planner" ? "selected" : ""
                }`}
            >
              Financial Planner
            </div>
          </Link>

          <Link to="invest" onClick={() => handleTabClick("invest")}>
            <div
              id={"invest"}
              className={`tab ${selectedTab === "invest" ? "selected" : ""}`}
            >
              Invest
            </div>
          </Link>
        </div>

      </div>
      <div className="navigation2">
        <div className="search-container">
        {/* <SearchOutlinedIcon className='search-icon' /> */}
        <input className="search-bar" type="text" placeholder="Search..." />
        </div>
        <NotificationsNoneOutlinedIcon className="notifs"/>
      </div>
    </nav>
  );
}

export default Header;
