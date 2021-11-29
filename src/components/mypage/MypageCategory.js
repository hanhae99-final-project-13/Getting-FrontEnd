import React from 'react';
import styled from 'styled-components';

import { Grid, Image, Text } from '../../elements';

const MypageCategory = (props) => {
  const { showWishedList, showadoptionCheck, showaDockingCheck } = props;
  const [WLFC, setWLFC] = React.useState('white');
  const [WLBG, setWLBG] = React.useState('#FFC9C9');
  const [DCFC, setDCFC] = React.useState();
  const [DCBG, setDCBG] = React.useState();
  const [ACFC, setACFC] = React.useState();
  const [ACBG, setACBG] = React.useState();

  const changeWL = () => {
    setACFC('black');
    setDCFC('black');
    setWLFC('white');
    setACBG('white');
    setDCBG('white');
    setWLBG('#FFC9C9');
  };
  const changeDC = () => {
    setWLFC('black');
    setACFC('black');
    setDCFC('white');
    setWLBG('white');
    setACBG('white');
    setDCBG('#FFC9C9');
  };
  const changeAC = () => {
    setWLFC('black');
    setDCFC('black');
    setACFC('white');
    setWLBG('white');
    setDCBG('white');
    setACBG('#FFC9C9');
  };
  return (
    <Grid
      display='flex'
      justifyContent='space-evenly'
      width='auto'
      height='auto'
    >
      <Grid
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        width='80px'
        height='60px'
        bg={WLBG}
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
        borderRadius='14px'
        _onClick={() => {
          showWishedList(changeWL);
        }}
        cusor='pointer'
      >
        <img
          width='30'
          height='27'
          src={process.env.PUBLIC_URL + '/img/GUIicon/like_dog_icon.svg'}
        />
        <Text margin='3px 0 0 0' size='12px' weight='800' color={WLFC}>
          관심친구
        </Text>
      </Grid>
      <Grid
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        width='80px'
        height='60px'
        bg={DCBG}
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
        borderRadius='14px'
        _onClick={() => showaDockingCheck(changeDC)}
        cusor='pointer'
      >
        <img
          width='26'
          height='27'
          src={process.env.PUBLIC_URL + '/img/GUIicon/letter_icon.svg'}
        />
        <Text margin='3px 0 0 0' size='12px' weight='800' color={DCFC}>
          나의 신청 확인
        </Text>
      </Grid>
      <Grid
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        width='80px'
        height='60px'
        bg={ACBG}
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
        borderRadius='14px'
        _onClick={() => showadoptionCheck(changeAC)}
        cusor='pointer'
      >
        <img
          width='23'
          height='27'
          src={process.env.PUBLIC_URL + '/img/GUIicon/document_dog_icon.svg'}
        />
        <Text margin='3px 0 0 0' size='12px' weight='800' color={ACFC}>
          입양 관리
        </Text>
      </Grid>
    </Grid>
  );
};

export default MypageCategory;
