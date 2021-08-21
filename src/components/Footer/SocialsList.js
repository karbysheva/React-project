import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, List, ListItemIcon } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  socialsList: {
    display: "flex",
  },
  socialsLink: {
    color: "#094a82",
    '&:hover': {
      color: "#ecba36",
    }
  },
  listItemIcon:{
    minWidth: "38px"
  }
}))

const socials = [
  {
  icon: <FacebookIcon/>,
  name: 'Facebook'
}, 
{
  icon: <TwitterIcon />,
  name: 'Twitter'
}, 
{
  icon: <LinkedInIcon />,
  name: 'LinkedIn'
},
{
  icon: <InstagramIcon />,
  name: 'Instagram'
},
{
  icon: <YouTubeIcon />,
  name: 'YouTube'
}
];

export default function SocialsList(){
  const classes = useStyles();
  return (
      <List className={classes.socialsList}>
        {socials.map((socialsItem ) => (
            <ListItemIcon className={classes.listItemIcon} key={socialsItem.name}>
              <Link href="#" className={classes.socialsLink}>
                {socialsItem.icon}
              </Link>
            </ListItemIcon>
        ))}
      </List>
  );
}