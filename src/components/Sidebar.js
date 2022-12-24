import React from "react";
import "./Sidebar.css";
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link  } from 'react-router-dom'
function Sidebar() {
	return (
        <div class="sidebar">
                <div class="dash-icons">
                <div className="dash-background">
                <DashboardOutlinedIcon/>
                </div>
                </div>
                <div class="dash-icons">
                <div className="dash-background">
                <PersonAddAltOutlinedIcon/>
                </div>
                </div>
                <div class="dash-icons">
                <div className="dash-background">
                <HelpCenterOutlinedIcon/>
                </div>
                </div>
                <div class="dash-icons">
                <div className="dash-background">
                <SettingsOutlinedIcon/>
                </div>
                </div>
                <div class="logout">
               <div className="dash-background">
                <LogoutOutlinedIcon/>
                </div>
                </div>
    </div>
	);
}

export default Sidebar;