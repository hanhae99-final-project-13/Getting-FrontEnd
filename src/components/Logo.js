import React from 'react';
import styled from 'styled-components';

import { Grid } from '../elements';
import { history } from '../redux/configureStore';

const Logo = ({ position, top, left, right, margin }) => {
  const styles = { position, top, left, right, margin };
  return (
    <React.Fragment>
      <ImgBox
        {...styles}
        src={process.env.PUBLIC_URL + '/img/getting_typo_4.svg'}
        onClick={() => history.push('/main')}
      />
    </React.Fragment>
  );
};

const ImgBox = styled.img`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  margin: ${(props) => props.margin};
  width: 48px;
  height: 22px;
`;

export default Logo;
