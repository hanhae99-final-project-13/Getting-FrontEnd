import React from 'react';
import { history } from '../redux/configureStore';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Grid } from '../elements/index';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Landing = () => {
  return (
    <React.Fragment>
      <Grid width='375px' margin='0 auto' height='80vh'>
        <Grid>
          <StyledSlider {...settings}>
            <img
              src={process.env.PUBLIC_URL + '/img/GUIicon/landing1.svg'}
              style={{
                width: '375px',
              }}
            />
            <img
              src={process.env.PUBLIC_URL + '/img/GUIicon/landing2.svg'}
              style={{
                width: '375px',
              }}
            />
            <img
              src={process.env.PUBLIC_URL + '/img/GUIicon/landing3.svg'}
              style={{
                width: '375px',
              }}
            />
            <img
              src={process.env.PUBLIC_URL + '/img/GUIicon/landing4.svg'}
              style={{
                width: '375px',
              }}
            />
          </StyledSlider>
        </Grid>

        <ButtonBox
          onClick={() => {
            history.push('/signup');
          }}
        >
          <Button>시작하기</Button>
        </ButtonBox>

        <ButtonBox2
          onClick={() => {
            history.push('/login');
          }}
        >
          <Button2>이미 계정이 있어요</Button2>
        </ButtonBox2>
      </Grid>
    </React.Fragment>
  );
};

const ButtonBox = styled.div`
  width: 305px;
  height: 50px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  border-radius: 25px;
  border: solid 0.5px #eee;
`;
const ButtonBox2 = styled.div`
  width: 305px;
  height: 50px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fe7968;
  cursor: pointer;
  border-radius: 25px;
`;
const Button = styled.button`
  all: unset;
  color: #fe7968;
`;
const Button2 = styled.button`
  all: unset;
  color: white;
`;
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
    width: 375px;
    margin: 0 auto;
  }
  .slick-dots li {
    margin: 0 0rem;
  }
  .slick-dots {
    bottom: 195px;
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
export default Landing;
