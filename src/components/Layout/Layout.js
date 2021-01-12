import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import HeaderBar from '../HeaderBar';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <div className='appContentWrapper'>
    <HeaderBar />
    <div className='appContent'>{children}</div>
    <Footer />
  </div>
);

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
