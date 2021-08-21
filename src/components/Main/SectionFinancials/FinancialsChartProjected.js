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
      type: 'bar'
    },
    xAxis: {
      type: 'category',

    },
    yAxis: {
      min: 0,
    },

    series: [{
      name: 'Population',
      data: [
        ['1 year', 4.2],
        ['5 years', 6.8],
        ['10 years', 9.9],
      ],
      dataLabels: {
        enabled: true,
        rotation: 0,
        color: '#FFFFFF',
        align: 'center',
        format: '{point.y:.1f}',
        y: 0,
      
      }
    }]
  }


function FinancialsChartProjected(props) {
    const classes = useStyles();
    
    return(
        <div className={classes.financialsChart}>
            <HighcharsReact highcharts={Highcharts} options={options}/>
        </div>
    )
}
export default FinancialsChartProjected;