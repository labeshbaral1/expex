import React, { PureComponent, useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getMonthTransactions } from '../actions/api/transactions';

export default function Error(){
  const email = useSelector(state => state.user.email)
  const dispatch = useDispatch()
  useEffect(()=> {
    getMonthTransactions(email, dispatch)
  }, [])

  return (
    <>N</>
  )

}