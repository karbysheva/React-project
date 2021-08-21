import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  financialsTabItem:{
    display: "flex",
    flexDirection: "column"
  },
  price:{
    color: "#3d9de8",
    fontWeight: '500'
  },
  title: {
    fontSize: "12px",
    fontWeight: '500'
  }
}))

export default function FinancialsTabItem1() {
    const classes = useStyles();
    return(
        <div className={classes.financialsTabItem}>
            <Typography className={classes.price}>$1,192,227</Typography>
            <Typography className={classes.title}>Total wealth</Typography>
        </div>
    )
}