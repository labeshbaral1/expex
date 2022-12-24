import React from "react";
import "./Overview.css"
import PorfolioTile from "./Tiles/PorfolioTile";
import ExpenseTile from "./Tiles/ExpenseTile"
import HistoryTile from "./Tiles/HistoryTile";
import BlankTile from "./Tiles/BlankTile";
import IncomeTile from "./Tiles/IncomeTile";
import SpendingTile from "./Tiles/SpendingTile";
function Overview() {
  return (
    <div className="overview">

      <div className="tile-container">

        <div className="top-container">
          <SpendingTile />
          <PorfolioTile />
          <HistoryTile />
        </div>
        <div className="bottom-container">
        <BlankTile />
        <IncomeTile />
        <ExpenseTile />

        </div>
      </div>


    </div>
  );
}

export default Overview;
