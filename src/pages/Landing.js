import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid } from '../elements/index';
import { history } from '../redux/configureStore';

const Landing = () => {
  return (
    <React.Fragment>
      <Grid maxWidth='414px' height='80vh' margin='0 auto'>
        <Grid>
          <StyledSlider {...settings}>
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
                src={process.env.PUBLIC_URL + '/img/GUIicon/landing2.svg'}
                style={{
                  maxWidth: '100%',
                  margin: '0 auto',
                }}
              />
              <Grid height='10px'>
                <img
                  src={process.env.PUBLIC_URL + '/img/GUIicon/landing22.png'}
                  style={{
                    position: 'relative',
                    top: '-479px',
                    left: '62px',
                    width: '150px',
                    margin: '0 auto',
                  }}
                />
              </Grid>
            </Grid>
            <Grid>
              <img
                src={process.env.PUBLIC_URL + '/img/GUIicon/landing3.svg'}
                style={{
                  maxWidth: '100%',
                  margin: '0 auto',
                }}
              />
              <Grid height='10px'>
                <img
                  src={process.env.PUBLIC_URL + '/img/GUIicon/landing33.png'}
                  style={{
                    position: 'relative',
                    top: '-457px',
                    left: '-68px',
                    width: '150px',
                    margin: '0 auto',
                  }}
                />
              </Grid>
            </Grid>
            <Grid>
              <img
                src={process.env.PUBLIC_URL + '/img/GUIicon/landing4.svg'}
                style={{
                  maxWidth: '100%',
                  margin: '0 auto',
                }}
              />
              <Grid height='10px'>
                <img
                  src={process.env.PUBLIC_URL + '/img/GUIicon/landing44.png'}
                  style={{
                    position: 'relative',
                    top: '-457px',
                    left: '70px',
                    width: '150px',
                    margin: '0 auto',
                  }}
                />
              </Grid>
            </Grid>
          </StyledSlider>
          <div
            style={{
              maxWidth: '305px',
              bottom: 0,
              left: 0,
              right: 0,
              margin: '20px auto 0',
            }}
          >
            <ButtonBox
              onClick={() => {
                history.push('/main');
              }}
            >
              <Button>먼저 둘러볼래요!</Button>
            </ButtonBox>

            <ButtonBox2
              onClick={() => {
                history.push('/login');
              }}
            >
              <Button2>로그인 할게요!</Button2>
            </ButtonBox2>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 10px auto;
  background-color: white;
  border-radius: 25px;
  border: solid 0.5px #eee;
  cursor: pointer;
`;
const ButtonBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 10px auto;
  background-color: #fe7968;
  border-radius: 25px;
  cursor: pointer;
`;
const Button = styled.button`
  all: unset;
  color: #fe7968;
  font-weight: 800;
`;
const Button2 = styled.button`
  all: unset;
  color: white;
  font-weight: 800;
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
export default Landing;
