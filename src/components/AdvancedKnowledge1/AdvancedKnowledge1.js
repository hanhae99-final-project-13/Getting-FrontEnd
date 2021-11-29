import React from 'react';
import { Grid, Text } from '../../elements';
import { ErrorAlert } from '../../shared/Alerts';
import { history } from '../../redux/configureStore';
import AdvancedQuizData from '../Data/AdvancedQuizData';

import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AdvancedKnowledge1 = () => {
  const token = localStorage.getItem('USER_TOKEN');

  const quizId = AdvancedQuizData[0].id;

  return (
    <>
      <Grid
        maxWidth='414px'
        width='auto'
        margin='0 auto 200px'
        position='relative'>
        <Grid
          cusor='pointer'
          zIndex='9999'
          _onClick={() => {
            history.goBack();
          }}
          position='absolute'
          width='20px'
          height='20px'
          top='30px'
          left='36px'>
          <Grid width='12px' height='7px'>
            <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
          </Grid>
        </Grid>
        <Grid
          position='absolute'
          top='30px'
          left='0'
          right='0'
          zIndex='9998'
          height='auto'>
          <Text size='18px' margin='0' weight='800' align='center'>
            심화1 지식
          </Text>
        </Grid>

        <StyledSlider {...settings}>
          <Grid>
            <img
              src={process.env.PUBLIC_URL + '/img/GUIicon/landing1.svg'}
              style={{
                maxWidth: '414px',
                width: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={process.env.PUBLIC_URL + '/img/GUIicon/landing1.svg'}
              style={{
                maxWidth: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={process.env.PUBLIC_URL + '/img/GUIicon/landing1.svg'}
              style={{
                maxWidth: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
          <Grid>
            <img
              src={process.env.PUBLIC_URL + '/img/GUIicon/landing1.svg'}
              style={{
                maxWidth: '100%',
                margin: '0 auto',
              }}
            />
          </Grid>
        </StyledSlider>

        <Grid
          cusor='pointer'
          position='fixed'
          left='0'
          right='0'
          bottom='110px'
          _onClick={() => {
            if (!token) {
              ErrorAlert('로그인 후 진행해주세요!');
              return;
            }

            history.push(`/advancedquiz/${quizId}`);
          }}
          margin='0 auto'
          bg='#FE7968'
          width='157px'
          height='52px'
          borderRadius='26px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'>
          <Text color='white' margin='0' weight='700'>
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
