import React from 'react';
import Header from '../components/Header';
import { Grid, Text, Image } from '../elements/index';
const Alarm = () => {
  const [deleteModal, setDeleteModal] = React.useState(false);
  const delModaltoggle = () => {
    setDeleteModal(!deleteModal);
  };

  return (
    <>
      <Header />
      <Grid padding='35px' boxSizing='border-box' margin='10px 0'>
        <Grid display='flex' justifyContent='center' alignItems='center'>
          <Text size='20px' weight='800'>
            알림
          </Text>
        </Grid>

        <Grid
          display='flex'
          width='auto'
          padding='0 5px'
          justifyContent='space-between'
          alignItems='center'
        >
          <Text size='12px'>알림 {'1'}개</Text>
          <button
            style={{
              all: 'unset',
              fontSize: '12px',
            }}
            onClick={() => {
              delModaltoggle();
            }}
          >
            전체삭제{' '}
          </button>
        </Grid>

        <Grid
          bg='#eee'
          height='60px'
          padding='10px 5px'
          borderRadius='15px'
          width='auto'
          display='flex'
          alignItems='center'
          margin='15px 0'
          boxShadow='4px 4px 10px 0px rgba(0, 0, 0, 0.1)'
        >
          <Image margin='0 10px' size='50' />
          <Grid display='flex' flexDirection='column' boxSizing='border-box'>
            <Grid fontSize='12px' color='darkgrey'>
              {'30분'} 전
            </Grid>
            <Grid>{'닉네임'}님, 새로운 반려친구가 뭐시깽이~</Grid>
            <Grid fontSize='12px' color='darkgrey'>
              {'랜덤메세지 뭐시깽이'}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          bg='#eee'
          height='60px'
          padding='10px 5px'
          borderRadius='15px'
          width='auto'
          display='flex'
          alignItems='center'
          margin='15px 0'
          boxShadow='4px 4px 10px 0px rgba(0, 0, 0, 0.1)'
        >
          <Image margin='0 10px' size='50' />
          <Grid display='flex' flexDirection='column' boxSizing='border-box'>
            <Grid fontSize='12px' color='darkgrey'>
              30분 전
            </Grid>
            <Grid>{'닉네임'}님, 새로운 반려친구가 뭐시깽이~</Grid>
            <Grid fontSize='12px' color='darkgrey'>
              {'랜덤메세지 뭐시깽이'}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          bg='#eee'
          height='60px'
          padding='10px 5px'
          borderRadius='15px'
          width='auto'
          display='flex'
          alignItems='center'
          margin='15px 0'
          boxShadow='4px 4px 10px 0px rgba(0, 0, 0, 0.1)'
        >
          <Image margin='0 10px' size='50' />
          <Grid display='flex' flexDirection='column' boxSizing='border-box'>
            <Grid fontSize='12px' color='darkgrey'>
              30분 전
            </Grid>
            <Grid>{'닉네임'}님, 새로운 반려친구가 뭐시깽이~</Grid>
            <Grid fontSize='12px' color='darkgrey'>
              {'랜덤메세지 뭐시깽이'}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* 전체삭제 모달 */}
      {deleteModal ? (
        <div
          style={{
            width: '100%',
            backgroundColor: '#eee',
            position: 'fixed',
            bottom: '0',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            height: '265px',
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='120px'
          >
            이미지 넣을 곳
          </Grid>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='10px'
          >
            {' '}
            모든 알림이 삭제됩니다. 그래도 괜찮으신가요?
          </Grid>
          <Grid
            display='flex'
            alignItems='center'
            justifyContent='center'
            height='150px'
          >
            <button
              style={{
                all: 'unset',
                width: '130px',
                margin: '0 5px',
                padding: '0 10px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: '#FFD3D3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
              }}
              onClick={() => {
                delModaltoggle();
              }}
            >
              다시 생각해볼게요
            </button>
            <button
              style={{
                all: 'unset',
                width: '130px',
                margin: '0 5px',
                padding: '0 10px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: '#FF7878',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
              }}
            >
              괜찮습니다
            </button>
          </Grid>
        </div>
      ) : null}
    </>
  );
};

export default Alarm;
