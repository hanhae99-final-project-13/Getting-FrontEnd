import React from 'react';

import { Grid, Text } from '../elements/index';
import Header from '../components/Header';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

const Intro = () => {
  return (
    <>
      <Grid width='375px' margin='0 auto'>
        <Header></Header>
        <Grid margin='10px 0 0 0 ' padding='35px 0' width='auto'>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='65px'
          >
            <Text size='30px' weight='800'>
              도킹
            </Text>
          </Grid>

          {/* 이미지 */}
          <Grid display='flex' height='560px' overflowX='hidden'>
            <StyledSlider {...settings}>
              <Grid
                bg='blue'
                width='auto'
                borderRadius='15px'
                height='527px'
                margin='0 35px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <img
                  style={{
                    objectFit: 'scale-down',
                    width: '305px',
                    borderRadius: '15px',
                  }}
                  src='https://blog.kakaocdn.net/dn/OZ3vp/btqWW9GQeUf/AscsDSgZbtKRKXxMuw2bPk/img.jpg'
                />
              </Grid>
              <Grid
                bg='blue'
                width='auto'
                borderRadius='15px'
                height='527px'
                margin='0 35px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <img
                  style={{
                    objectFit: 'scale-down',
                    width: '305px',
                    borderRadius: '15px',
                  }}
                  src='https://t1.daumcdn.net/cfile/tistory/992D90485D93EEE625'
                />
              </Grid>
              <Grid
                bg='blue'
                width='auto'
                borderRadius='15px'
                height='527px'
                margin='0 35px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <img
                  style={{
                    objectFit: 'scale-down',
                    width: '305px',
                    borderRadius: '15px',
                  }}
                  src='https://visla.kr/wp/wp-content/uploads/2019/09/20190918_interveiw_09_72.jpg'
                />
              </Grid>
              <Grid
                bg='blue'
                width='auto'
                borderRadius='15px'
                height='527px'
                margin='0 35px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <img
                  style={{
                    objectFit: 'scale-down',
                    width: '305px',
                    borderRadius: '15px',
                  }}
                  src='https://img.etoday.co.kr/pto_db/2021/05/600/20210502144631_1615216_1200_1800.jpg'
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

  .slick-dots {
    bottom: 0px;
  }
`;

export default Intro;
