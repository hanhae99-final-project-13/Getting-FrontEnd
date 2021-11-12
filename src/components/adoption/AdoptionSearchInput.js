import React from 'react';
import styled from 'styled-components';

import { Grid, Image, Text } from '../../elements';
import { AdoptionModal } from '.';

const AdoptionSearchInput = () => {
  const showModal = () => {
    document.querySelector('#searchModal').style.display = 'flex';
  };
  return (
    <Container>
      <Grid
        display='flex'
        justifyContent='space-between'
        width='auto'
        padding='10px 10px'
        borderRadius='7px'
        boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
        bg='#ebebeb'
        _onClick={showModal}
      >
        <Text margin='0' size='0.85rem' color='#BBBBBB'>
          조건에 맞는 반려친구들을 찾아보세요!
        </Text>
        <img
          width='12'
          src={process.env.PUBLIC_URL + '/img/icon/search_icon.svg'}
        />
      </Grid>
      <AdoptionModal />
    </Container>
  );
};

const Container = styled.div``;

export default AdoptionSearchInput;
