import React, { PureComponent } from 'react';
import "./Error.css"
import Chase from "../assets/chase.png"
import Citi from "../assets/citi2.png"
import HSBC from "../assets/hsbc2.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Error() {
  return (
    <div>

      <div className='accounts-holder'>
        <div className='infosss'>
        <img className='account-icon' src={Chase}></img>
          <div className='account-infos'>
            <div className='account-name'>JP Morgan Chase</div>
            <div className='account-num'>**0578</div>
          </div>
          <ExpandMoreIcon className='steven'/>
          <div className='account-tot'>$35,200</div>
        </div>
      </div>


      <div className='accounts-holder2'>
        <div className='infosss'>
        <img className='account-icon2' src={HSBC}></img>
          <div className='account-infos'>
            <div className='account-name'>HSBC</div>
            <div className='account-num'>**0317</div>
          </div>
          <ExpandMoreIcon className='steven2'/>
          <div className='account-tot2'>$61,500</div>
        </div>
      </div>


      <div className='accounts-holder3'>
        <div className='infosss'>
        <img className='account-icon2' src={Citi}></img>
          <div className='account-infos'>
            <div className='account-name'>Citi Bank</div>
            <div className='account-num'>**0641</div>
          </div>
          <ExpandMoreIcon className='steven3'/>
          <div className='account-tot3'>$12,128</div>
        </div>
      </div>

    </div>







  )
}

export default Error