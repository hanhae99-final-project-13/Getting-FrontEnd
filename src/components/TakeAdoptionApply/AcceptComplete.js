import React from 'react';
import styled from 'styled-components';

import { Grid, Image, Text } from '../../elements';
import { history } from '../../redux/configureStore';

const AcceptComplete = () => {
  return (
    <React.Fragment>
      <Grid
        position='fixed'
        top='0'
        left='0'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        height='calc(100% - 80px)'
        bg='white'
      >
        <Image size='179' margin='0' />
        <Text margin='39px 0 7px 0' weight='700' size='14px'>
          님께
        </Text>
        <Text margin='0 0 28px 0' weight='700' size='14px'>
          입양을 승인했습니다!
        </Text>
        <Text margin='0' weight='700' size='12px'>
          님이 기재해놓은 연락처로
        </Text>
        <Text margin='7px 0 43px 0' weight='700' size='12px'>
          꼭 <Red>개별연락</Red>을 취해주시길 바랍니다
        </Text>

        <Grid
          display='flex'
          alignItems='center'
          justifyContent='center'
          width='130px'
          height='40px'
          bg='#fe7968'
          borderRadius='34px'
          _onClick={() => history.push('/mypage')}
        >
          <Text margin='0' color='white' size='14px' weight='800'>
            알겠습니다
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Red = styled.span`
  color: red;
  font-size: 12px;
`;

export default AcceptComplete;
