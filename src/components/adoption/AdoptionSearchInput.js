import React from 'react';
import styled from 'styled-components';

import { Grid, Image, Text } from '../../elements';
import { AdoptionModal } from '.';

const AdoptionSearchInput = () => {
  const showModal = () => {};
  return (
    <Container>
      <Grid
        display='flex'
        justifyContent='space-between'
        width='auto'
        padding='12px'
        borderRadius='6px'
        boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
        bg='#ebebeb'
      >
        <Text margin='0' size='0.85rem' color='#BBBBBB'>
          조건에 맞는 반려친구들을 찾아보세요!
        </Text>
        <Image size='12' />
      </Grid>
      <AdoptionModal />
    </Container>
  );
};

const Container = styled.div``;

export default AdoptionSearchInput;
