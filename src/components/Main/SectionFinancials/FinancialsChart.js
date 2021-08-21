import React from 'react';
import Highcharts from 'highcharts';
import HighcharsReact from 'highcharts-react-official';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    financialsChart: {
        padding: "0"
    }
  }))
  const options = {
    chart: {
        type: 'area',
        height: '300px',
      }, 
      title: {
        text: 'Wind speed during two days',
        align: 'center'
    },
    subtitle: {
        text: '13th & 14th of February, 2018 at two locations in Vik i Sogn, Norway',
        align: 'center'
    },
    yAxis: {
      title: {
        text: ''
      },
    },
      legend: {
        align: 'center',
        verticalAlign: 'top',
        x: 0,
        y: 0,
      },
      tooltip: {
        shared: true,
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillOpacity: 0.5,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [
          {
            name: 'Rent',
            data: [22, 28, 30, 38, 40, 39, 41, 47, 55, 60, 66, 70, 73, 74, 76, 77, 75, 77, 79, 80, 89]
          },
          {
            name: 'Equity',
            data: [16, 23, 25, 27, 29, 30, 32, 35, 33, 37, 39, 43, 45, 46, 49, 48, 43, 45, 46, 49, 50]
        },
      ],
  }

export default function FinancialsChart(props) {
    const classes = useStyles();
    
    return(
        <div className={classes.financialsChart}>
            <HighcharsReact highcharts={Highcharts} options={options}/>
        </div>
    )
}