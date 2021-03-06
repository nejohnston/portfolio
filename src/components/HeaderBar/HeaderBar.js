import React from 'react';

import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#fff',
    marginBottom: '10%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90vw',
    alignItems: 'center',
    padding: '0'
  },
  iconTitleContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "rgba(0, 0, 0, 0.87)"
  }
});

const HeaderBar = () => {
  const classes = useStyles();

  const [ anchorEl, setAnchorEl ] = React.useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar
        position='fixed'
        color='default'
        className={classes.headerContainer}
      >
        <Toolbar className={classes.header}>
            
              <div className={classes.iconTitleContainer}>
                <NavLink
                  to='/'
                  offset={-70}
                  duration={750}
                >
                  <IconButton
                  >
                    <HomeIcon/>
                  </IconButton>
                </NavLink>
              </div>
          <IconButton
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* <MenuItem>
              <NavLink
                to='about'
                offset={-70}
                duration={750}
                onClick={handleClose}
                className={classes.linkText}
              >
                About
              </NavLink>
            </MenuItem> */}
            <MenuItem>
              <NavLink
                to='projects'
                offset={-70}
                duration={750}
                onClick={handleClose}
                className={classes.linkText}
              >
                Projects
              </NavLink>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;