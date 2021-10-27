import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';

const AdoptionModal = () => {
  return (
    <Grid
      position='absolute'
      top='0'
      left='0'
      display='flex'
      justifyContent='center'
      alignItems='center'
      width='100vw'
      height='100vh'
      bg='rgba(0, 0, 0, 0.7)'
    >
      <ModalBox>
        <p>검색 조건</p>
        <span>기간</span>
        <hr />
        <Grid></Grid>
        <span>장소</span>
        <Grid></Grid>
        <span>지역</span>
        <Grid></Grid>
        <button>찾아보기</button>
      </ModalBox>
    </Grid>
  );
};

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 169px;
  height: 201px;
  padding: 12px;
  border-radius: 20px;
  background-color: white;

  p {
    margin: 0 0 12px 0;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
  hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.4);
  }
  span {
    font-size: 10px;
  }
  button {
    width: calc(100% + 26px);
    height: 42px;
    margin: 0 0 -13px -13px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    color: white;
    border: none;
    background-color: #504b4b;
  }
`;

export default AdoptionModal;
