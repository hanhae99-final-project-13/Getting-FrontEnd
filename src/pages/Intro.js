import React from 'react';
import { Grid, Text } from '../elements/index';
import Header from '../components/Header';
const Intro = () => {
  return (
    <>
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
        <Grid display='flex'>
          <Grid
            bg='blue'
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
          <Grid> ?</Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Intro;
