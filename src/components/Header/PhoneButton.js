import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    phone: {
        color: "#fff",
        background: "#c29d4e",
        borderRadius: "70px",
        padding: "6px 18px",
        '&:hover': {
            background: "#b9964d"
        }
    }
    
  }))
  export default function PhoneButton() {
    const classes = useStyles();
    return(
        <Button href="#" className={classes.phone}>
            (480) 696-6776
        </Button>
    )
}