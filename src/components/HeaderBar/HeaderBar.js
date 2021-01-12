import React from 'react';
import PropTypes from 'prop-types';

import {
  AppBar,
  Toolbar,
  Typography,
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
    backgroundColor: 'transparent',
    color: '#fff'
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
                  spy={true}
                  smooth={true}
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
            // color='#2f3545'
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
            <MenuItem>
              <NavLink
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                onClick={handleClose}
              >
                About
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to='projects'
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                onClick={handleClose}
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

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default HeaderBar;