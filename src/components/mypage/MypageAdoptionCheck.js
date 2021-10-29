import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import { MyWriteList, ReceivedAdoption } from '.';

const MypageAdoptionCheck = (props) => {
  const myWriteList = React.useRef();
  const receivedAdoption = React.useRef();

  const showMyWriteList = () => {
    receivedAdoption.current.classList.remove('active');
    myWriteList.current.classList.add('active');
  };
  const showReceivedAdoption = () => {
    myWriteList.current.classList.remove('active');
    receivedAdoption.current.classList.add('active');
  };
  return (
    <Grid display={props.display} margin='22px 0 0 0' _onClick={props._onClick}>
      <CategoryBox>
        <span className='category' ref={myWriteList} onClick={showMyWriteList}>
          작성한 공고
        </span>
        <span
          className='category'
          ref={receivedAdoption}
          onClick={showReceivedAdoption}
        >
          받은 입양 신청
        </span>
      </CategoryBox>
      <MyWriteList />
      <ReceivedAdoption />
    </Grid>
  );
};

const CategoryBox = styled.div`
  display: flex;
  margin: 0 0 22px 0;

  .category {
    margin-right: 20px;
    font-size: 12px;
    color: #c5c5c5;
  }
  .active {
    color: #000;
    font-weight: 800;
    border-bottom: 2px solid #ff8888;
  }
`;

export default MypageAdoptionCheck;
