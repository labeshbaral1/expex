import { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, LineChart, Line } from 'recharts';


export default function StockChart(){
    const [data, setData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const API_KEY = 'YOUR_API_KEY_HERE';
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DJIA&interval=1min&apikey=${API_KEY}`
        );
        const timeSeries = response.data['Time Series (1min)'];
        const data = Object.keys(timeSeries).map(key => {
          return {
            time: key,
            close: parseFloat(timeSeries[key]['4. close'])
          };
        });
        setData(data);
      }
      fetchData();
      const intervalId = setInterval(fetchData, 60000);
      return () => clearInterval(intervalId);
    }, []);
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="close" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  