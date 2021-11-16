import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid } from '../../elements';
import { Card } from '../';
// import SliderBox from '../SliderBox';

import HaveNothing from '../HaveNothing';

const AdoptionWishedCardList = (props) => {
  const wishPostList = useSelector((state) => state.post.wishPostList);
  console.log(wishPostList);
  return (
    <Grid margin='16px 0 0 0'>
      <Grid display='flex' width='calc(100% - 1rem)'>
        <Title>
          저에게 <span>관심</span>있으시죠?😊
        </Title>
      </Grid>
      {wishPostList.length === 0 ? (
        <HaveNothing
          width='calc(100% - 1rem)'
          imgWidth='163'
          imgHeight='140'
          it='관심 친구'
          state='가 없습니다'
        />
      ) : (
        <SliderBox>
          <InnerSlider width={wishPostList.length}>
            {wishPostList.map((p) => {
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
                  img={p.img.split(' ##'[0])}
                  postId={p.postId}
                  isAdopted={p.isAdopted}
                />
              );
            })}
          </InnerSlider>
        </SliderBox>
        // <SliderBox
        //   list={wishPostList}
        //   height='300'
        //   dots='false'
        //   arrows={false}
        //   speed={600}
        //   slidesToShow={1.5}
        // />
      )}
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
  height: 260px;
  margin-left: -35px;
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
  width: ${(props) => props.width * 210}px;
  padding-left: 30px;
  padding-top: 50px;
`;

export default AdoptionWishedCardList;
