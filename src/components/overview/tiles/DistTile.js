import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DistTile.css"
import "./main.css"

function DistTile() {
  const accounts = useSelector((state) => state.accounts.accounts);

  const [liabilities, setLiabilities] = useState(0)


  function getLiabilities(accounts) {

    let credit_balance = 0
    let loan_balance = 0
    let total_debt = 0
    let investment_balance = 0
    let cash_balance = 0
    let total_assets = 0

    Object.entries(accounts).map(([key, value]) => {


      for (const account of value.accounts) {

        if (account.type === 'credit') {
          credit_balance += account.balances.current

        }
        else if (account.type === 'loan') {
          loan_balance += account.balances.current

        }

        else if(account.type === 'investment'){
          investment_balance += account.balances.current
        }

        else if(account.type === 'depository'){
          cash_balance += account.balances.current
        }

        total_debt = credit_balance + loan_balance
        total_assets = investment_balance + cash_balance
        total_assets = Math.round(total_assets * 100) / 100;
        investment_balance = Math.round(investment_balance * 100) / 100;
      }

    })

    return { credit_balance: credit_balance, loan_balance: loan_balance.toLocaleString(), total_debt: total_debt.toLocaleString(), total_assets: total_assets.toLocaleString(), investment_balance: investment_balance.toLocaleString(), cash_balance: cash_balance.toLocaleString() }
  }

  useEffect(() => setLiabilities(getLiabilities(accounts)), [])

  return (
    <div className='distTile two-tile'>
      <h1 className='tile-title'>Asset/Liability Distribution</h1>
      <div className='main-cont'>
        <div className='asset-cont'>
          <div className='button-cont'>
          <div className="asset-num">${liabilities.total_assets}</div>
            <div className='add-button'>Add</div>
          </div>
          <div className='asset-name'>Assets</div>
          <div className='cash-cont'>
            <div>Cash</div>
            <div>${liabilities.cash_balance}</div>
          </div>
          <div className='cash-cont2'>
            <div>Investment</div>
            <div>${liabilities.investment_balance}</div>
          </div>
        </div>


        <div className='asset-cont2'>
          <div className="asset-num">${liabilities.total_debt}</div>
          <div className='asset-name'>Liabilities</div>
          <div className='cash-cont3'>
            <div>Credit Cards</div>
            <div>${liabilities.credit_balance}</div>

          </div>
          <div className='cash-cont4'>
            <div>Loans</div>
            <div>${liabilities.loan_balance}</div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default DistTile