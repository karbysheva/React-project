// import React from 'react';
// import { Container, Grid, Typography, Card, CardContent} from '@material-ui/core';
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     card: {
//         borderRadius: "0px",
//     },
//     cardPrices:{
//         padding: "2rem 0",
//     },
//     cardEstimate: {
//         background: "#094a82",
   
//     },
//     rentEstimate:{
//         color: "#b9964d",
//         fontWeight: "600",
//         fontSize: "18px",
//         display: "flex",
//         flexWrap: 'nowrap',
//         minWidth: "170px"
//     },
//     infoIcon:{
//         color: "#5e778e"
//     },
//     rentPrice: {
//         color: "#fff",
//         fontWeight: "600",
//         fontSize: "34px"
//     },
//     rentPrices: {
//         color: "#fff",
//         fontSize: "15px"
//     },
//     pricesItem: {
//         display: "flex"
//     },
//     cardContent:{
//         textAlign: "center",
//         minHeight: "100px"
//     },
//     years: {
//         color: "#094a82",
//         textTransform: "uppercase",
//         fontWeight: "500",
//     },
//     pricesRow: {
//         display: "flex",
//         justifyContent: "space-evenly",
//         margin: "8px 0"
//     },
//     price: {
//         fontWeight: "500",
//     },
//     text: {
//         fontSize: "12px",
//         fontWeight: "500",
//         textTransform: "uppercase",
//         lineHeight: "2"
//     }
//   }))

//   const cardsData = [
//     {
//         year: '1 year',
//         netIncome: 'net income',
//         netIncomePrice: '$22,320',
//         equityIncrease: 'equity increase',
//         equityIncreasePrise: '$10,000',
//     },
//     {
//         year: '5 years',
//         netIncome: 'net income',
//         netIncomePrice: '$120,892',
//         equityIncrease: 'equity increase',
//         equityIncreasePrise: '$22,000',
//     },{
//         year: '10 years',
//         netIncome: 'net income',
//         netIncomePrice: '$267,976',
//         equityIncrease: 'equity increase',
//         equityIncreasePrise: '$53,000',
//     }
// ];

//   export default function CardPrices() {
//     const classes = useStyles();

//     return(
//         <div className={classes.cardPrices}>
//             <Container className={classes.cardGrid} maxWidth="lg">
//                 <Grid container spacing={1}>
//                     <Grid item xs={12} sm={3} md={2}>
//                         <Card className={classes.card}>
//                             <CardContent className={classes.cardEstimate}>
//                                 <Typography className={classes.rentEstimate}>Rent Estimate
//                                     <InfoOutlinedIcon className={classes.infoIcon}/></Typography>
//                                 <Typography className={classes.rentPrice}>$1,860</Typography>
//                                 <Typography className={classes.rentPrices}>$1750-$1950</Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                     <Grid item xs={12} sm={9} md={10} className={classes.pricesItem}>
//                         {cardsData.map((item) => (
//                         <Grid item md={4} key={item.year}>
//                             <Card className={classes.card}>
//                                 <CardContent className={classes.cardContent}>
//                                     <Typography className={classes.years}>{item.year}
//                                         <InfoOutlinedIcon className={classes.infoIcon}/></Typography>
//                                     <div className={classes.pricesRow}>
//                                         <div className={classes.pricesColumn}>
//                                             <Typography className={classes.price}>{item.netIncomePrice}</Typography>
//                                             <Typography className={classes.text}>{item.netIncome}</Typography>
//                                         </div>
//                                         <div className={classes.pricesColumn}>
//                                             <Typography className={classes.price}>{item.equityIncreasePrise}</Typography>
//                                             <Typography className={classes.text}>{item.equityIncrease}</Typography>
//                                         </div>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </Container>
//         </div>
//     )
// }
import React from 'react';
import { Container, Grid, Typography, Card, CardContent} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: "0px",
        height: "100%",
    },
    cardPrices:{
        padding: "2rem 0",
    },
    cardEstimate: {
        background: "#094a82",
        [theme.breakpoints.down('sm')]: {
            padding: "18px 16px 18px",
        },
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px 16px 16px",
        }
    },
    rentEstimate:{
        color: "#b9964d",
        fontWeight: "600",
        fontSize: "18px",
        display: "flex",
        flexWrap: 'nowrap',
        minWidth: "170px",
        [theme.breakpoints.down('xs')]: {
            minWidth: "auto",
            marginLeft: "10px"
        },
    },
    infoIcon:{
        color: "#5e778e"
    },
    rentPrice: {
        color: "#fff",
        fontWeight: "600",
        fontSize: "34px"
    },
    rentPrices: {
        color: "#fff",
        fontSize: "15px"
    },
    pricesItem: {
        display: "flex",
        [theme.breakpoints.down('xs')]: {
            flexWrap: "wrap"
        },
    },
    cardContent:{
        textAlign: "center",
        minHeight: "100px",
        [theme.breakpoints.down('sm')]: {
            padding: "0px !important",
        },
        [theme.breakpoints.down('xs')]: {
            padding: "16px !important",
        },
    },
    years: {
        color: "#094a82",
        textTransform: "uppercase",
        fontWeight: "500",
    },
    pricesRow: {
        display: "flex",
        justifyContent: "space-evenly",
        margin: "8px 0",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: "row",
        },
    },
    price: {
        fontWeight: "500",
    },
    text: {
        fontSize: "12px",
        fontWeight: "500",
        textTransform: "uppercase",
        lineHeight: "2"
    }
  }))

  const cardsData = [
    {
        year: '1 year',
        netIncome: 'net income',
        netIncomePrice: '$22,320',
        equityIncrease: 'equity increase',
        equityIncreasePrise: '$10,000',
    },
    {
        year: '5 years',
        netIncome: 'net income',
        netIncomePrice: '$120,892',
        equityIncrease: 'equity increase',
        equityIncreasePrise: '$22,000',
    },{
        year: '10 years',
        netIncome: 'net income',
        netIncomePrice: '$267,976',
        equityIncrease: 'equity increase',
        equityIncreasePrise: '$53,000',
    }
];

  export default function CardPrices() {
    const classes = useStyles();

    return(
        <div className={classes.cardPrices}>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3} md={2}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardEstimate}>
                                <Typography className={classes.rentEstimate}>Rent Estimate
                                    <InfoOutlinedIcon className={classes.infoIcon}/></Typography>
                                <Typography className={classes.rentPrice}>$1,860</Typography>
                                <Typography className={classes.rentPrices}>$1750-$1950</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={9} md={10} className={classes.pricesItem}>
                        {cardsData.map((item) => (
                        <Grid item xs={12} md={4} key={item.year}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography className={classes.years}>{item.year}
                                        <InfoOutlinedIcon className={classes.infoIcon}/></Typography>
                                    <div className={classes.pricesRow}>
                                        <div className={classes.pricesColumn}>
                                            <Typography className={classes.price}>{item.netIncomePrice}</Typography>
                                            <Typography className={classes.text}>{item.netIncome}</Typography>
                                        </div>
                                        <div className={classes.pricesColumn}>
                                            <Typography className={classes.price}>{item.equityIncreasePrise}</Typography>
                                            <Typography className={classes.text}>{item.equityIncrease}</Typography>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}