import React from "react";
import "./Sidebar.css";
import SettingsIcon from '@mui/icons-material/Settings';
import { Link  } from 'react-router-dom'
function Sidebar() {
	return (
        <div class="sidebar">
                <div class="sidebar-icons">
                <SettingsIcon/>
                </div>
                <div class="sidebar-icons">
                <SettingsIcon/>
                </div>
                <div class="sidebar-icons">
                <SettingsIcon/>
                </div>
                <div class="sidebar-icons">
                <SettingsIcon/>
                </div>
                <div class="sidebar-icons">
                <SettingsIcon/>
                </div>
    </div>
	);
}

export default Sidebar;