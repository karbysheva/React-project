import React from 'react';
import {AppBar, Container} from '@material-ui/core';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
      background: "#094a82"
    },
    container: {
        display: "flex",
        justifyContent: "space-between"
    }
    
  }))
  export default function Header() {
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.appBar}>
            <Container maxWidth="lg" className={classes.container}>
                <Logo/>
                <Navigation/>
                <MobileMenu />
            </Container>
        </AppBar>
    )
}