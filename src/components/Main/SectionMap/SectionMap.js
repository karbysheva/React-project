import React from 'react';
import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import HeaderMap from './HeaderMap';
import GoogleMaps from './GoogleMaps';
import MapCheckboxes from './MapCheckboxes';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "50px 24px",
        [theme.breakpoints.down('sm')]: {
            padding: "50px 14px",
          },
    }
  }))

function SectionMap() {
    const classes = useStyles();
    return(
        <div className={classes.sectionMap}>
            <HeaderMap/>
            <Container className={classes.container}>
                <MapCheckboxes/>
                <GoogleMaps />
            </Container>
        </div>
    )
}
export default SectionMap;