import React from 'react';


import { setDisplayElements } from '../redux/accountSlice';

export const parseTransactions = (rawTransactions, dispatch) => {

    let displayElements = rawTransactions.map(rawTransaction => (
        <tr>
            <td>
                {rawTransaction.date}
            </td>
            <td>
                {rawTransaction.name}
            </td>
            <td>
                {rawTransaction.amount}
            </td>
        </tr>
    ));

    dispatch(setDisplayElements(displayElements)) 

}
