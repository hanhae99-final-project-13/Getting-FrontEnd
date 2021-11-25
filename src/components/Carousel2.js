import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const Carousel2 = ({ children, innerWidth }) => {
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
    isPress = true;
    e.preventDefault();
    if (isMobile) {
      startX = (e.touches && e.touches[0].pageX) - innerBox.current.offsetLeft;
    } else {
      startX = e.pageX - innerBox.current.offsetLeft;
    }
  };
  const sliderMouseUp = (e) => {
    if (!isPress) return;
    isPress = false;
    console.log('손땜');
  };
  const sliderMouseLeave = (e) => {
    if (!isPress) return;
    isPress = false;
    console.log('손땜');
  };
  const sliderMouseMove = (e) => {
    if (!isPress) return;
    if (isMobile) {
      x = e.touches && e.touches[0].pageX;
    } else {
      x = e.pageX;
    }
    innerBox.current.style.left = `${x - startX}px`;
    checkBoundary();
  };

  return (
    <React.Fragment>
      <SliderBox
        ref={sliderBox}
        onMouseDown={sliderMouseDown}
        onClick={sliderMouseUp}
        onMouseLeave={sliderMouseLeave}
        onMouseMove={sliderMouseMove}
        onTouchStart={sliderMouseDown}
        onTouchMove={sliderMouseMove}
        onTouchEnd={sliderMouseUp}
      >
        <InnerSlider width={innerWidth} ref={innerBox}>
          {children}
        </InnerSlider>
      </SliderBox>
    </React.Fragment>
  );
};

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
  width: auto;
  padding-left: 30px;
  padding-top: 50px;
`;

export default Carousel2;
