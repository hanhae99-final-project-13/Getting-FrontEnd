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
        <Text width='300px' margin='30px 0 0 0' weight='800' padding='0 35px'>
          필수 지식 리스트
        </Text>
        {data.map((i, idx) => {
          return <EssentialComponent key={idx} {...i} number={idx} />;
        })}
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
            <Text color='white' margin='0'>
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
