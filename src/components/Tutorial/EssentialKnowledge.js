import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Image } from '../../elements';
import EssentialComponent from './EssentialComponent';
import EssentialKnowledgeData from '../Data/EssentialKnowledgeData';
import Footer from '../Footer';
import { history } from '../../redux/configureStore';

const EssentialKnowledge = () => {
  const data = EssentialKnowledgeData;

  return (
    <>
      <Grid width='375px' margin='0 auto 90px'>
        <Text width='300px' margin='90px 0 0 0' weight='800' padding='0 35px'>
          필수 지식 리스트
        </Text>

        <Grid is_flex width='300px' margin='37px 0 0 0' padding='0 35px'>
          <Text margin='0 4px 0 0' size='14px' line_height='22px'>
            1.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='22px' bold>
              입양이 확정되면 아이의 내장칩 삽입은 필수이며, 내장칩 보호자
              등록변경은 입양일 기준 6개월 이후에 변경해드립니다.
            </Text>
            <Grid
              margin='5px 0 0 0'
              width='249px'
              height='166px'
              bgi='https://imagescdn.gettyimagesbank.com/500/21/817/112/0/1321116353.jpg'
              bgisize='cover'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        <Grid width='300px' margin='15px 0 0 0' padding='0 35px'>
          <Grid
            _onClick={() => {
              history.push('/essentialquiz');
            }}
            margin='0 auto'
            bg='#FF6666'
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

        <Footer></Footer>
      </Grid>
    </>
  );
};

export default EssentialKnowledge;
