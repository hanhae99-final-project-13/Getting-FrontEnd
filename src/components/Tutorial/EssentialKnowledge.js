import React from 'react';

import { Grid, Text } from '../../elements';
import { ErrorAlert } from '../../shared/Alerts';

import { history } from '../../redux/configureStore';

const EssentialKnowledge = () => {
  const token = localStorage.getItem('USER_TOKEN');

  return (
    <>
      <Grid
        maxWidth='414px'
        width='auto'
        margin='0 auto'
        position='relative'
        padding='0 35px'>
        <Grid
          cusor='pointer'
          zIndex='9999'
          _onClick={() => {
            history.goBack();
          }}
          position='absolute'
          width='20px'
          height='20px'
          top='-51px'
          left='36px'>
          <Grid width='12px' height='7px'>
            <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
          </Grid>
        </Grid>

        <Grid position='absolute' top='-52px' left='0' right='0'>
          <Text size='18px' margin='0' weight='800' align='center'>
            필수지식 리스트
          </Text>
        </Grid>

        {/*지식 1번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='117px auto 0'>
          <Text margin='0 4px 0 0' size='14px' line_height='22px' weight='700'>
            1.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='22px' bold>
              입양이 확정되면 아이의 내장칩 삽입은 필수이며, 내장칩 보호자
              등록변경은 입양일 기준 6개월 이후에 변경해드립니다.
            </Text>
            <Grid
              borderRadius='15px'
              margin='16px auto 0'
              maxWidth='261px'
              width='auto'
              height='166px'
              bgi='https://imagescdn.gettyimagesbank.com/500/21/817/112/0/1321116353.jpg'
              bgisize='cover'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        <Grid
          position='fixed'
          top='630px'
          left='0'
          right='0'
          bottom='144px'
          _onClick={() => {
            if (!token) {
              ErrorAlert('로그인 후 진행해주세요!');
              return;
            }

            history.push('/essentialquiz');
          }}
          margin='0 auto'
          bg='#FE7968'
          width='157px'
          height='52px'
          borderRadius='26px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'>
          <Text color='white' margin='0' weight='700'>
            퀴즈로 검증하기
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

export default EssentialKnowledge;
