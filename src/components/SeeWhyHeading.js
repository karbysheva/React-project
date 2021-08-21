import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    typography: {
        color: "#094a82",
        fontWeight: "500",
        textTransform: "uppercase",
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            fontSize: "18px",
        },
    },
    link: {
        color: "#ecba36"
    }
}))

export default function SeeWhyHeading() {
    const classes = useStyles();
    return(
        <Container>
            <Typography variant="h5" className={classes.typography}>See why rental properties the best investment over the next 10 year 
                <Link href="#" className={classes.link}> Learn more</Link>
            </Typography>
        </Container>
    )
}