import React from 'react'
import "./FinancialPlanner.css"
import {useSelector} from "react-redux"

function FinancialPlanner() {

    const user_assets = useSelector(state => state.accounts.user_assets)


  return (
    <div className='assets'>

        {
            user_assets.map(asset => {
                return(
                    <div className="asset-tile">
                        <div className="asset-name">{asset.name}</div>
                        <div className="asset-value">{asset.value}</div>
                        <div className="delete" onClick={()=> {console.log(asset.name + "detleted")}  }>delete</div>

                    </div>
                )
            })
        }

    </div>
  )
}

export default FinancialPlanner