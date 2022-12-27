

import {setBalance} from "../redux/accountSlice"




export const updateBalance = async (dispatch) => {
        
    const balanceResponse = await fetch("http://localhost:8000/api/balance", {
      method: "GET",
    });

    const balance = await balanceResponse.json();

    let totalBalance = 0;

    for (const account of balance.accounts) {
      totalBalance += account.balances.current;
    }

  
    // dispatch(setBalance({balance: totalBalance }))
    return totalBalance
  };