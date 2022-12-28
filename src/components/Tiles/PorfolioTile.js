import React from 'react'
import "./PorfolioTile.css"
import NetWorth from "../../assets/networth.png"


function PorfolioTile() {
    const porfolioChange = "+2"
    const porfolioValue = "$100,123"


  return (

    <div className='porfolioTile'>
        <h1 className='tile-title'>Blank</h1>

        <div className='chart-snapshot'>

        </div>


    </div>
  )
}

export default PorfolioTile