import React from 'react';
import PropTypes from 'prop-types';

import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from 'react-router-dom'

const styles = {
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
};

const Loader = () => (
  <div className='loader triangle'>
    <svg viewBox='0 0 81 75'>
      <polygon points='38 3 74 67 2 67' />
    </svg>
  </div>
);

const HeaderBar = (props, window) => {
  const { classes } = props;

  const [ anchorEl, setAnchorEl ] = React.useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(window);
  return (
    <div>
      <AppBar
        position='fixed'
        color='default'
        className={classes.headerContainer}
      >
        <Toolbar className={classes.header}>
          <div className={classes.iconTitleContainer}>
            {props.window < 769 ? (
              <NavLink to='/' spy={true} smooth={true} offset={-70} duration={750}>
                <Loader />
              </NavLink>
            ) : (
              <div className={classes.iconTitleContainer}>
                <Loader />
                <NavLink
                  to='/'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={750}
                >
                  <Typography
                    variant='h5'
                    component='h5'
                    style={{ color: '#fff' }}
                  >
                    <HomeIcon/>
                  </Typography>
                </NavLink>
              </div>
            )}
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

export default withStyles(styles)(HeaderBar);