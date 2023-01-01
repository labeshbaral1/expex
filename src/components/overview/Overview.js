import { useEffect } from "react";
import "./Overview.css";
import PorfolioTile from "./tiles/PorfolioTile";
import ExpenseTile from "./tiles/ExpenseTile";
import TotValTile from "./tiles/TotValTile";
import DistTile from "./tiles/DistTile";
import IncomeTile from "./tiles/IncomeTile";
import BalanceTile from "./tiles/BalanceTile";
import { useSelector, useDispatch } from "react-redux";
import {main } from "../../actions/api/main"

function Overview() {
  const dispatch = new useDispatch();
  const email = useSelector((state) => state.user.email);
  useEffect(() => {
    main(email, dispatch);
  }, []);

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
