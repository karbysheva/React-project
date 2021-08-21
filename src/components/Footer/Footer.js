import React from 'react';
import Socials from './Socials';
import Help from './Help';
import Management from './Management';
import OurCompany from './OurCompany';
import { Container, Grid,  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#f2f2f2",
    padding: "30px 0px", 
  },
  container: {
    display: "flex",
    justifyContent: "space-between"
  },
  gridItemCompany: {
    [theme.breakpoints.down('sm')]: {
      order: 1
    },
  },
  gridItemSocials: {
    [theme.breakpoints.down('sm')]: {
      order: 4
    },
  },
  gridItemHelp: {
    [theme.breakpoints.down('sm')]: {
      order: 3
    },
  },
  gridItemManagement: {
    [theme.breakpoints.down('sm')]: {
      order: 2
    },
  },
}))

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
         <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={5} className={classes.gridItemCompany}>
              <OurCompany />
            </Grid>
            <Grid item xs={6} sm={3} md={2} className={classes.gridItemManagement}>
              <Management/>
            </Grid>
            <Grid item xs={6} sm={3} md={2} className={classes.gridItemHelp}>
              <Help/>
            </Grid>
            <Grid item xs={12} sm={5} md={3} className={classes.gridItemSocials}>
              <Socials/>
            </Grid>
          </Grid>
        </Container>
    </footer>
  );
}