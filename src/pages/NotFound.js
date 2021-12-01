import React from 'react';

import { Grid, Text } from '../elements';
import { history } from '../redux/configureStore';

const NotFound = () => {
  return (
    <React.Fragment>
      <Grid
        display='flex'
        height='100vh'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Text margin='0 0 24px 0' color='#6B6462' size='20px' weight='700'>
          요청하신 페이지를 찾을 수 없습니다
        </Text>
        <img
          width='200'
          src={process.env.PUBLIC_URL + '/img/GUIicon/warning_icon.svg'}
        />
        <Grid
          margin='24px 0 0 0'
          padding='12px 27px'
          width='auto'
          height='auto'
          borderRadius='34px'
          bg='#FE7968'
          _onClick={() => history.goBack()}
        >
          <Text margin='0' color='white' size='16px' weight='700'>
            뒤로 돌아가기
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default NotFound;
