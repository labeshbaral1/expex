import React from 'react'
import "./PorfolioTile.css"
import NetWorth from "../../assets/networth.png"


function PorfolioTile() {
    const porfolioChange = "+2"
    const porfolioValue = "$100,123"


  return (
    <div className='porfolioTile'>
        <h1>Total Asset Value</h1>
        <div className='change'>{porfolioChange}%</div>
        <div className='chart-snapshot'>
            <img src={NetWorth} alt="" />
        </div>
        <div className='value'>{porfolioValue}</div>

    </div>
  )
}

export default PorfolioTile