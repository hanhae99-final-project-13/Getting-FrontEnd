import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid } from '../elements/index';

const Intro = () => {
  return (
    <>
      <Grid width='375px' margin='60px auto 120px'>
        <Grid width='auto'>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
          ></Grid>
          <Grid
            display='flex'
            alignItems='center'
            height='100%'
            margin='30px 0'
            overflowX='hidden'
          >
            <StyledSlider {...settings}>
              <Grid
                width='305px'
                margin='0 auto 30px'
                border='solid 0.5px #DFDFDF'
                borderRadius='15px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
              >
                <img
                  style={{
                    width: '305px',
                    height: '100%',
                    margin: '0 auto',
                    borderRadius: '15px',
                  }}
                  src={process.env.PUBLIC_URL + '/img/GUIicon/intro1.svg'}
                />
              </Grid>
              <Grid
                width='305px'
                margin='0 auto 30px'
                borderRadius='15px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <img
                  style={{
                    width: '305px',
                    height: '100%',
                    margin: '0 auto',
                    borderRadius: '15px',
                  }}
                  src={process.env.PUBLIC_URL + '/img/GUIicon/intro2.svg'}
                />
                <Grid height='0'>
                  <img
                    src={process.env.PUBLIC_URL + '/img/GUIicon/intro2.png'}
                    style={{
                      position: 'relative',
                      top: '-444px',
                      left: '35px',
                      width: '130px',
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                width='305px'
                margin='0 auto 30px'
                borderRadius='15px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <img
                  style={{
                    width: '305px',
                    height: '100%',
                    margin: '0 auto',
                    borderRadius: '15px',
                  }}
                  src={process.env.PUBLIC_URL + '/img/GUIicon/intro3.svg'}
                />
                <Grid height='0'>
                  <img
                    src={process.env.PUBLIC_URL + '/img/GUIicon/intro3.png'}
                    style={{
                      position: 'relative',
                      top: '-436px',
                      left: '57px',
                      width: '130px',
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                width='305px'
                margin='0 auto 30px'
                borderRadius='15px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <img
                  style={{
                    width: '305px',
                    height: '100%',
                    margin: '0 auto',
                    borderRadius: '15px',
                  }}
                  src={process.env.PUBLIC_URL + '/img/GUIicon/intro4.svg'}
                />
                <Grid height='0'>
                  <img
                    src={process.env.PUBLIC_URL + '/img/GUIicon/intro4.png'}
                    style={{
                      position: 'relative',
                      top: '-440px',
                      left: '130px',
                      width: '130px',
                    }}
                  />
                </Grid>
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
