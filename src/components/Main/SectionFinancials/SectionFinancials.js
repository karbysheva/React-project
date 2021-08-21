import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Paper, Grid, Container} from "@material-ui/core/";
import HeaderFinancials from './HeaderFinancials';
import FinancialsFacilities from './FinancialsFacilities';
import FinancialsTabsChart from './FinancialsTabsChart';
// import FinancialsChartProjected from "./FinancialsChartProjected";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "30px 24px",
        [theme.breakpoints.down('sm')]: {
            padding: "30px 14px",
          },
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
        height: "100%",
    },
    paper2: {
        padding: theme.spacing(1),
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
    },
    typography: {
        color: "#094a82",
        textAlign: "center",
        textTransform: "uppercase",
        margin: "50px 0 30px",
        fontWeight: '500'
    }
  }))

export default function SectionFinancials() {
  const classes = useStyles();

  return (
    <div className={classes.financials}>
        <HeaderFinancials/>
        <Container className={classes.container} >
            <Grid container spacing={2}> 
                <Grid item xs={12} sm={4} className={classes.gridItem}>
                    <Paper className={classes.paper}>
                        <FinancialsFacilities />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8} className={classes.gridItem}>
                    <Paper className={classes.paper}>
                        <FinancialsTabsChart />
                    </Paper>
                </Grid>
                {/* <Grid item xs={12} sm={12} className={classes.gridItem}>
                    <Typography className={classes.typography}>Projected accumulated wealth</Typography>
                    <Paper className={classes.paper2}>
                        <FinancialsChartProjected />
                    </Paper>
                </Grid> */}
            </Grid>
      </Container>
    </div>
  );
}