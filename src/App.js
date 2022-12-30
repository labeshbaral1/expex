import "./App.css";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/landing/Signin";
import Signup from "./components/landing/Signup";
import Overview from "./components/Overview";
import AddAccount from "./components/AddAccount";
import Transactions from "./components/Transactions";
import Budget from "./components/Budget";
import History from "./components/History";
import Sidebar from "./components/Sidebar";
import SidebarRight from "./components/SidebarRight";
import Help from "./components/Help";
import Error from "./components/Error.js";
import { useState } from "react";
import { useSelector } from "react-redux";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

function App() {
  const loggedIn = useSelector((state) => state.loggedIn.isLogged);

  return (
    <div className="App">
      <Router>
        {loggedIn && <Header />}

        <Routes>
          <Route
            exact
            path=""
            element={loggedIn ? <AddAccount /> : <Signin />}
          />
          <Route exact path="linkAccount" element={<AddAccount />} />

          <Route exact path="signin" element={<Signin />} />

          <Route exact path="signup" element={<Signup />} />

          <Route
            exact
            path="overview"
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
                  <Overview />
                  <div className="blank-container"></div>
                </div>
                <SidebarRight />
              </div>
            }
          />

          <Route
            exact
            path="error"
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
                  <Error />
                  <div className="blank-container"></div>
                </div>
                <SidebarRight />
              </div>
            }
          />
          <Route exact path="budget" element={<Budget />} />
          <Route exact path="history" element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
