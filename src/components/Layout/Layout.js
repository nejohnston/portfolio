import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import HeaderBar from '../HeaderBar';

const useStyles = makeStyles((theme) => ({
  appContent: {
    width: '100vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    gridRowGap: 10,
    gridColumnGap: 10,
    gridTemplateColumns: '1fr 40px',
    overflow: 'hidden',
    flexGrow: 1,
    maxWidth: '100vh',
  },
  rootroot: {
    width: '100%'
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  
  return (
  <div >
    <HeaderBar />
      <div className={classes.appContent}>{children}</div>
    {/* <Footer /> */}
  </div>
)};

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
