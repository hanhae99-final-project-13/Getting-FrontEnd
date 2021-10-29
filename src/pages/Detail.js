import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Text } from '../elements/index';
const Detail = () => {
  return (
    <React.Fragment>
      <Grid width='auto' padding='0px 46px'>
        <p>저와 친구하실래요?😁</p>
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '80px',
              height: '30px',
              borderRadius: '15px',
              position: 'absolute',
              backgroundColor: 'white',
              top: '40px',
              left: '50px',
            }}
          >
            임시보호중
          </div>
          <img
            style={{
              borderRadius: '10px',
              width: '283px',
              height: '145px',
              objectFit: 'cover',
            }}
            src='http://rgo4.com/files/attach/images/2681740/682/850/029/5993dcd644b29c202130d9204e876693.jpeg'
          />
        </div>
      </Grid>
      <Grid
        width='280px'
        margin='20px auto'
        padding='15px 20px'
        boxShadow='1px 1px 2px 1px rgba(0, 0, 0, 0.06)'
        borderRadius='10px'
      >
        <Grid display='flex' margin='20px 0 0 0'>
          <Grid width='50%'>
            견종
            <span style={{ margin: '0 5px 0 10px' }}>닥스훈트</span>
          </Grid>

          <Grid width='50%'>
            성별
            <span style={{ margin: '0 5px 0 10px' }}>여아</span>
          </Grid>
        </Grid>

        <Grid display='flex' margin='20px 0 0 0'>
          <Grid width='50%'>
            체중
            <span style={{ margin: '0 5px 0 10px' }}>5 kg</span>
          </Grid>

          <Grid width='50%'>
            나이
            <span style={{ margin: '0 5px 0 10px' }}>2020 년생</span>
          </Grid>
        </Grid>

        <Grid display='flex' margin='20px 0 0 0'>
          <Grid>
            발견 장소
            <span style={{ margin: '0 5px 0 10px' }}>경기도 안양</span>
          </Grid>
        </Grid>

        <Grid display='flex' margin='20px 0 0 0'>
          <Grid>
            보호 장소
            <span style={{ margin: '0 5px 0 10px' }}>개인</span>
          </Grid>
        </Grid>

        <Grid display='flex' margin='20px 0 0 0'>
          <Grid>
            주소
            <span style={{ margin: '0 5px 0 10px' }}>
              갱기도 수원시 뭐시깽이~
            </span>
          </Grid>
        </Grid>

        <Grid display='flex' margin='20px 0 0 0'>
          <Grid>
            SNS
            <span style={{ margin: '0 5px 0 10px' }}>
              트윗 페북 인스타 마크
            </span>
          </Grid>
        </Grid>
        <Grid display='flex' justifyContent='center' alignItems='center'>
          <Grid
            position='fixed'
            margin='auto'
            bg='#FF6666'
            width='144px'
            height='50px'
            borderRadius='25px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            top='512px'
          >
            <Text color='white'>입양 신청하기</Text>
          </Grid>
        </Grid>
        <Grid display='flex' margin='20px 0 0 0'>
          <Grid>
            특이사항
            <span style={{ margin: '0 5px 0 10px' }}>
              겁이 엄청 많은 친구라 아직도 집에서 꼬리 내리고 다니는데 요즘엔
              무서워하면서 옆에 붙어다니고 신나면 빙글빙글 돌기도하고 그럽니다
              부르면 귀찮다는듯 터벅터벅 걸어와서 쳐다봐서 너무 귀여워요!
            </span>
          </Grid>
        </Grid>
      </Grid>

      <Grid width='auto' padding='0px 46px'>
        <p>댓글😁</p>

        <Grid
          bg='rgba(235, 235, 235, 0.5)'
          width='auto'
          height='40px'
          borderRadius='10px'
          margin=' auto'
          display='flex'
          alignItems='center'
          justifyContent='end'
        >
          <button
            style={{
              marginRight: '10px',
              padding: '4px 10px',
              border: 'none',
              color: 'white',
              backgroundColor: '#3FCC66',
              borderRadius: '10px',
            }}
          >
            입력
          </button>
        </Grid>

        <Grid
          margin='10px 0'
          width='auto'
          padding='4px'
          border='solid 0.5px'
          borderRadius='10px'
        >
          <div
            style={{
              width: '100%',
              height: '40px',
              display: 'flex',
            }}
          >
            <Image />
            <Grid margin='0 0 0 5px'>
              <div style={{ margin: '4px 0', fontSize: '12px' }}>닉네임 </div>
              <div>댓글내용</div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Detail;
