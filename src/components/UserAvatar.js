import React from 'react';
import { Avatar } from '@material-ui/core';

import avatar from '../images/avatar.png'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    userImage: {
        width: "80px",
        height: "80px",
        marginRight: "16px",
        borderRadius: "50px"
    }

  }))
  export default function UserAvatar() {
    const classes = useStyles();
    return(
      <Avatar className={classes.userImage} src={avatar} alt={"user"}/>
    )
}