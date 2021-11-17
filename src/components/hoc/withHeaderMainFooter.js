import React from 'react';

import { Header } from '..';
import MainFooter from '../Footer/MainFooter';

const withHeaderMainFooter = (Component) => (props) => {
  return (
    <React.Fragment>
      <Header />
      <Component {...props} />
      <MainFooter />
    </React.Fragment>
  );
};

export default withHeaderMainFooter;
