import React from "react";
import "./Sidebar.css";
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link, useNavigate  } from 'react-router-dom'
import {signoutUser} from '../actions/signoutAction'
import { useDispatch } from "react-redux";

function Sidebar() {
        const dispatch = useDispatch()
        const navigate = useNavigate()

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

                <div class="logout" onClick={() => signoutUser(dispatch, navigate)}>
                        <div className="dash-background" >
                                <LogoutOutlinedIcon />


                                </div>
                        </div>
    </div>
	);
}

export default Sidebar;