import React from 'react'
import "./BalanceTile.css"

function BalanceTile() {
  return (
    <div className='balanceTile'>
    <h1 className='tile-title'>Account Balances</h1>
    <div className='bank'>
    <div className='bank-name'>Citibank Online</div>
    <div className='bank-amount'>$300</div>
    </div>
    <div className='account-number'>**4002</div>

    <div className='bank'>
    <div className='bank-name2'>TD Bank</div>
    <div className='bank-amount'>$300</div>
    </div>
    <div className='account-number'>**5002</div>

    <div className='bank'>
    <div className='bank-name3'>Betterment</div>
    <div className='bank-amount'>$300</div>
    </div>
    <div className='account-number'>**2076</div>

    <div className='bank'>
    <div className='bank-name4'>Navy Federal Credit Union</div>
    <div className='bank-amount'>$100</div>
    </div>
    <div className='account-number'>**4032</div>
</div>  

)
}

export default BalanceTile