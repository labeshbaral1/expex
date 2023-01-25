
import React, { useState, useEffect, useMemo } from "react";
import queryString from "query-string";
import { useSelector, useDispatch } from "react-redux";
import "./TransferTile.css";
import "./main.css"

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell
} from "recharts";
import axios from 'axios';




const API_TOKEN = "cf643daad3i9lmcgqu10cf643daad3i9lmcgqu1g";
const STOCK_SYMBOLS = ["COSM", "TSLA", "MSFT", "AAPL", "GOOGL"]
const INTERVAL_OPTIONS = [30, 60, 90, 120]
const API_URL = "https://finnhub.io/api/v1/stock/candle"
const RESOLUTION = "D"

function getUnixTime(date) {
  return date.getTime() / 1000 | 0;
}

function transformData(data) {
  return data.c.map((item, index) => ({
    close: Number(item).toFixed(2),
    open: Number(data.o[index]).toFixed(2),
    timestamp: new Date(data.t[index] * 1000).toLocaleDateString()
  }))
}

// function History() {
// const [symbol, setSymbol] = useState(STOCK_SYMBOLS[0])
// const [symbol2, setSymbol2] = useState(STOCK_SYMBOLS[1])
// const [data, setData] = useState(null);
// const [interval, setInterval] = useState(INTERVAL_OPTIONS[0]);

// const to = useMemo(() => {
//   return getUnixTime(new Date());
// }, []);
// const from = useMemo(() => {
//   let d = new Date();
//   d.setDate(d.getDate() - interval);

//   return getUnixTime(d);
// }, [interval])

// useEffect(() => {
//   if (!from || !to || !symbol) {
//     return;
//   }

//   const query = {
//     token: API_TOKEN,
//     resolution: RESOLUTION,
//     from,
//     to,
//     symbol
//   };

//   fetch(`${API_URL}?${queryString.stringify(query)}`)
//     .then(async data => setData(transformData(await data.json())))
//     .catch(error => console.error(error))

// }, [from, to, symbol]);

// const handleChangeStock = event =>
//   setSymbol(event.target.value);

// const handleChangeInterval = event =>
//   setInterval(event.target.value);

//     const handleChangeStock2 = event =>
// setSymbol2(event.target.value);

//   return (
//     <div>
//       <div className="container">
//         <div className="selector">
//           <label for="stock_select" className="label">
//             <strong>Stock Symbol: </strong>
//           </label>
//           <select id="stock_select" onChange={handleChangeStock}>
//             {STOCK_SYMBOLS.map(s => <option key={s} value={s}>{s}</option>)}
//           </select>
//         </div>
//         <div className="selector">
//           <label for="interval_select" className="label">
//             <strong>Time Interval: </strong>
//           </label>
//           <select onChange={handleChangeInterval}>
//             {INTERVAL_OPTIONS.map(s => <option key={s} value={s}>Past {s} days</option>)}
//           </select>
//         </div>
//       </div>
//       <div className="container">
//             <LineChart width={120} height={40} data={data} symbol={symbol2}
// margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//             <Line type="monotone" dataKey="open" stroke="purple" dot={false} />
//           </LineChart>

//           <LineChart width={120} height={40} data={data}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//             <Line type="monotone" dataKey="open" stroke="purple" dot={false} />
//           </LineChart>
//       </div>
//       <div className="container">
//       </div>
//     </div>
//   );
// }

// export default History;


// function getUnixTime(date) {
//   return date.getTime() / 1000 | 0;
// }

// function transformData(data) {
//   return data.c.map((item, index) => ({
//     close: Number(item).toFixed(2),
//     open: Number(data.o[index]).toFixed(2),
//     timestamp: new Date(data.t[index] * 1000).toLocaleDateString()
//   }))
// }

// function Transfer() {
//   const [data, setData] = useState({ TSLA: null, AAPL: null, SPY: null });
//   const [interval, setInterval] = useState(INTERVAL_OPTIONS[0]);
//   const [from, setFrom] = useState({ TSLA: null, AAPL: null, SPY: null });
//   const [to, setTo] = useState({ TSLA: getUnixTime(new Date()), AAPL: getUnixTime(new Date()), SPY: getUnixTime(new Date()) });

//   const handleChangeInterval = (event) => {
//     const value = event.target.value;
//     setInterval(value);
//     setFrom({
//       TSLA: getUnixTime(new Date(new Date().setDate(new Date().getDate() - value))),
//       AAPL: getUnixTime(new Date(new Date().setDate(new Date().getDate() - value))),
//       SPY: getUnixTime(new Date(new Date().setDate(new Date().getDate() - value)))
//     });
//     setTo({
//       TSLA: getUnixTime(new Date()),
//       AAPL: getUnixTime(new Date()),
//       SPY: getUnixTime(new Date())
//     });
//   };

//   useEffect(() => {
//     if (!from.TSLA || !to.TSLA) {
//       return;
//     }

//     const query = {
//       token: API_TOKEN,
//       resolution: RESOLUTION,
//       from: from.TSLA,
//       to: to.TSLA,
//       symbol: 'TSLA'
//     };

//     fetch(`${API_URL}?${queryString.stringify(query)}`)
//       .then(async data => setData({ ...data, TSLA: transformData(await data.json()) }))
//       .catch(error => console.error(error))

//     const queryAAPL = {
//       token: API_TOKEN,
//       resolution: RESOLUTION,
//       from: from.AAPL,
//       to: to.AAPL,
//       symbol: 'AAPL'
//     };

//     fetch(`${API_URL}?${queryString.stringify(queryAAPL)}`)
//       .then(async data => setData({ ...data, AAPL: transformData(await data.json()) }))
//       .catch(error => console.error(error))

//     const querySPY = {
//       token: API_TOKEN,
//       resolution: RESOLUTION,
//       from: from.SPY,
//       to: to.SPY,
//       symbol: 'SPY'
//     };

//     fetch(`${API_URL}?${queryString.stringify(querySPY)}`)
//       .then(async data => setData({ ...data, SPY: transformData(await data.json()) }))
//       .catch(error => console.error(error))

//   }, [from, to]);


//   return (
//     <div className='transferTile one-tile'>
//       <h1>Market Snapshot</h1>
//       <div>
//         <div className="selector">
//           <label for="interval_select" className="label">
//             <strong>Time Interval: </strong>
//           </label>
//           <select onChange={(e) => {
//             const value = e.target.value;
//             setInterval(value);
//             setFrom({
//               TSLA: getUnixTime(new Date(new Date().setDate(new Date().getDate() - value))),
//               AAPL: getUnixTime(new Date(new Date().setDate(new Date().getDate() - value))),
//               SPY: getUnixTime(new Date(new Date().setDate(new Date().getDate() - value)))
//             });
//           }
//           }>
//             {INTERVAL_OPTIONS.map(s => <option key={s} value={s}>Past {s} days</option>)}
//           </select>
//         </div>
//         <div className="container">
//           <LineChart width={120} height={40} data={data.TSLA}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//             <Line type="monotone" dataKey="open" stroke="purple" dot={false} />
//           </LineChart>
//         </div>
//         <div className="container">
//         <LineChart width={120} height={40} data={data.TSLA}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//             <Line type="monotone" dataKey="open" stroke="purple" dot={false} />
//           </LineChart>
//         </div>
//         <div className="container">
//         <LineChart width={120} height={40} data={data.TSLA}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//             <Line type="monotone" dataKey="open" stroke="purple" dot={false} />
//           </LineChart>
//         </div>
//       </div>
//     </div>
//   );
// }



// export default Transfer;







function Transfer() {

  const [chartData, setChartData] = useState([]);


  const [symbol, setSymbol] = useState(STOCK_SYMBOLS[0])
  const [symbol2, setSymbol2] = useState(STOCK_SYMBOLS[1])
  const [data, setData] = useState(null);
  const [interval, setInterval] = useState(INTERVAL_OPTIONS[0]);

  const to = useMemo(() => {
    return getUnixTime(new Date());
  }, []);
  const from = useMemo(() => {
    let d = new Date();
    d.setDate(d.getDate() - interval);

    return getUnixTime(d);
  }, [interval])

  useEffect(() => {
    if (!from || !to || !symbol) {
      return;
    }

    const query = {
      token: API_TOKEN,
      resolution: RESOLUTION,
      from,
      to,
      symbol
    };

    fetch(`${API_URL}?${queryString.stringify(query)}`)
      .then(async data => setData(transformData(await data.json())))
      .catch(error => console.error(error))

  }, [from, to, symbol]);

  const handleChangeStock = event =>{
    setSymbol(event.target.value);
    setCurrentStock(event.target.value);
}

  const handleChangeInterval = event =>
    setInterval(event.target.value);

  useEffect(() => {
    tickers.forEach(ticker => {
      axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2022-01-01/2022-01-31?apiKey=okiJbaOOk3CQKreWqYRDOTR_ocdBMToC`)
        .then(response => {
          setChartData(prevState => ({ ...prevState, [ticker]: response.data.results }))
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }, []);



  // const tickers = ['SPY', 'NDAQ', 'DJI'];
  const tickers = ['SPY', 'NDAQ'];
  const [lastPrices, setLastPrices] = useState({});

  useEffect(() => {
    tickers.forEach(ticker => {
      axios.get(`https://api.polygon.io/v1/open-close/${ticker}/2023-01-09?adjusted=true&apiKey=okiJbaOOk3CQKreWqYRDOTR_ocdBMToC`)
        .then(response => {
          setLastPrices(prevState => ({ ...prevState, [ticker]: response.data.close }));
          console.log(response.data.close)
        })
        .catch(error => {
          console.log(error);
        });
    });
  }, []);
  const [currentStock, setCurrentStock] = useState(STOCK_SYMBOLS[0]); // new state variable

//   const handleChange = event => {
//     setSymbol(event.target.value);
//     setCurrentStock(event.target.value); //update currentStock
// }

  return (

    <div className='transferTile one-tile'>
      <div className="stock-heading-cont">
      <div className="tile-title">Market Snapshot</div>
      <div className="container1">
            <div className="selector">
              <label for="stock_select" className="label">
                <div className="pre-dropdown-tag">Watchlist: </div>
              </label>
              <select className="my-select-menu" id="stock_select" onChange={handleChangeStock}>
                {STOCK_SYMBOLS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="selector">
              <label for="interval_select" className="label">
                <div className="pre-dropdown-tag">Interval: </div>
              </label>
              <select onChange={handleChangeInterval}>
                {INTERVAL_OPTIONS.map(s => <option key={s} value={s}> {s} Days</option>)}
              </select>
            </div>
          </div>
      </div>



      <div className="full-invest-cont">
        <div>

<div className="current-stock-cont">
<div className="current-stock">{currentStock}</div>
</div>


          <div className="tot-chart2">
            <ResponsiveContainer height={60}>
              <LineChart width={200} height={200} data={data}>
              {/* <Line 
                type="monotone" 
                dataKey="close" 
                stroke="lightgrey" 
                strokeWidth={2}
                dot={false} /> */}
                <Line
                  type="monotone"
                  dataKey="open"
                  stroke="var(--selected-color)"
                  strokeWidth={2}
                  dot={false}
                />
               <Tooltip/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="market-tile-cont">
          <div className="indice-cont">
          {/* <div className="indice-title">Stocks</div> */}
            <div className="stock2">
              <div className="ticker">S&P 500</div>
              <div className="stock-chart">
              </div>
              <div className='stock-price'>+1.41%</div>
              {/* <div className='stock-price'>${lastPrices.SPY}</div> */}
            </div>

            <div className="stock2">
              <div className="ticker">Nasdaq</div>
              <div className="stock-chart">
              </div>
              <div className='stock-price'>-0.11%</div>
            </div>

            <div className="stock2">
              <div className="ticker">Dow 30</div>
              <div className="stock-chart">
              </div>
              <div className='stock-price2'>+1.00%</div>
            </div>
          </div>

          <div className="indice-cont">
            <div className="stock2">
              <div className="ticker">BTC</div>
              <div className="stock-chart">
              </div>
              <div className='stock-price'>+2.36%</div>
            </div>

            <div className="stock2">
              <div className="ticker">ETH</div>
              <div className="stock-chart">
              </div>
              <div className='stock-price'>+1.01%</div>
            </div>

            <div className="stock2">
              <div className="ticker">DOGE</div>
              <div className="stock-chart">
              </div>
              <div className='stock-price2'>-4.23%</div>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}
export default Transfer






// const data2 = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 6500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 4100,
//   },
// ];


// function Transfer() {

//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     tickers.forEach(ticker => {
//       axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2022-01-01/2022-01-31?apiKey=okiJbaOOk3CQKreWqYRDOTR_ocdBMToC`)
//         .then(response => {
//           setChartData(prevState => ({ ...prevState, [ticker]: response.data.results }))
//           console.log(response);
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     });
//   }, []);



//   // const tickers = ['SPY', 'NDAQ', 'DJI'];
//   const tickers = ['SPY', 'NDAQ'];
//   const [lastPrices, setLastPrices] = useState({});

//   useEffect(() => {
//     tickers.forEach(ticker => {
//       axios.get(`https://api.polygon.io/v1/open-close/${ticker}/2023-01-09?adjusted=true&apiKey=okiJbaOOk3CQKreWqYRDOTR_ocdBMToC`)
//         .then(response => {
//           setLastPrices(prevState => ({ ...prevState, [ticker]: response.data.close }));
//           console.log(response.data.close)
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     });
//   }, []);



//   return (
//     <div className='transferTile one-tile'>
//       <h1>Market Snapshot</h1>
//       <div className="stock">
//         <div className="ticker">S&P 500</div>
//         <div className="stock-chart">
//           <ResponsiveContainer height={20}>
//             <LineChart width={30} height={10} data={chartData.SPY}>
//               <Line
//                 type="monotone"
//                 dataKey="c"
//                 stroke="#52c8a0"
//                 dot={false}
//                 strokeWidth={2}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//         <div className='stock-price'>${lastPrices.SPY}</div>
//       </div>

//       <div className="stock2">
//         <div className="ticker">Nasdaq</div>
//         <div className="stock-chart">
//           <ResponsiveContainer height={20}>
//             <LineChart width={30} height={10} data={chartData.NDAQ}>
//               <Line
//                 type="monotone"
//                 dataKey="amt"
//                 stroke="#52c8a0"
//                 dot={false}
//                 strokeWidth={2}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//         <div className='stock-price'>${lastPrices.NDAQ}</div>
//       </div>

//       <div className="stock2">
//         <div className="ticker">Dow Jones</div>
//         <div className="stock-chart">
//           <ResponsiveContainer height={20}>
//             <LineChart width={30} height={10} data={data2}>
//               <Line
//                 type="monotone"
//                 dataKey="uv"
//                 stroke="#ec898b"
//                 dot={false}
//                 strokeWidth={2}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//         <div className='stock-price2'>${lastPrices.DJI}</div>
//       </div>

//       {/* <div className="stock2">
//           <div className="ticker">TSLA</div>
//           <div className='stock-price'>$257.48</div>
//       </div> */}
//     </div>

//   )
// }
// export default Transfer
