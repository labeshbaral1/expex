import React from "react";

function SidebarIcon({ navigate, Icon }) {

  return (
    <div className="sidebarIcon" onClick={navigate}>
      {Icon}
    </div>
  );
}

export default SidebarIcon;
