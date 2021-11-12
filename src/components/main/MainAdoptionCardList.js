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
    <Grid width='calc(100% + 36px)' margin='0 0 40px 0'>
      <Grid
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        margin='0 0 5px 0'
        width='calc(100% - 36px)'
        height='auto'
      >
        <Title onClick={goAdoptionPage}>
          저랑 <span>가족</span>하실래요?
        </Title>
        <img
          width='13'
          height='4'
          src={process.env.PUBLIC_URL + '/img/icon/setting_horizontal_icon.svg'}
          onClick={() => history.push('/adoption')}
        />
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
                img={p.img.split(' ##')[0]}
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
  margin: 0;

  span {
    font-weight: bold;
  }
`;

const SliderBox = styled.div`
  height: 250px;
  margin-left: -38px;
  overflow: visible;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const InnerSlider = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400%;
  height: auto;
  overflow: visible;
  padding-left: 1rem;
  padding-top: 50px;
`;

export default MainAdoptionCardList;
