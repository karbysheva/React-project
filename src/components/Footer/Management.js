import React from 'react';
import {MenuList, MenuItem, Link, Typography} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  header: {
    fontWeight: "500",
    maxWidth: "150px"
  },
  item: {
    padding: "8px 0px",
    '&:hover': {
      background: "none"
    }
  },
  link:{
    color: "gray",
    '&:hover':{
      color: "#094a82",
      textDecoration: "none"
    }
  }
}))
const menuItemData = [
  {
    menuItem: 'Property Management',
    src: '#',
  },
  {
    menuItem: 'Investing',
    src: '#',
  },
  {
    menuItem: 'Resident Servises',
    src: '#',
  },
  {
    menuItem: 'Search Rentals',
    src: '#',
  },
  {
    menuItem: 'Management',
    src: '#',
  },
  {
    menuItem: 'Investing ',
    src: '#',
  },
  {
    menuItem: 'Servises',
    src: '#',
  },
  {
    menuItem: 'Rentals',
    src: '#',
  },
]

export default function Management() {
  const classes = useStyles();
  return (
    <div className={classes.management}>
      <Typography className={classes.header}>Arizona Property Management</Typography>
      <nav className={classes.menu}>
            <MenuList className={classes.list}>
                {menuItemData.map((item) => (
                    <MenuItem className={classes.item} key={item.menuItem}>
                        <Link href={item.src} className={classes.link}>{item.menuItem}</Link>
                    </MenuItem>
                ))}
                </MenuList>
        </nav>
    </div>
  );
}
