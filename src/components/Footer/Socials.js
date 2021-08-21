import React from 'react';
import SocialsList from './SocialsList';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: "500"
  }
}))

export default function Socials() {
  const classes = useStyles();
  return (
    <div className={classes.socials}>
      <Typography className={classes.header}>We're socials</Typography>
      <SocialsList />
    </div>
  );
}