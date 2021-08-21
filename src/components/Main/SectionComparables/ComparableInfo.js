import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    comparableInfo: {
        display: "flex",
        flexWrap: "wrap",
        padding: "30px 50px"
    },
    typography: {
        width: "50%",
        textTransform: "uppercase",
    },
    span: {
        fontWeight: "500",
    }
  }))
  const comparablesData = [
    {
        name: 'Project Rent',
        value: '$1,860',
    },
    {
        name: 'Projected per sqft',
        value: '$0,96',
    },
    {
        name: 'Comparable rent',
        value: '$1750',
    },
    {
        name: 'Comparable per sqft',
        value: '$0.92',
    }
] 
export default function ComparableInfo() {
    const classes = useStyles();
    return(
        <div className={classes.comparableInfo}>
            {comparablesData.map((item) => (
                <Typography className={classes.typography} 
                    key={item.value}>
                    <span className={classes.span}>{item.name}: </span>
                    {item.value}
                </Typography>
            ))}
        </div>
    )
}