import React from "react";
import "./Overview.css"
import PorfolioTile from "./Tiles/PorfolioTile";
import ExpenseTile from "./Tiles/ExpenseTile"
import HistoryTile from "./Tiles/HistoryTile";

function Overview() {
  return (
    <div className="overview">

      <div className="container">

        <div className="left-container">
            <PorfolioTile/>

        </div>

        <div className="right-container">
            <ExpenseTile/>
        </div>
      </div>

      <div className="span-container">
        <HistoryTile />
      </div>
    </div>
  );
}

export default Overview;
