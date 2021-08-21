import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    facilities: {
        display: "flex",
        flexWrap: "wrap",
        padding: "10px 0px"
    },
    typography: {
        width: "100%",
        textTransform: "uppercase",
        fontWeight: "500",
        textAlign: "start",
        lineHeight: "2"
    },
    span: {
        fontWeight: "400",
        
    },
    box: {
        width: "100%",
        textAlign: "start",
        paddingLeft: "24px"
    },
    typographyMore: {
        fontWeight: "500",
        textTransform: "uppercase",
        lineHeight: "2",
        fontSize: "14px"
    }
  }))

const financialsData = {
    projectedRent: {
      name: 'projected rent',
      price: ' $1860',

      high:{
        name: 'high',
        price: ' $1959',
      },
      average:{
        name: 'average',
        price: ' $1800',
      },
      low:{
        name: 'low',
        price: ' $1750',
      },
    },
    rentAppreciation: {
        name: 'rent appreciation',
        percent: ' 4.0%',
    },
    equityAppreciation: {
        name: 'equity appreciation',
        percent: ' 4.0%',
    },
}
export default function FinancialsFacilities(props) {
    const classes = useStyles();

    return(
        <div className={classes.facilities}>
            <Typography className={classes.typography}>
                {financialsData.projectedRent.name}: 
                <span className={classes.span}>{financialsData.projectedRent.price}</span>
            </Typography>
            <div className={classes.box}>
                <Typography className={classes.typographyMore}>
                    {financialsData.projectedRent.high.name}: 
                    <span className={classes.span}>{financialsData.projectedRent.high.price}</span>
                </Typography>
                <Typography className={classes.typographyMore}>
                    {financialsData.projectedRent.average.name}: 
                    <span className={classes.span}>{financialsData.projectedRent.average.price}</span>
                </Typography>
                <Typography className={classes.typographyMore}>
                    {financialsData.projectedRent.low.name}: 
                    <span className={classes.span}>{financialsData.projectedRent.low.price}</span>
                </Typography>
            </div>
            <Typography className={classes.typography}>
                {financialsData.rentAppreciation.name}: 
                <span className={classes.span}>{financialsData.rentAppreciation.percent}</span>
            </Typography>
            <Typography className={classes.typography}>
                {financialsData.equityAppreciation.name}: 
                <span className={classes.span}>{financialsData.equityAppreciation.percent}</span>
            </Typography>
        </div>
    )
}