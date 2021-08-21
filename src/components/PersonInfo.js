import React from 'react';
import { Container, Typography } from '@material-ui/core';
import User from "./User"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    wrapper: {
        background: "#eeeeee",
        padding: "20px 0px"
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            flexWrap: "wrap"
        },
    },
    address: {
        maxWidth: "300px",
        fontWeight: "500",
        fontSize: "30px",
        [theme.breakpoints.down('md')]: {
            fontSize: "20px",
            width: "100%",
            maxWidth: "400px",
            margin: "10px 0px 20px"
        },
    }
  }))
  export default function PersonInfo() {
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            <Container maxWidth="lg" className={classes.container}>
                <Typography 
                    className={classes.address} 
                    variant="h5">
                    1234 N Main Street Gilbert, AZ 85234
                </Typography>
                <User/>
            </Container>
        </div>
    )
}