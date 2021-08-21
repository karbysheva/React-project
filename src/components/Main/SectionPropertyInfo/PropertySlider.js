import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';
import './PropertySlider.css';
import { makeStyles } from '@material-ui/core/styles';

import House1 from '../../../images/house1.jpeg';
import House2 from '../../../images/house2.jpeg';
import House3 from '../../../images/house3.jpeg';
import House4 from '../../../images/house4.jpeg';
import House5 from '../../../images/house5.jpeg';

const useStyles = makeStyles((theme) => ({
    propertySlider: {
        paddingLeft: "30px",
        [theme.breakpoints.down('xs')]: {
            paddingLeft: "0px",
        },
    },
    comparablesCarouselItem: {
        listStyle: "none",
    },
    imageLarge: {
        minHeight: "390px",
        [theme.breakpoints.down('md')]: {
            minHeight: "350px",
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: "300px",
        },
    },
    imageMini: {
        minHeight: "76px",
        [theme.breakpoints.down('md')]: {
            minHeight: "70px",
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: "60px",
        },
    }
  }))

  const propertyInfoData = [
    {
        image: `${House1}`,
        key: '1',
    },
    {
        image: `${House2}`,
        key: '2',
    },
    {
        image: `${House3}`,
        key: '3',
    },
    {
        image: `${House4}`,
        key: '4',
    },
    {
        image: `${House5}`,
        key: '5',
    },
]

SwiperCore.use([Navigation, Thumbs]);

export default function PropertySlider(props) {
    const classes = useStyles();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return(
        <div className={classes.propertySlider}>
            <Swiper 
            id="main"
            thumbs={{swiper: thumbsSwiper}}
            tag="section" 
            wrapperTag="ul" 
            navigation 
            spaceBetween={0}
            slidesPerView={1}
            >
                {propertyInfoData.map((item) => (
                    <SwiperSlide tag="li" className={classes.comparablesCarouselItem} key={item.key}>
                        <img src={item.image} alt="" className={classes.imageLarge}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper 
            id="thumbs" 
            onSwiper={setThumbsSwiper}
            spaceBetween={2}
            slidesPerView={5}
            watchSlidesVisibility={true}
            watchSlidesProgress={true}
            >
                {propertyInfoData.map((item) => (
                    <SwiperSlide tag="li" className={classes.comparablesCarouselItem} key={item.key}>
                        <img src={item.image} alt="" className={classes.imageMini}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}