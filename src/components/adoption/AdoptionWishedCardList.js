import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid } from '../../elements';
import { Card } from '../';
// import SliderBox from '../SliderBox';

import HaveNothing from '../HaveNothing';

const AdoptionWishedCardList = (props) => {
  const wishPostList = useSelector((state) => state.post.wishPostList);
  const sliderBox = React.useRef();
  const innerBox = React.useRef();

  console.log(sliderBox.current);
  console.log(innerBox.current);
  let isPress = false;
  let startX;
  let x;

  const checkBoundary = () => {
    let outer = sliderBox.current.getBoundingClientRect();
    let inner = innerBox.current.getBoundingClientRect();
    if (parseInt(innerBox.current.style.left) > 0) {
      innerBox.current.style.left = '0px';
    } else if (inner.right - outer.right < -35) {
      innerBox.current.style.left = `-${inner.width - outer.width}px`;
    }
  };
  const sliderMouseDown = (e) => {
    console.log(sliderBox.current.getBoundingClientRect());
    console.log(innerBox.current.getBoundingClientRect());
    isPress = true;
    startX = e.nativeEvent.offsetX - innerBox.current.offsetLeft;
    console.log(startX);
  };
  const sliderMouseUp = (e) => {
    isPress = false;
  };
  const sliderMouseLeave = () => {
    isPress = false;
  };
  const sliderMouseMove = (e) => {
    if (!isPress) return;
    // e.defaultPrevented();
    x = e.nativeEvent.offsetX;

    innerBox.current.style.left = `${x - startX}px`;
    checkBoundary();
  };

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
        <SliderBox
          ref={sliderBox}
          onMouseDown={sliderMouseDown}
          onMouseMove={sliderMouseMove}
          onMouseUp={sliderMouseUp}
          onMouseLeave={sliderMouseLeave}
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
  position: relative;
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
