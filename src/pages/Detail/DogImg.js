import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Grid } from '../../elements/index';

const DogImg = ({ post }) => {
  return (
    <Grid overflowX='hidden'>
      <StyledSlider {...settings}>
        {post.post.img === null
          ? null
          : post.post.img.map((m, i) => {
              return (
                <>
                  <img
                    key={i}
                    style={{
                      width: '305px',
                      height: '305px',
                      margin: '0 10px 15px 0',
                      borderRadius: '10px',
                      objectFit: 'scale-down',
                    }}
                    src={m}
                  />
                </>
              );
            })}
      </StyledSlider>
    </Grid>
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
    width: 375px;
    margin: 0 auto;
  }
  .slick-dots li {
    margin: 0 0rem;
  }
  .slick-dots {
    width: 305px;
    bottom: 20px;
    .slick-active {
      button::before {
        color: #ffbe5b;
      }
    }
    button::before {
      color: #b6b1b0;
    }
  }
`;
export default DogImg;
