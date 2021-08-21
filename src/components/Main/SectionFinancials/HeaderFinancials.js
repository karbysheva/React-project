import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    benefits: {
        background: "#094a82",
        marginTop: "20px"
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down('xs')]: {
            flexWrap: "wrap",
            padding: "0",
        },
    },
    active: {
        color: "#fff",
        textTransform: "uppercase",
        background: "#ecba36",
        padding: "12px 20px",
        lineHeight: "1",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            padding: "12px",
            textAlign: "center",
            order: "1",
            fontSize: "15px"
        },
    },
    typography: {
        color: "#fff",
        textTransform: "uppercase",
        lineHeight: "1",
        padding: "12px 10px",
        [theme.breakpoints.down('xs')]: {
            order: "2",
            fontSize: "15px"
        },
    }
  }))

export default function HeaderFinancials() {
    const classes = useStyles();
    return(
        <div className={classes.benefits}>
            <Container className={classes.container}>
                <Typography className={classes.typography}>Property info</Typography>
                <Typography className={classes.active}>Financials</Typography>
                <Typography className={classes.typography}>Comparables</Typography>
                <Typography className={classes.typography}>Map</Typography>
            </Container>
        </div>
    )
}
