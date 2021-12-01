import React from 'react';

import { Header } from '..';
import MypageFooter from '../Footer/MypageFooter';

const withMypageFooter = (Component) => (props) => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Component {...props} />
      <MypageFooter />
    </React.Fragment>
  );
};

export default withMypageFooter;
