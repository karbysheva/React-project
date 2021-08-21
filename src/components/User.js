import React from 'react';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    user: {
        display: "flex"
    }
  }))
  export default function User() {
    const classes = useStyles();
    return(
        <div className={classes.user}>
            <UserAvatar />
            <UserInfo />
        </div>
    )
}