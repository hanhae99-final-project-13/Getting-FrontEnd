import React, { useState } from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';
import Slider from '../../components/Slider';

const DefaultInfomation = (props) => {
  const [currentPet, setCurrentPet] = React.useState('있음');
  const [showDefaultInfo, setShowDefaultInfo] = React.useState(false);

  // 반려동물 체크함수
  const [click, setClick] = useState(true);
  const handleCurrentPet = () => {
    setClick(!click);
    if (click === true) {
      setCurrentPet('없음');
    } else setCurrentPet('있음');
  };

  const showDefaultInfoToggle = () => {
    setShowDefaultInfo(!showDefaultInfo);
  };

  React.useEffect(() => {
    return () => setShowDefaultInfo(false);
  }, []);

  return (
    <React.Fragment>
      <Grid
        padding='15px 0'
        height='auto'
        borderBottom='1px solid rgba(225, 225, 225, 0.5)'
      >
        <Grid
          width='auto'
          height='auto'
          bg='95% 50% / contain no-repeat url(https://img.favpng.com/22/6/16/menu-arrow-icon-png-favpng-2GXTGtbaeyDpB41Kwnus43bEC_t.jpg) '
          _onClick={showDefaultInfoToggle}
        >
          <Text margin='0' weight='700' size='20px'>
            기본 정보
          </Text>
        </Grid>
      </Grid>
      {showDefaultInfo ? (
        <Grid boxSizing='border-box'>
          <Grid>
            <Text
              margin='0'
              width='100%'
              bg='#FFFFFF'
              border='none'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
              padding='16px 0px'
              color='#DFDFDF'
            >
              이름
            </Text>
            <Text
              margin='0'
              width='100%'
              bg='#FFFFFF'
              border='none'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
              padding='16px 0px'
              color='#DFDFDF'
            >
              직업
            </Text>
            <Text
              margin='0'
              width='100%'
              bg='#FFFFFF'
              border='none'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
              padding='16px 0px'
              color='#DFDFDF'
            >
              나이/성별
            </Text>
            <Text
              margin='0'
              width='100%'
              bg='#FFFFFF'
              border='none'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
              padding='16px 0px'
              color='#DFDFDF'
            >
              거주지
            </Text>

            <Text
              margin='0'
              width='100%'
              bg='#FFFFFF'
              border='none'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
              padding='16px 0px'
              color='#DFDFDF'
            >
              가족 구성원
            </Text>

            <Grid
              display='flex'
              justifyContent='space-between'
              padding='16px 15px 16px 0'
              boxSizing='border-box'
              height='49px'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Text margin='0' color='#DFDFDF'>
                반려동물 여부
              </Text>

              <Text bold margin='0'>
                있음
              </Text>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default DefaultInfomation;
