import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from './Modal.js'
import "./DistTile.css";
import "./main.css";

function DistTile({ liabilities }) {
	const accounts = useSelector((state) => state.accounts.accounts);
	const email = useSelector(state => state.user.email)
	const additional_assets = useSelector(state => state.accounts.user_assets)
	const [show, setShow] = useState(false);
	const totAsset = Math.round((liabilities.investment_balance + liabilities.cash_balance + liabilities.user_asset_balance) * 100) / 100;
	const MtotAsset = totAsset.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	const totLiabilities = Math.round((liabilities.credit_balance + liabilities.loan_balance) * 100) / 100;
	const MtotLiabilities = totLiabilities.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	const cash = liabilities.cash_balance
	const Mcash = cash.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	const investment = Math.round(liabilities.investment_balance * 100) / 100
	const Minvestment = investment.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	const credit = liabilities.credit_balance
	const Mcredit = credit.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	const loans = liabilities.loan_balance
	const Mloans = loans.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	return (
		<div className="distTile two-tile">
			<h1 className="tile-title">Asset/Liability Distribution</h1>
			<div className="main-cont">
				<div className="asset-cont">
					<div className="button-cont">
						<div className="asset-num">{MtotAsset}</div>
						<div className="add-button" onClick={() => setShow(true)}>
							Add
						</div>

					</div>
					<div className="asset-name">Assets</div>
					<div className="cash-cont">
						<div>Cash</div>
						<div>{Mcash}</div>
					</div>
					<div className="cash-cont2">
						<div>Investment</div>
						<div>{Minvestment}</div>
					</div>
				</div>

				<div className="asset-cont2">
					<div className="asset-num">{MtotLiabilities}</div>
					<div className="asset-name">Liabilities</div>
					<div className="cash-cont3">
						<div>Credit Cards</div>
						<div>{Mcredit}</div>
					</div>
					<div className="cash-cont4">
						<div>Loans</div>
						<div>{Mloans}</div>
					</div>
				</div>
			</div>
			{show && <Modal email={email} closeModal={() => setShow(false)} />}

		</div>
	);
}

export default DistTile;
