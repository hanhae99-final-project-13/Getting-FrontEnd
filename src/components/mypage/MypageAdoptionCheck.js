import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import { MyWriteList, ReceivedAdoption } from '.';

const MypageAdoptionCheck = (props) => {
  const myWriteList = React.useRef();

  const [myWriteListDisplay, setMyWriteListDisplay] = React.useState();
  const [rceivedAdoptionDisplay, setRceivedAdoptionDisplay] =
    React.useState('none');
  const receivedAdoption = React.useRef();

  const showMyWriteList = () => {
    receivedAdoption.current.classList.remove('active');
    myWriteList.current.classList.add('active');
    setRceivedAdoptionDisplay('none');
    setMyWriteListDisplay('block');
  };
  const showReceivedAdoption = () => {
    myWriteList.current.classList.remove('active');
    receivedAdoption.current.classList.add('active');
    setMyWriteListDisplay('none');
    setRceivedAdoptionDisplay('block');
  };

  return (
    <Grid display={props.display} margin='22px 0 0 0'>
      <CategoryBox>
        <span
          className='category active'
          ref={myWriteList}
          onClick={showMyWriteList}
        >
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
      <MyWriteList display={myWriteListDisplay} />
      <ReceivedAdoption display={rceivedAdoptionDisplay} />
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
