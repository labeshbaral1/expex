import React from "react";
import "./Overview.css"
import PorfolioTile from "./Tiles/PorfolioTile";
import ExpenseTile from "./Tiles/ExpenseTile"
import TotValTile from "./Tiles/TotValTile";
import DistTile from "./Tiles/DistTile";
import IncomeTile from "./Tiles/IncomeTile";
import BalanceTile from "./Tiles/BalanceTile";
function Overview() {
  return (
    <div className="overview">

      <div className="tile-container">

        <div className="top-container">
          <TotValTile />
          <BalanceTile />
          <PorfolioTile />
        </div>
        <div className="bottom-container">

          <IncomeTile />
          <ExpenseTile />
          <DistTile />

      </div>
      </div>


    </div>
  );
}

export default Overview;
