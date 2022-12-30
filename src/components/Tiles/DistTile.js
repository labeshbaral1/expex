import React from 'react'
import History from "../../assets/historysnapshot.png"
import "./DistTile.css"
import "./main.css"

function DistTile() {
  return (
    <div className='distTile two-tile'>
      <h1 className='tile-title'>Asset/Liability Distribution</h1>
      <div className='main-cont'>
        <div className='asset-cont'>
          <div className='button-cont'>
          <div className='asset-num'>$52,235.87</div>
          <div className='add-button'>Add</div>
          </div>
          <div className='asset-name'>Assets</div>
          <div className='cash-cont'>
            <div>Cash</div>
            <div>$38,324</div>
          </div>
          <div className='cash-cont2'>
            <div>Investment</div>
            <div>$21,641</div>
          </div>
        </div>




        <div className='asset-cont2'>
          <div className='asset-num'>$121,974.06</div>
          <div className='asset-name'>Liabilities</div>
          <div className='cash-cont3'>
            <div>Credit Cards</div>
            <div>$38,324</div>
          </div>
          <div className='cash-cont4'>
            <div>Loans</div>
            <div>$21,641</div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default DistTile