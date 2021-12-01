import React from 'react';
import styled from 'styled-components';

import { history } from '../redux/configureStore';

const BackButton = ({ position, top, left, right }) => {
  const styles = { position, top, left, right };
  return (
    <React.Fragment>
      <ImgBox
        {...styles}
        src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'}
        onClick={() => history.goBack()}
      />
    </React.Fragment>
  );
};

const ImgBox = styled.img`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 10px;
  height: 14px;
  cursor: pointer;
`;

export default BackButton;
