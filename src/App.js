import "./App.css";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/landing/Signin";
import Signup from "./components/landing/Signup";
import Overview from "./components/overview/Overview";
import AddAccount from "./components/SidebarIcons/AddAccount"
// import AddAccount from "./components/sidebarIcons/AddAccount";
import Transactions from "./components/Transactions";
import Budget from "./components/Budget";
import History from "./components/History";
import Sidebar from "./components/Sidebar";
import SidebarRight from "./components/SidebarRight";
import About from "./About";

import StockChart from "./StockChart";
import { useState } from "react";
import { useSelector } from "react-redux";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Balance from "./components/balances/Balance.js";
import Loading from "./components/landing/Loading";

function App() {
  const loggedIn = useSelector((state) => state.states.isLogged);
  const apiLoading = useSelector(state => state.states.apiLoading)

  return (
    <div className="App">
      <Router>


        
        {loggedIn && <Header />}

        <Routes>

          <Route exact path="/test123" element={<StockChart/>}/>
          
          <Route
            exact
            path=""
            element={loggedIn? <About /> : <Signin />}
          />
          <Route exact path="linkAccount" element={<AddAccount />} />

          <Route exact path="signin" element={<Signin />} />

          <Route exact path="signup" element={<Signup />} />

          <Route
            exact
            path="overview"
            element={
              apiLoading ? (
                <Loading />
              ) : (
                <div className="content-container">
                  <Sidebar
                    icons={[
                      <DashboardOutlinedIcon />,
                      <AddAccount/>,
                      <HelpCenterOutlinedIcon />,
                      <SettingsOutlinedIcon />,
                    ]}
                  />
                  <div className="content">
                    <Overview />
                  </div>
                  <SidebarRight />
                </div>
              )
            }
          />

          <Route
            exact
            path="balances"
            element={
              <div className="content-container">
                <Sidebar
                  icons={[
                    <DashboardOutlinedIcon />,
                    <PersonAddAltOutlinedIcon />,
                    <HelpCenterOutlinedIcon />,
                    <SettingsOutlinedIcon />,
                  ]}
                />
                <div className="content">
                  <Balance />
                </div>
                <SidebarRight />
              </div>
            }
          />

          <Route exact path="financial_planner" element={<Budget />} />
          <Route exact path="invest" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
