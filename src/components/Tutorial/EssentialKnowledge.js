import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Image } from '../../elements';
import EssentialComponent from './EssentialComponent';
import EssentialKnowledgeData from '../Data/EssentialKnowledgeData';
import { history } from '../../redux/configureStore';

const EssentialKnowledge = () => {
  const data = EssentialKnowledgeData;

  return (
    <>
      <Grid width='375px' margin='0 auto '>
        <Grid
          zIndex='9999'
          _onClick={() => {
            history.goBack();
          }}
          position='sticky'
          width='20px' //width, height를 안주면 sticky left가 안먹음..
          height='20px'
          top='65px'
          left='36px'>
          <Grid width='12px' height='7px'>
            <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
          </Grid>
        </Grid>

        <Grid position='fixed' top='66px' left='0' right='0'>
          <Text size='18px' margin='0' weight='800' align='center'>
            필수지식 리스트
          </Text>
        </Grid>

        {/*지식 1번 */}

        <Grid is_flex width='300px' margin='111px auto 0'>
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
              margin='16px 0 0 0'
              width='249px'
              height='166px'
              bgi='https://imagescdn.gettyimagesbank.com/500/21/817/112/0/1321116353.jpg'
              bgisize='cover'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        <Grid
          position='fixed'
          top='650px'
          left='0'
          right='0'
          _onClick={() => {
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
