import React from 'react';

import { Header, Footer } from '..';

const withHeaderFooter = (Component) => (props) => {
  return (
    <React.Fragment>
      <Header />
      <Component {...props} />
      <Footer />
    </React.Fragment>
  );
};

export default withHeaderFooter;
