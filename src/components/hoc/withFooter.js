import React from 'react';

import Footer from '../Footer';

const withFooter = (Component) => (props) => {
  return (
    <React.Fragment>
      <Component {...props} />
      <Footer />
    </React.Fragment>
  );
};

export default withFooter;
