import React from "react";
import { useNavigate } from "react-router-dom";


function SidebarIcon({ navigate, Icon }) {
  const nav = useNavigate()

  return (
    <div className="sidebarIcon" onClick={() => nav(navigate)}>
      {Icon}
    </div>
  );
}

export default SidebarIcon;
