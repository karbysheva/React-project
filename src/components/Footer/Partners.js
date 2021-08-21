import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem } from '@material-ui/core';
import  Logo1  from '../../images/Logo1.png';
import  Logo2  from '../../images/Logo2.png';
import  Logo3  from '../../images/Logo3.png';
import  Logo4  from '../../images/Logo4.png';
import  Logo5  from '../../images/Logo5.png';

const useStyles = makeStyles((theme) => ({
  partners: {
    padding: "20px 0px 0px 0px"
  },
  imageListItem:{
    width: "30% !important",
    height: "100% !important"
  },
  img: {
    maxWidth: "60%",
    height: "auto",
    transform: "translateY(0%)",
    filter: "grayscale(100%)",
    '&:hover':{
      filter: "grayscale(0%)",
    }
  }
}));

const itemData = [
  {
    img: Logo1,
    src: 'https://www.vhv.rs/dpng/d/438-4383575_transparent-hbo-background-transparent-background-hbo-logo-png.png',
    title: 'avatarTitle',
  },
  {
    img: Logo2,
    src: 'https://www.vhv.rs/dpng/d/438-4383575_transparent-hbo-background-transparent-background-hbo-logo-png.png',
    title: 'avatarTitle',
  },
  {
    img: Logo3,
    src: 'https://www.vhv.rs/dpng/d/438-4383575_transparent-hbo-background-transparent-background-hbo-logo-png.png',
    title: 'avatarTitle',
  },
  {
    img: Logo4,
    src: 'https://www.vhv.rs/dpng/d/438-4383575_transparent-hbo-background-transparent-background-hbo-logo-png.png',
    title: 'avatarTitle',
  },
  {
    img: Logo5,
    src: 'https://www.vhv.rs/dpng/d/438-4383575_transparent-hbo-background-transparent-background-hbo-logo-png.png',
    title: 'avatarTitle',
  }
]

export default function Partners() {
  const classes = useStyles();
  return (
    <div className={classes.partners}>
      <ImageList className={classes.imageList}>
      {itemData.map((item) => (
          <ImageListItem key={item.img} className={classes.imageListItem}>
            <img src={item.img} alt={item.title} className={classes.img}/>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}