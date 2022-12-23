import React from 'react'
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import "./ExpenseTile.css"
import {Doughnut} from 'react-chartjs-2'
import {Data} from "./data.js"
import {useState, useEffect} from 'react'


Chart.register( 
  Tooltip, Title, ArcElement, Legend
)


function ExpenseTile() {
  const [data, setData] = useState(null)
  const [dic, setDic] = useState({})
  const [values, setValues] = useState([])

  function getRandomColor() {
    let arr = []

    for (var j = 0; j < (values.length); j++){

    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    arr.push(color);
  }
  return arr 
}

function getData(){
  let d = {}

  Data.map((product) => {
    if (product.category && product.category[0] in d){
      d[product.category[0]] += product.amount
  }
  else if(product.category){
    d[product.category[0]] = product.amount

  }

  })

  setDic(d)
  setValues(Object.keys(dic).map(function(key){
    return dic[key]
    }))

  return values
}



useEffect(() => {
  setData({
    datasets:[
      {data: getData(), 
      backgroundColor: getRandomColor(),
      }
      
    ], 
    labels:Object.keys(dic)
  })
}, [])




  return (
    <div className='expenseTile'>
    <h1>Spending</h1>
    {data ? <Doughnut data={data} height="100px" width="100px" options={{ maintainAspectRatio: false }}/> : "Working"}
    

</div>  )
}

export default ExpenseTile