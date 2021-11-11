import React from 'react';

import { Grid, Text } from '../../elements';

const DefaultInfomation = (props) => {
  const [showDefaultInfo, setShowDefaultInfo] = React.useState(false);

  React.useEffect(() => {
    return () => setShowDefaultInfo(false);
  }, []);

  return (
    <React.Fragment>
      <Grid
        padding='15px 0'
        height='auto'
        borderBottom='1px solid rgba(225, 225, 225, 0.5)'
      >
        <Grid
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='auto'
          height='auto'
          _onClick={() => setShowDefaultInfo(!showDefaultInfo)}
        >
          <Text margin='0' weight='700' size='20px'>
            기본 정보
          </Text>
          <img
            width='16px'
            height='12px'
            src={process.env.PUBLIC_URL + '/img/icon/downarrow.svg'}
          />
        </Grid>
      </Grid>
      {showDefaultInfo ? (
        <Grid boxSizing='border-box'>
          <Grid>
            <Text
              margin='0'
              width='100%'
              bg='#FFFFFF'
              border='none'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
              padding='16px 0px'
              weight='700'
            >
              이름
            </Text>
            <Text
              margin='0'
              width='100%'
              bg='#FFFFFF'
              border='none'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
              padding='16px 0px'
              weight='700'
            >
              직업
            </Text>
            <Text
              margin='0'
              width='100%'
              bg='#FFFFFF'
              border='none'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
              padding='16px 0px'
              weight='700'
            >
              나이/성별
            </Text>
            <Text
              margin='0'
              width='100%'
              bg='#FFFFFF'
              border='none'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
              padding='16px 0px'
              weight='700'
            >
              거주지
            </Text>

            <Text
              margin='0'
              width='100%'
              bg='#FFFFFF'
              border='none'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
              padding='16px 0px'
              weight='700'
            >
              가족 구성원
            </Text>

            <Grid
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              padding='16px 15px 16px 0'
              boxSizing='border-box'
              height='49px'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Text margin='0' weight='700'>
                반려동물 여부
              </Text>

              <Grid
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='70px'
                height='30px'
                bg='#f66'
                borderRadius='15px'
              >
                <Text color='white' weight='700'>
                  있음
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default DefaultInfomation;
