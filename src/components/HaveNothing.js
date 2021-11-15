import React from 'react';
import styled from 'styled-components';

import { Grid, Text, Image } from '../elements';
import { history } from '../redux/configureStore';

const HaveNothing = ({ imgWidth, imgHeight, it, state, ment, goThere }) => {
  return (
    <React.Fragment>
      <Grid
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='space-evenly'
        height='auto'
      >
        <Text margin='0 0 12px 0' weight='700' size='20px' color='#6b6462'>
          <ElSpan>{it}</ElSpan>
          {state}
        </Text>
        <img
          width={imgWidth ? imgWidth : '198'}
          style={{ marginBottom: '10px' }}
          src={process.env.PUBLIC_URL + '/img/illust/nopost.svg'}
        />
        {goThere && (
          <GoAdoption onClick={() => history.push(goThere)}>{ment}</GoAdoption>
        )}
      </Grid>
    </React.Fragment>
  );
};

const ElSpan = styled.span`
  color: #6b6462;
  font-weight: 800;
  font-size: 20px;
`;

const GoAdoption = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 130px;
  height: 40px;
  background-color: #ff7878;
  color: white;
  font-size: 14px;
  font-weight: 800;
  border-radius: 34px;
`;

export default HaveNothing;
