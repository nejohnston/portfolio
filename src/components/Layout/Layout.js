import React from 'react';
import PropTypes from 'prop-types';

import HeaderBar from '../HeaderBar';

const Layout = ({ children }) => (
  <>
    <HeaderBar />
      <div className='appContent'>{children}</div>
    {/* <Footer /> */}
  </>
);

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
