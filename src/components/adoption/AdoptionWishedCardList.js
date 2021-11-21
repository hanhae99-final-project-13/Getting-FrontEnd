import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import { Card } from '../';

import HaveNothing from '../HaveNothing';

const AdoptionWishedCardList = (props) => {
  const wishPostList = useSelector((state) => state.post.wishPostList);
  const sliderBox = React.useRef();
  const innerBox = React.useRef();
  let isPress = false;
  let startX;
  let x;

  const checkBoundary = () => {
    let outer = sliderBox.current.getBoundingClientRect();
    let inner = innerBox.current.getBoundingClientRect();
    if (parseInt(innerBox.current.style.left) > 0) {
      innerBox.current.style.left = '0px';
    } else if (inner.right - outer.right < -24) {
      innerBox.current.style.left = `-${inner.width - outer.width + 24}px`;
    }
  };
  const sliderMouseDown = (e) => {
    e.preventDefault();

    // e.stopPropagation();
    isPress = true;
    startX = e.nativeEvent.offsetX - innerBox.current.offsetLeft;
  };
  const sliderMouseUp = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    isPress = false;
  };
  const sliderMouseLeave = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    isPress = false;
  };
  const sliderMouseMove = (e) => {
    if (!isPress) return;
    e.preventDefault();
    // e.stopPropagation();
    // e.persist();
    x = e.nativeEvent.offsetX;
    innerBox.current.style.left = `${x - startX}px`;
    console.log(x - startX, e);
    checkBoundary();
  };

  return (
    <Grid margin='80px 0 0 0'>
      <Grid display='flex' width='calc(100% - 1rem)'>
        <Text margin='0' size='18px' weight='700'>
          나의 관심친구
        </Text>
      </Grid>
      {wishPostList.length === 0 ? (
        <>
          <Grid
            display='flex'
            alignItems='center'
            margin='8px 0'
            width='auto'
            height='auto'
          >
            <Text margin='0' color='#b6b1b0' weight='700' size='12px'>
              아직 관심친구가 없어요..
            </Text>
            <Text margin='0' size='12px'>
              😓
            </Text>
          </Grid>
          <img
            width='100%'
            src={process.env.PUBLIC_URL + '/img/illust/no_wish.svg'}
          />
        </>
      ) : (
        <SliderBox
          ref={sliderBox}
          onMouseDown={sliderMouseDown}
          onMouseMove={sliderMouseMove}
          onMouseUp={sliderMouseUp}
          onMouseLeave={sliderMouseLeave}
          // onDrag={(e) => console.log(e)}
        >
          <InnerSlider width={wishPostList.length} ref={innerBox}>
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
  position: relative;
  width: calc(100% + 48px);
  height: 260px;
  margin-left: -35px;
  margin-top: -1rem;
  overflow: hidden;

  :: -webkit-scrollbar {
    display: none;
  }
`;

const InnerSlider = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width * 210}px;
  padding-left: 30px;
  padding-top: 50px;
  pointer-events: none;
`;

export default AdoptionWishedCardList;
