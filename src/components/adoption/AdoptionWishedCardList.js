import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../elements';
import { Card } from '../';
import { history } from '../../redux/configureStore';
import { useSelector } from 'react-redux';
import HaveNothing from '../HaveNothing';

const AdoptionWishedCardList = (props) => {
  const wishPostList = useSelector((state) => state.post.wishPostList);
  console.log(wishPostList);
  return (
    <Grid width='calc(100% + 1rem)'>
      <Grid display='flex' width='calc(100% - 1rem)'>
        <Title>
          저에게 <span>관심</span>있으시죠?😊
        </Title>
      </Grid>
      {/* {wishPostList.length === 0 ? <HaveNothing /> : ''} */}
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
