import React from 'react';

import { Header } from '..';
import AdoptionFooter from '../Footer/AdoptionFooter';

const withHeaderAdoptionFooter = (Component) => (props) => {
  return (
    <React.Fragment>
      <Header />
      <Component {...props} />
      <AdoptionFooter />
    </React.Fragment>
  );
};

export default withHeaderAdoptionFooter;
