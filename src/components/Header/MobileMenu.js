import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {Button, List, ListItem, ListItemText, Divider} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    mobileMenu:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    },
    menuIcon:{
        color: "white",
        width: "30px",
        height: "40px"
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    listItemText: {
        color: "#094a82",
        '&:hover': {
            color: "#ecba36",
        }
    },
    phoneButton:{
        marginTop: "10%",
        padding: "8px 16px",
        boxSizing: "border-box",
    },
    phone: {
        width: "100%",
        color: "#fff",
        background: "#c29d4e",
        borderRadius: "70px",
        padding: "8px 22px",
        margin: "0 auto",
        '&:hover': {
            background: "#b9964d"
        }
    }
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.list}>
        {['Property Management', 'Investing', 'Resident Servises', 'Search Rentals'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text}  className={classes.listItemText}/>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.mobileMenu}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon className={classes.menuIcon}/>
            </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            
            {list(anchor)}
            <Divider />
            <div className={classes.phoneButton}>
                <Button href="#" className={classes.phone}>
                    (480) 696-6776 
                </Button>
            </div>
            
          </SwipeableDrawer>
        </React.Fragment>
      ))} 
    </div>
  );
}