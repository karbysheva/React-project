import React from 'react';
import { Link, Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import CommentIcon from '@material-ui/icons/Comment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    userPosition: {
        fontWeight: "600",
    },
    userInfo: {
        display: "flex",
        flexDirection: "column"
    },
    link: {
        color: "#094a82",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        fontFamily: "arial"
    },
    icon:{
        width: "18px",
        marginRight: "10px"
    }
  }))

  export default function UserInfo() {
    const classes = useStyles();

    return(
    <div className={classes.userInfo}>
        <Typography className={classes.userPosition}>Portfolio Manager</Typography>
        <Typography className={classes.userName}>Jerry Reidhead</Typography>
        <Link className={classes.link} href="mailto:jerry@onqpm.com ">
            <MailIcon className={classes.icon}/>jerry@onqpm.com
        </Link>
        <Link className={classes.link} href="#">
            <CommentIcon className={classes.icon}/>Leave Comments</Link>
    </div>
    )
}