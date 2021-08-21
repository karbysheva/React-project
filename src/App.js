import React from 'react';
import Header from './components/Header/Header';
import PersonInfo from './components/PersonInfo';
import CardPrices from './components/CardPrices';
import Footer from './components/Footer/Footer';
import SeeWhyHeading from './components/SeeWhyHeading';
import SectionPropertyInfo from './components/Main/SectionPropertyInfo/SectionPropertyInfo';
import SectionFinancials from './components/Main/SectionFinancials/SectionFinancials';
import SectionMap from './components/Main/SectionMap/SectionMap';
import SectionComparables from './components/Main/SectionComparables/SectionComparables.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  }
}))

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Header />
        <PersonInfo />
        <CardPrices/>
        <SeeWhyHeading/>
        <SectionPropertyInfo/>
        <SectionFinancials />
        <SectionComparables/>
        <SectionMap />
        <Footer/>
    </div>
  );
}
