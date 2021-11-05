import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';

const AdoptionReason = () => {
  return (
    <Grid
      padding='15px 0'
      height='auto'
      borderBottom='1px solid rgba(225, 225, 225, 0.5)'
    >
      <Grid
        width='auto'
        height='auto'
        bg='95% 50% / contain no-repeat url(https://img.favpng.com/22/6/16/menu-arrow-icon-png-favpng-2GXTGtbaeyDpB41Kwnus43bEC_t.jpg) '
      >
        <Text margin='0' weight='700' size='20px'>
          입양 사유
        </Text>
      </Grid>
    </Grid>
  );
};

export default AdoptionReason;
