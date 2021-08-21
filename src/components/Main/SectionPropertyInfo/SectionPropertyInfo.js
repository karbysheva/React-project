import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeaderPropertyInfo from './HeaderPropertyInfo';
import SingleFamily from './SingleFamily';
import PropertyDescription from './PropertyDescription';
import PropertySlider from './PropertySlider';

const useStyles = makeStyles((theme) => ({
    container:{
        padding: "30px 24px"
    }
  }))

export default function PropertyInfo() {
    const classes = useStyles();
    return(
        <div className={classes.pfopertyInfo}>
            <HeaderPropertyInfo/>
            <Container className={classes.container}>
                 <Grid container spacing={3}>
                     <Grid item xs={12} sm={6} md={6}>
                        <SingleFamily />
                        <PropertyDescription />
                     </Grid>
                     <Grid item xs={12} sm={6} md={6}>
                         <PropertySlider />
                     </Grid>
                 </Grid>
            </Container>
        </div>
    )
}
