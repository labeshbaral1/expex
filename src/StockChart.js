import { Line } from 'react-chartjs-2';

export default function StockChart() {

  const Utils = {
    CHART_COLORS: {
      red: 'rgb(255, 99, 132)',
      blue: 'rgb(54, 162, 235)',
      green: 'rgb(75, 192, 192)',
    },
  };


  const DATA_COUNT = 12;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  const datapoints = [0, 20, 20, 60, 60, 120, 140, 180, 120, 125, 105, 110, 170];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Cubic interpolation (monotone)',
        data: datapoints,
        borderColor: Utils.CHART_COLORS.red,
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4
      }, {
        label: 'Cubic interpolation',
        data: datapoints,
        borderColor: Utils.CHART_COLORS.blue,
        fill: false,
        tension: 0.4
      }, {
        label: 'Linear interpolation (default)',
        data: datapoints,
        borderColor: Utils.CHART_COLORS.green,
        fill: false
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Cubic interpolation mode'
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value'
          },
          suggestedMin: -10,
          suggestedMax: 200
        }
      }
    },
  };

  return (
    <Line options={config} data={data} error={error => console.log(error)} />
  );
  
}
