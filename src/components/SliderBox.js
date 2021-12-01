import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import { Card } from '.';

const SliderBox = ({
  list,
  height,
  dots,
  infinite,
  speed,
  autoplay,
  autoplaySpeed,
  slidesToShow,
  slidesToScroll,
  centerMode,
  centerPadding,
  arrows,
}) => {
  const settings = {
    dots: dots ? dots : true, // 슬라이드 밑에 점 보이게
    infinite: infinite ? infinite : false, // 무한으로 반복
    speed: speed ? speed : 500,
    autoplay: autoplay ? autoplay : false,
    autoplaySpeed: autoplaySpeed ? autoplaySpeed : 500, // 넘어가는 속도
    slidesToShow: slidesToShow ? slidesToShow : 1, // 1장씩 보이게
    slidesToScroll: slidesToScroll ? slidesToScroll : 1, // 1장씩 뒤로 넘어가게
    centerMode: centerMode ? centerMode : true,
    centerPadding: centerPadding ? centerPadding : '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    arrows: arrows ? arrows : true,
  };

  return (
    <React.Fragment>
      <StyledSlider {...settings} height={height}>
        {list.map((p) => {
          return (
            <div>
              <Card
                key={p.postId}
                breed={p.breed}
                sex={p.sex}
                age={p.age}
                createAt={p.createAt}
                modifiedAt={p.modifiedAt}
                ownerType={p.ownerType}
                address={p.address}
                img={p.img.split(' ##')[0]}
                postId={p.postId}
                isAdopted={p.isAdopted}
              />
            </div>
          );
        })}
      </StyledSlider>
    </React.Fragment>
  );
};

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    align-items: center;
    height: ${(props) => (props.height ? props.height : `270`)}px;
  }
  .slick-list {
    width: auto;
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

export default SliderBox;
