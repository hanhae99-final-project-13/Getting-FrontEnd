import React from 'react';

import { Grid, Text } from '../elements/index';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

const Intro = () => {
  return (
    <>
      <Grid width='375px' margin='0 auto'>
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
                bg='white'
                width='auto'
                borderRadius='15px'
                height='527px'
                margin='0 35px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <Grid width='auto' padding='20px'>
                  사랑스러운 반려친구를 이어주는 ‘올인원 입양 서비스’ <br />
                  도킹은 반려견 입양의 전반적 과정을 함께합니다. <br />
                  여러분이 반려견과 더욱 건강하고 친밀한 관계를 맺도록 <br />
                  1. 사전 교육 서비스 제공 <br />
                  2. 투명하고 원활한 입양절차 <br />
                  3 .입양 후 반려견 관리 <br />
                  까지를 함께하며 완전한 가족이 될 수 있도록 노력하겠습니다.
                </Grid>
                {/* <img
                  style={{
                    objectFit: 'scale-down',
                    width: '305px',
                    borderRadius: '15px',
                  }}
                  src='https://blog.kakaocdn.net/dn/OZ3vp/btqWW9GQeUf/AscsDSgZbtKRKXxMuw2bPk/img.jpg'
                /> */}
              </Grid>
              <Grid
                bg='white'
                width='auto'
                borderRadius='15px'
                height='527px'
                margin='0 35px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <Grid width='auto' padding='20px'>
                  사전교육 서비스제공 <br />
                  <br />
                  처음 입양할 때 어떤 지식을 알아야하는지 모르고, 찾기 귀찮은
                  여러분을 위해서 ‘입양하기 전 교육‘ 서비스를 제공합니다. 어느
                  때든지 상관없이 유기견 입양관련 지식들을  쉽게 둘러보거나
                  찾아볼 수 있습니다.
                </Grid>
              </Grid>
              <Grid
                bg='white'
                width='auto'
                borderRadius='15px'
                height='527px'
                margin='0 35px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <Grid width='auto' padding='20px'>
                  투명한 입양관리 절차 <br /> <br />
                  사용자는 꼼꼼하고 정성스러운 입양신청 폼으로 투명하고 원활한
                  입양 신청을 할 수 있습니다. 실시간으로 입양신청을 확인하고
                  승낙하는 서비스로 더욱 간편하고 빠른 도킹을 도와줍니다.
                </Grid>
              </Grid>
              <Grid
                bg='white'
                width='auto'
                borderRadius='15px'
                height='527px'
                margin='0 35px'
                boxShadow='10px 10px 20px  rgba(0, 0, 0, 0.2)'
                border='solid 0.5px #DFDFDF'
              >
                <Grid width='auto' padding='20px'>
                  입양 후 반려관리 <br />
                  <br />
                  입양 후, 마이페이지에서 반려친구 등록을 해보세요 예방접종 및
                  생일정보를 입력하면 푸쉬알람으로 중요한 일정들을 알려줍니다!
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

  .slick-dots {
    bottom: 0px;
  }
`;

export default Intro;
