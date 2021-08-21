import React, {useState} from 'react';
import { Typography, CardContent, CardMedia, CardHeader, Card, Avatar } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';
import './ComparablesCarousel';
import { makeStyles } from '@material-ui/core/styles';

import House1 from '../../../images/house1.jpeg';
import House2 from '../../../images/house2.jpeg';
import House3 from '../../../images/house3.jpeg';
import House4 from '../../../images/house4.jpeg';
import House5 from '../../../images/house5.jpeg';

const useStyles = makeStyles((theme) => ({
    comparablesCarouselItem:{
        listStyle: "none",
    },
    root: {
        minWidth: "280px",
        borderRadius: "0",
        border: "20px solid #f0f0f0",
        minHeight: "460px",
        boxShadow: "none",
      },
      media: {
        height: 0,
        paddingTop: '76.25%',
      },
      cardHeader: {
        flexDirection: "row-reverse",
        minHeight: "78px"
      },
      avatar: {
        backgroundColor: "#8b929b",
        width: "20px",
        height: "20px",
        fontSize: "12px",
      },
      typography:{
        fontWeight: "500",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "180px",
        textTransform: "capitalize",
        fontSize: "14px"
      },
      span: {
          fontWeight: "400"
      }
  }))

  const comparablesData = [
    {
        id: '1',
        address: '2 Cooper Square, New York, NY 10003, USA',
        image: `${House1}`,
        rent: 'Rent',
        rentPrice: '$1,860',
        sqft: 'Projected per SQFT',
        sqftPrice: '$0.96'
    },
    {
        id: '2',
        address: '3 Washington Square, New York, NY 10011, USA',
        image: `${House2}`,
        rent: 'Rent',
        rentPrice: '$1,790',
        sqft: 'Projected per SQFT',
        sqftPrice: '$0.96'
    },
    {
        id: '3',
        address: '120 ER 12th St, New York, NY 10003, USA',
        image: `${House3}`,
        rent: 'Rent',
        rentPrice: '$1,870',
        sqft: 'Projected per SQFT',
        sqftPrice: '$0.96'
    },
    {
        id: '4',
        address: '4 Washington Pl, New York, NY 10003, USA',
        image: `${House4}`,
        rent: 'Rent',
        rentPrice: '$1,850',
        sqft: 'Projected per SQFT',
        sqftPrice: '$0.96'
    },
    {
        id: '5',
        address: '40 W 4th St, New York, NY 10012, USA',
        image: `${House5}`,
        rent: 'Rent',
        rentPrice: '$1,760',
        sqft: 'Projected per SQFT',
        sqftPrice: '$0.96'
    },
]

SwiperCore.use([Navigation, Thumbs]);

export default function ComparablesCarousel(props) {
    const classes = useStyles();
    const [thumbsSwiper] = useState(null);

    return(
        <div className={classes.comparablesCarousel}>
            <Swiper 
            id="main"
            thumbs={{swiper: thumbsSwiper}}
            tag="section" 
            wrapperTag="ul" 
            navigation 
            spaceBetween={0}
            // slidesPerView={4}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                  },
                600: {
                  slidesPerView: 2,
                },
                960: {
                  slidesPerView: 3,
                },
                1142: {
                    slidesPerView: 4,
                  },
              }}
            >
                {comparablesData.map((item) => (
                    <SwiperSlide tag="li" className={classes.comparablesCarouselItem} key={item.id}>
                        <Card className={classes.root}>
                            <CardHeader className={classes.cardHeader}
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                    {item.id}
                                    </Avatar>
                                }
                                title={item.address}
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image={item.image}
                                title="Lorem"
                            />
                            <CardContent>
                                <Typography className={classes.typography} key={item.value}>
                                    <span className={classes.span}>{item.rent}: </span>
                                    {item.rentPrice}
                                </Typography>
                                <Typography className={classes.typography} key={item.value}>
                                    <span className={classes.span}>{item.sqft}: </span>
                                    {item.sqftPrice}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
