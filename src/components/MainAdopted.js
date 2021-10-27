import React from 'react';
import styled from 'styled-components';

import { Grid, Image, Text } from '../elements';
import { AdoptedCard } from '.';

const MainAdopted = (props) => {
  return (
    <Grid width='calc(100% + 1rem)' margin='0 0 20px 0'>
      <Grid display='flex'>
        <Text margin='0 0 20px 0'>반려친구들</Text>
        <Image size='12' />
      </Grid>
      <SliderBox>
        <InnerSlider>
          <AdoptedCard />
          <AdoptedCard />
          <AdoptedCard />
          <AdoptedCard />
          <AdoptedCard />
          <AdoptedCard />
          <AdoptedCard />
          <AdoptedCard />
          <AdoptedCard />
        </InnerSlider>
      </SliderBox>
    </Grid>
  );
};

const SliderBox = styled.div`
  height: 220px;
  margin-left: -1rem;
  margin-top: -1rem;
  overflow: visible;
  overflow-x: scroll;

  :: -webkit-scrollbar {
    display: none;
  }
`;

const InnerSlider = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400vw;
  padding-left: 1rem;
  padding-top: 1rem;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100px;
  background: url('http://rgo4.com/files/attach/images/2681740/682/850/029/5993dcd644b29c202130d9204e876693.jpeg')
    no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

export default MainAdopted;
