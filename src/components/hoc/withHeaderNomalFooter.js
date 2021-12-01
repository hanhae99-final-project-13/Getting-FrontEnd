import React from 'react';

import { Header } from '..';
import NomalFooter from '../Footer/NomalFooter';

const withHeaderNomalFooter = (Component) => (props) => {
  return (
    <React.Fragment>
      <Header />
      <Component {...props} />
      <NomalFooter />
    </React.Fragment>
  );
};

export default withHeaderNomalFooter;
