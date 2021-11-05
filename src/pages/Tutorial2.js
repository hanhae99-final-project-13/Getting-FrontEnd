import React from 'react';
import { Grid, Image, Text } from '../elements';
import Footer from '../components/Footer';

const Tutorial2 = (props) => {
  const { history } = props;

  return (
    <Grid width='375px' margin='177px auto 0'>
      <hr
        style={{
          position: 'relative',
          width: '230px',
          bottom: '-83px',
          border: '2px solid #CDCDCD',
          zIndex: 1,
        }}
      />
      <Grid
        zIndex='2'
        position='relative'
        width='310px'
        margin='0 auto 47px'
        display='flex'
        justifyContent='space-between'>
        <Grid display='flex' flexDirection='column' alignItems='center'>
          <Text margin='0 0 8px 0' weight='700'>
            필수지식
          </Text>
          <Image
            size='80'
            src='https://image.shutterstock.com/image-vector/happy-woman-little-doghand-drawn-600w-1942348717.jpg'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'></Image>
        </Grid>
        <Grid display='flex' flexDirection='column' alignItems='center'>
          <Text margin='0 0 8px 0' weight='700'>
            심화지식1
          </Text>
          <Image
            size='80'
            src='https://image.shutterstock.com/image-vector/happy-woman-little-doghand-drawn-600w-1942348717.jpg'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'></Image>
        </Grid>
        <Grid display='flex' flexDirection='column' alignItems='center'>
          <Text margin='0 0 8px 0' weight='700'>
            심화지식2
          </Text>
          <Image
            size='80'
            src='https://image.shutterstock.com/image-vector/happy-woman-little-doghand-drawn-600w-1942348717.jpg'
            boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'></Image>
        </Grid>
      </Grid>
      <Grid margin='0 auto 49px' display='flex' justifyContent='center'>
        <Text margin='0' weight='700' align='center' line_height='24px'>
          튜토리얼은 총 세단계로 나눠져있습니다. <br />
          아직 <span style={{ fontWeight: '800' }}>필수지식</span>을 이수하지
          않으셨네요! <br />
          <span style={{ fontWeight: '800' }}>필수지식 튜토리얼</span>을
          시작할까요?
        </Text>
      </Grid>
      <Grid
        margin=' 0 auto'
        bg='#FF6666'
        width='157px'
        height='52px'
        borderRadius='26px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'>
        <Text color='white' margin='0'>
          가보자고
        </Text>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
};

export default Tutorial2;
