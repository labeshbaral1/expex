import React from "react";
import "./TransferTile.css";
import "./main.css";

import PaidIcon from "@mui/icons-material/Paid";

function TransferTile() {
  return (
    <div className="transferTile one-tile">
      <h1 className="tile-title">Transfer</h1>
      <div className="transferTile-content">
        <PaidIcon />
      </div>
    </div>
  );
}

export default TransferTile;
