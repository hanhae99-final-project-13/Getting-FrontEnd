import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import { Grid, Image, Text } from '../../elements';
import { Calendar } from '.';

const AdoptionModal = (props) => {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();

  const hideModal = (e) => {
    document.querySelector('#searchModal').style.display = 'none';
  };

  return (
    <Grid
      position='fixed'
      top='0'
      left='0'
      display='none'
      justifyContent='center'
      alignItems='center'
      id='searchModal'
      overflow='hidden'
      zIndex='100'
    >
      <Grid
        position='absolute'
        top='0'
        left='0'
        width='100%'
        height='100%'
        bg='rgba(0, 0, 0, 0.7)'
        _onClick={hideModal}
      ></Grid>
      <ModalBox>
        <p>검색 조건</p>
        <hr />
        <Grid>
          <span>기간</span>         
          <Calendar/>          
          <span>장소</span>
          <Grid width='auto' height='auto'></Grid>
          <span>지역</span>
          <Grid width='auto' height='auto'></Grid>
        </Grid>
        <button id='submit'>찾아보기</button>
      </ModalBox>
    </Grid>
  );
};

const ModalBox = styled.div`
  position: relative;
  width: 169px;
  height: 201px;
  padding: 12px;
  border-radius: 20px;
  background-color: white;
  z-index: 100;

  p {
    height: auto;
    margin: 0 0 12px 0;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
  }
  hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.4);
  }
  span {
    height: auto;
    font-size: 7px;
  }
  button#submit {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 42px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    color: white;
    border: none;
    background-color: #504b4b;
    font-size: 12px;
  }
`;

export default AdoptionModal;
