import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeaderComparables from './HeaderComparables';
import ComparableInfo from './ComparableInfo';
import ComparableSlider from './ComparableSlider';
import ComparablesCarousel from './ComparablesCarousel';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "50px 24px",
        [theme.breakpoints.down('sm')]: {
            padding: "50px 14px",
        },
    }
  }))

export default function SectionComparables() {
    const classes = useStyles();
    return(
        <div className={classes.headerComparables}>
            <HeaderComparables/>
            <Container className={classes.container}>
                <ComparableInfo />
                <ComparableSlider />
                <ComparablesCarousel />
            </Container>
        </div>
    )
}