import React from 'react';
import {MenuList, MenuItem, Link} from '@material-ui/core';
import PhoneButton from './PhoneButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menu: {
        display: "flex",
        padding: "10px",
        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },
    list:{
        display: "flex",
        padding: "0",
    },
    item: {
        '&:hover': {
            background: "none"
        }
    },
    link: {
        color: "#fff",
        '&:hover': {
            color: "#b9964d",
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
    }
  ]
  export default function Navigation() {
    const classes = useStyles();
    return(
        <nav className={classes.menu}>
            <MenuList className={classes.list}>
                {menuItemData.map((item) => (
                    <MenuItem className={classes.item} key={item.menuItem}>
                        <Link href={item.src} className={classes.link}>{item.menuItem}</Link>
                    </MenuItem>
                ))}
                </MenuList>
            <PhoneButton/>
        </nav>
    )
}
