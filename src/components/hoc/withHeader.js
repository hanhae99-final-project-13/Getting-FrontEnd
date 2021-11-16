import React from 'react';

import Header from '../Header';

const withHeader = (Component) => (props) => {
  return (
    <React.Fragment>
      <Header />
      <Component {...props} />
    </React.Fragment>
  );
};

export default withHeader;
