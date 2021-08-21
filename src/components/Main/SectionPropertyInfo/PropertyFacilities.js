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
        width: "50%",
        textTransform: "uppercase",
    },
    span: {
        fontWeight: "500",
    }
  }))
  const apartmentData = [
    {
        name: 'sqft',
        value: '2,234',
    },
    {
        name: 'lot size',
        value: '5,320',
    },
    {
        name: 'built',
        value: '2015',
    },
    {
        name: 'beds',
        value: '3',
    },
    {
        name: 'bath',
        value: '3',
    },
    {
        name: 'pool',
        value: 'no',
    },
    {
        name: 'noa',
        value: '64',
    },
    {
        name: 'parking',
        value: 'yes',
    },
    {
        name: 'appliances',
        value: 'none',
    },
    {
        name: 'hvac',
        value: 'central',
    }
]
export default function PropertyFacilities(props) {
    const classes = useStyles();
    return(
        <div className={classes.facilities}>
            {apartmentData.map((item) => (
                <Typography className={classes.typography} 
                    key={item.name}>
                    <span className={classes.span}>{item.name}: </span>
                    {item.value}
                </Typography>
            ))}
        </div>
    )
}