import React from 'react';
import { Typography } from '@material-ui/core';
import PropertyFacilities from './PropertyFacilities';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    description: {
        fontSize: '16px'
    },
  }))
  
  export default function PropertyDescription(props) {
    const classes = useStyles();
    return(
        <div className={classes.pfopertyDescription}>
            <PropertyFacilities />
            <Typography className={classes.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, facilis modi id laudantium, 
                ipsam, voluptas reprehenderit minus laboriosam unde illum eligendi voluptatem illo sunt nostrum itaque 
                pariatur perferendis. Libero, soluta? laboriosam unde illum eligendi voluptatem illo sunt nostrum itaque 
                pariatur perferendis. Libero, soluta? laboriosam unde illum eligendi voluptatem illo sunt nostrum itaque 
                pariatur perferendis. Libero, soluta? 
            </Typography>
        </div>
    )
}