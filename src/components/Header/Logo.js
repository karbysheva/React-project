import React from 'react';
import {Link, Typography, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    q: {
        color: "#c29d4e",
        fontSize: "42px",
        fontWeight: "700",
        lignHeight: "1"
    },
    box: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
   onQ: {
        color: "#fff",
        fontSize: "22px",
        lineHeight: "1",
        fontWeight: "700"
    },
    small: {
        color: "#fff",
        fontSize: "10px",
        lineHeight: "1"
    }
    
  }))
  export default function Logo() {
    const classes = useStyles();
    return(
        <Link href="#" className={classes.logo}>
            <Typography className={classes.q}>Q</Typography>
            <Box className={classes.box}>
                <Typography className={classes.onQ}>On Q</Typography>
                <Typography className={classes.small}>Small text</Typography>
            </Box>
        </Link>
    )
}