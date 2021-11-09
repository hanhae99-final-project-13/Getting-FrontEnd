import React, { useEffect } from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';

import { Card } from '../';
import { Grid, Image } from '../../elements';
import { useSelector } from 'react-redux';

const MainAdoptionCardList = (props) => {
  const mainPostList = useSelector((state) => state.post.mainPostList);
  const goAdoptionPage = () => {
    history.push('/adoption');
  };

  return (
    <Grid width='calc(100% + 38px)' margin='0 0 40px 0'>
      <Grid
        display='flex'
        justifyContent='space-between'
        width='calc(100% - 1rem)'
      >
        <Title onClick={goAdoptionPage}>
          저랑 <span>가족</span>하실래요?
        </Title>
        <Image size='12' _onClick={goAdoptionPage} />
      </Grid>
      <SliderBox>
        <InnerSlider>
          {mainPostList.map((p, idx) => {
            return (
              <Card
                key={p.postId}
                breed={p.breed}
                sex={p.sex}
                age={p.age}
                createAt={p.createAt}
                modifiedAt={p.modifiedAt}
                ownerType={p.ownerType}
                address={p.address}
                img={p.img[0]}
                postId={p.postId}
                isAdopted={p.isAdopted}
              />
            );
          })}
        </InnerSlider>
      </SliderBox>
    </Grid>
  );
};

const Title = styled.p`
  margin: 0 0 20px 0;

  span {
    font-weight: bold;
  }
`;

const SliderBox = styled.div`
  height: 220px;
  margin-left: -38px;
  margin-top: -1rem;
  overflow: visible;
  overflow-x: scroll;
  ::-webkit-scrollbar {
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

export default MainAdoptionCardList;
