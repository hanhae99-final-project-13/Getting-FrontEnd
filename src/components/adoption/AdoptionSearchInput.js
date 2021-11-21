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
        padding='13px'
        border='0.5px solid #E7E5E5'
        borderRadius='7px'
        boxShadow='4px 4px 20px rgba(87, 87, 87, 0.1)'
        bg='white'
        _onClick={showModal}
      >
        <Text margin='0' size='14px' wiehgt='700' color='#cecbca'>
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
