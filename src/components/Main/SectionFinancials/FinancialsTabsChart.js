import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Tab, Tabs} from '@material-ui/core/';
import FinancialsTabItem1 from './FinancialsTabItem1';
import FinancialsChart from './FinancialsChart';
import './FinancialsTabsChart.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: "100%",
      [theme.breakpoints.down('xs')]: {
        flexWrap: "wrap",
      },
    },
    tabs: {
      [theme.breakpoints.down('xs')]: {
        flexWrap: "wrap",
        width: "100%"
      },
    },
    tab: {
        minWidth: "70px",
        minHeight: "90px",
        height: "33.333%",
        background: "#f2f2f2",
        borderTop: "1px solid lightgray",
        '&:first-child': {
            borderTop: "0px"
        },
        [theme.breakpoints.down('xs')]: {
          width: "33.333%",
          borderTop: "0px",
        },
    },
    box: {
        padding: "0px"
    },
    financialsChart:{
        marginLeft: "auto"
    },
    tabpanel: {
      width: "100%"
    }
  }));

function TabPanel(props) {
  const { children, value, index, ...other} = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className={classes.tabpanel}
    >
      {value === index && (
        <Box p={3} className={classes.box}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab label={<FinancialsTabItem1/>} {...a11yProps(0)} className={classes.tab}/>
        <Tab label={<FinancialsTabItem1/>} {...a11yProps(1)} className={classes.tab}/>
        <Tab label={<FinancialsTabItem1/>} {...a11yProps(2)} className={classes.tab}/>
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <FinancialsChart className={classes.financialsChart}/>
      </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanel}>
      <FinancialsChart className={classes.financialsChart}/>
        </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        <FinancialsChart className={classes.financialsChart}/>
      </TabPanel>
    </div>
  );
}