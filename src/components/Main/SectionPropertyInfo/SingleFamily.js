import React from 'react';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Home from '../../../images/home.svg';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        alignItems: "center"
    },
    img:{
        maxWidth: "46px",
        marginRight: "20px",
    },
    typography:{
        fontWeight: "500",
        textTransform: "uppercase"
    },
    hr: {
        border: "none",
        background: "lightgray",
        height: "1px",
        margin: "12px 20px",
    }
  }))

export default function SingleFamily() {
    const classes = useStyles();
    return(
        <div className={classes.singleFamily}>
            <div className={classes.wrapper}>
                <img src={Home} alt="home" className={classes.img}/>
                <Typography className={classes.typography}>Single-Family </Typography>
            </div>
            <hr className={classes.hr}/>
        </div>
    )
}