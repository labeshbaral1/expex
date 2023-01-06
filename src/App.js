import "./App.css";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signin from "./components/landing/Signin";
import Signup from "./components/landing/Signup";
import Overview from "./components/overview/Overview";

import FirstTimeAddAccount from "./components/FirstTimeAddAccount"
import AddAccount from "./components/sidebarIcons/AddAccount";
import Transactions from "./components/Transactions";
import FinancialPlanner from "./components/financialPlanner/FinancialPlanner";
import History from "./components/History";
import Sidebar from "./components/Sidebar";
import SidebarIcon from "./components/sidebarIcons/SidebarIcon";
import SidebarRight from "./components/SidebarRight";

import StockChart from "./StockChart";
import React from "react";
import { useSelector } from "react-redux";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Balance from "./components/balances/Balance.js";
import Loading from "./components/landing/Loading";
import Settings from "./components/sidebarIcons/Settings";
import Help from "./components/sidebarIcons/Help";

export default function App() {
  const loggedIn = useSelector((state) => state.states.isLogged);
  const apiLoading = useSelector((state) => state.states.apiLoading);

  return (
    <div className="App">
      <Router>
        {loggedIn && <Header />}

        <Routes>

          <Route exact path="" element={!loggedIn && <Signin />} />

          <Route exact path="linkAccount" element={<FirstTimeAddAccount />} />

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
                      <SidebarIcon
                      navigate= {"/overview"}
                        Icon={<DashboardOutlinedIcon />}
                      />,
                      <AddAccount />,
                      <SidebarIcon
                      navigate={"/help"}
                        Icon={<HelpCenterOutlinedIcon />}
                      />,
                      <SidebarIcon
                      navigate={"/settings"}
                        Icon={<SettingsOutlinedIcon />}
                      />,
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

          <Route exact path="settings" element={
           <div className="content-container">
           <Sidebar
             icons={[
               <SidebarIcon
               navigate= {"/overview"}
                 Icon={<DashboardOutlinedIcon />}
               />,
               <AddAccount />,
               <SidebarIcon
               navigate={"/help"}
                 Icon={<HelpCenterOutlinedIcon />}
               />,
               <SidebarIcon
               navigate={"/settings"}
                 Icon={<SettingsOutlinedIcon />}
               />,
             ]}
           />

           <div className="content">
           <Settings />
           </div>
          
         </div>
          } />
          <Route exact path="help" element={   <div className="content-container">
           <Sidebar
             icons={[
               <SidebarIcon
               navigate= {"/overview"}
                 Icon={<DashboardOutlinedIcon />}
               />,
               <AddAccount />,
               <SidebarIcon
               navigate={"/help"}
                 Icon={<HelpCenterOutlinedIcon />}
               />,
               <SidebarIcon
               navigate={"/settings"}
                 Icon={<SettingsOutlinedIcon />}
               />,
             ]}
           />

           <div className="content">
           <Help />
           </div>
          
         </div>} />

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

          <Route exact path="financial_planner" element={
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
                  <FinancialPlanner />
                </div>
                <SidebarRight />
              </div>
            } />
          <Route exact path="invest" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

