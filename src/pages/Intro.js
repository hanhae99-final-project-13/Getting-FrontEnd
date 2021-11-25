import React from 'react';

import { Grid, Text } from '../elements/index';
import styled from 'styled-components';
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Intro = () => {
  return (
    <>
      <Grid width='375px' margin='60px auto'>
        <Grid width='auto'>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
          ></Grid>
          <Grid
            display='flex'
            height='100%'
            margin='30px 0'
            alignItems='center'
            overflowX='hidden'
          >
            <StyledSlider {...settings}>
              <Grid
                display='flex'
                width='305px'
                margin='0 auto 30px'
                justifyContent='center'
                borderRadius='15px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <img
                  style={{
                    width: '305px',
                    height: '100%',
                    borderRadius: '15px',
                  }}
                  src={process.env.PUBLIC_URL + '/img/GUIicon/intro1.svg'}
                />
              </Grid>
              <Grid
                display='flex'
                width='305px'
                margin='0 auto'
                justifyContent='center'
                borderRadius='15px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <img
                  style={{
                    width: '305px',
                    height: '100%',
                    borderRadius: '15px',
                  }}
                  src={process.env.PUBLIC_URL + '/img/GUIicon/intro2.svg'}
                />
              </Grid>
              <Grid
                display='flex'
                width='305px'
                margin='0 auto'
                justifyContent='center'
                borderRadius='15px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <img
                  style={{
                    width: '305px',
                    height: '100%',
                    borderRadius: '15px',
                  }}
                  src={process.env.PUBLIC_URL + '/img/GUIicon/intro3.svg'}
                />
              </Grid>
              <Grid
                display='flex'
                width='305px'
                margin='0 auto'
                justifyContent='center'
                borderRadius='15px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <img
                  style={{
                    width: '305px',
                    height: '100%',
                    borderRadius: '15px',
                  }}
                  src={process.env.PUBLIC_URL + '/img/GUIicon/intro4.svg'}
                />
              </Grid>
            </StyledSlider>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const settings = {
  dots: true, // 슬라이드 밑에 점 보이게
  infinite: false, // 무한으로 반복
  speed: 500,
  autoplay: false,
  autoplaySpeed: 500, // 넘어가는 속도
  slidesToShow: 1, // 4장씩 보이게
  slidesToScroll: 1, // 1장씩 뒤로 넘어가게
  centerMode: true,
  centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
};

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 375px;
    margin: 0 auto;
  }
  .slick-dots li {
    margin: 0 0rem;
  }
  .slick-dots {
    bottom: 0;
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

export default Intro;
