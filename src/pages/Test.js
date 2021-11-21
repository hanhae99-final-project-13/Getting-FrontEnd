import React from 'react';
import styled from 'styled-components';

import { Carousel2 } from '../components';

const Test = () => {
  const info = (e) => {
    let x = e.nativeEvent.offsetX;
    console.log(e.target.offsetLeft);
    console.log(e.pageX);
    console.log(x);
    console.log(e);
  };

  return (
    <React.Fragment>
      <BigContainer>
        <Container>
          <div onClick={info} onMouseDown={info} onMouseMove={info}></div>
          <div onClick={info} onMouseDown={info} onMouseMove={info}></div>
          <div onClick={info} onMouseDown={info} onMouseMove={info}></div>
        </Container>
      </BigContainer>
      <Carousel2>맞냐이거 되냐이거</Carousel2>
    </React.Fragment>
  );
};

const BigContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  width: 90vw;
  height: 400px;
  background: pink;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  width: 80vw;
  height: 300px;
  background: steelblue;
  div {
    width: 200px;
    height: 250px;
    background: green;
  }
  div::nth-child(1) {
  }
`;

export default Test;
