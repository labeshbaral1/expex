import { useState } from "react";
import "./Sidebar.css";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link, useNavigate } from "react-router-dom";
import { signoutUser } from "../actions/auth/signoutAction";
import { useDispatch } from "react-redux";

function Sidebar({ icons }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      {icons.map((Ico, index) => {
        return (
          <div key={index} className="dash-icons">
            <div className="dash-background">{Ico}</div>
          </div>
        );
      })}

      <div className="logout" onClick={() => signoutUser(dispatch, navigate)}>
        <div className="dash-background">
          <LogoutOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
