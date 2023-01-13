import { useEffect, useState } from "react";
import "./Overview.css";
import TransferTile from "./tiles/TransferTile";
import ExpenseTile from "./tiles/ExpenseTile";
import TotValTile from "./tiles/TotValTile";
import DistTile from "./tiles/DistTile";
import IncomeTile from "./tiles/IncomeTile";
import BalanceTile from "./tiles/BalanceTile";
import { useSelector, useDispatch } from "react-redux";
import { main } from "../../actions/api/main";
import { db } from "../../firebase/firebase";

function Overview() {
  const dispatch = new useDispatch();
  const email = useSelector((state) => state.user.email);
  const accounts = useSelector((state) => state.accounts.accounts);
  const additional_assets = useSelector((state) => state.accounts.user_assets);

  const [liabilities, setLiabilities] = useState({
    credit_balance: 0,
    loan_balance: 0,
    investment_balance: 0,
    cash_balance: 0,
    user_asset_balance: 0,
  });

  function getLiabilities(accounts) {
    let credit_balance = 0;
    let loan_balance = 0;
    let investment_balance = 0;
    let cash_balance = 0;
    let user_asset_balance = 0;

    Object.entries(accounts).map(([key, value]) => {
      for (const account of value.accounts) {
        if (account.type === "credit") {
          credit_balance += account.balances.current;
        } else if (account.type === "loan") {
          loan_balance += account.balances.current;
        } else if (account.type === "investment") {
          investment_balance += account.balances.current;
        } else if (account.type === "depository") {
          cash_balance += account.balances.current;
        }
      }
    });

    for (let asset of additional_assets) {
      user_asset_balance += parseInt(asset.value);
    }

    return {
      credit_balance: credit_balance,
      loan_balance: loan_balance,
      investment_balance: investment_balance,
      cash_balance: cash_balance,
      user_asset_balance: user_asset_balance,
    };
  }

  useEffect(() => {
    async function getATD() {
      return await db
        .collection("users")
        .doc(btoa(email))
        .collection("accounts")
        .doc("accessTokens")
        .get();
    }

    getATD().then((ATD) => main(ATD, dispatch));
    setLiabilities(getLiabilities(accounts));
  }, []);

  return (

    

    <div className="overview">
      <div className="tile-container">
        <div className="top-container">
          <TotValTile liabilities={liabilities} />
          <BalanceTile />
          <TransferTile />
        </div>

        <div className="bottom-container">
          <IncomeTile />
          <ExpenseTile />
          <DistTile liabilities={liabilities} />
        </div>
      </div>
    </div>
  );
}

export default Overview;
