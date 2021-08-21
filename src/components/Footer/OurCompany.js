import React from 'react';
import Partners from './Partners';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
  header: {
    fontWeight: "500",
    marginBottom: "20px"
  },
  text: {
    color: "gray",
    fontSize: "14px" ,
    marginBottom: "10px"
  },
  link:{
    color: "#094a82",
    transition: "all .3s"
  }
}))

export default function OurCompany() {
  const classes = useStyles();
  return (
    <div className={classes.ourCompany}>
      <Typography className={classes.header}>Our Company</Typography>
      <Typography className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in, laborum doloremque harum sit optio eveniet, laborum doloremque harum sit optio eveniet, similique veni similique veniam qui totam voluptate numquam excepturi dolorem! 
        <Link href="#" className={classes.link}> In itaque iste sapiente </Link>
         In itaque iste 
         <Link href="#" className={classes.link}> In itaque</Link> sapiente culpa modi! Quae in, am qui totam voluptate numquam excepturi dolorem! In itaque iste sapiente culpa modi!</Typography>
      <Typography className={classes.text}>Lorem ipsum dolor sit amet consectetur.</Typography>
      <Partners/>
    </div>
  );
}