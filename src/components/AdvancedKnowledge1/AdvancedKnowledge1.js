import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Grid, Text } from '../../elements';
import { ErrorAlert } from '../../shared/Alerts';
import { history } from '../../redux/configureStore';
import AdvancedQuizData from '../Data/AdvancedQuizData';

const AdvancedKnowledge1 = () => {
  const token = localStorage.getItem('USER_TOKEN');
  const quizId = AdvancedQuizData[0].id;

  return (
    <>
      <Grid
        position='relative'
        maxWidth='414px'
        width='auto'
        margin='0 auto 200px'>
        <Grid
          _onClick={() => {
            history.goBack();
          }}
          position='absolute'
          top='50px'
          left='40px'
          zIndex='9999'
          width='20px'
          height='20px'
          cusor='pointer'>
          <Grid width='12px' height='7px'>
            <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
          </Grid>
        </Grid>
        <Grid
          position='absolute'
          top='50px'
          left='0'
          right='0'
          zIndex='9998'
          height='auto'>
          <Text align='center' margin='0' weight='800' size='18px'>
            심화1 지식
          </Text>
        </Grid>

        <StyledSlider {...settings}>
          <Grid>
            <img
              src={
                process.env.PUBLIC_URL +
                '/img/AdvancedKnowledge1/AdvancedKnowledge1_1.svg'
              }
              style={{
                maxWidth: '414px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={
                process.env.PUBLIC_URL +
                '/img/AdvancedKnowledge1/AdvancedKnowledge1_2.svg'
              }
              style={{
                maxWidth: '414px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={
                process.env.PUBLIC_URL +
                '/img/AdvancedKnowledge1/AdvancedKnowledge1_3.svg'
              }
              style={{
                maxWidth: '414px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={
                process.env.PUBLIC_URL +
                '/img/AdvancedKnowledge1/AdvancedKnowledge1_4.svg'
              }
              style={{
                maxWidth: '414px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={
                process.env.PUBLIC_URL +
                '/img/AdvancedKnowledge1/AdvancedKnowledge1_5.svg'
              }
              style={{
                maxWidth: '414px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={
                process.env.PUBLIC_URL +
                '/img/AdvancedKnowledge1/AdvancedKnowledge1_6.svg'
              }
              style={{
                maxWidth: '414px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={
                process.env.PUBLIC_URL +
                '/img/AdvancedKnowledge1/AdvancedKnowledge1_7.svg'
              }
              style={{
                maxWidth: '414px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={
                process.env.PUBLIC_URL +
                '/img/AdvancedKnowledge1/AdvancedKnowledge1_8.svg'
              }
              style={{
                maxWidth: '414px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={
                process.env.PUBLIC_URL +
                '/img/AdvancedKnowledge1/AdvancedKnowledge1_9.svg'
              }
              style={{
                maxWidth: '414px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={
                process.env.PUBLIC_URL +
                '/img/AdvancedKnowledge1/AdvancedKnowledge1_10.svg'
              }
              style={{
                maxWidth: '414px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
        </StyledSlider>

        <Grid
          _onClick={() => {
            if (!token) {
              ErrorAlert('로그인 후 진행해주세요!');
              return;
            }

            history.push(`/advancedquiz/${quizId}`);
          }}
          position='fixed'
          left='0'
          right='0'
          bottom='110px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          width='157px'
          height='52px'
          margin='0 auto'
          bg='#FE7968'
          borderRadius='26px'
          boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'
          cusor='pointer'>
          <Text margin='0' color='white' weight='700'>
            퀴즈로 검증하기
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

const settings = {
  dots: true, // 슬라이드 밑에 점 보이게
  infinite: false, // 무한으로 반복
  arrows: false, // 화살표 안보임
  speed: 500,
  autoplay: false,
  autoplaySpeed: 500, // 넘어가는 속도
  slidesToShow: 1, // 1장씩 보이게
  slidesToScroll: 1, // 1장씩 뒤로 넘어가게
  centerMode: true,
  centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
};
const StyledSlider = styled(Slider)`
  .slick-list {
    max-width: 414px;
    margin: 0 auto;
  }
  .slick-dots li {
    margin: 0 0rem;
  }
  .slick-dots {
    position: sticky;
    left: 0;
    right: 0;
    margin: -90px 0 0 0;
    .slick-active {
      button::before {
        color: #fe7968;
      }
    }
    button::before {
      color: #b6b1b0;
    }
  }
`;

export default AdvancedKnowledge1;
