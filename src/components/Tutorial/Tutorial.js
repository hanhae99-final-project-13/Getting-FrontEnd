import React from 'react';
import { Grid, Image, Text } from '../../elements';
import Footer from '../Footer';

const Tutorial = (props) => {
  const { history } = props;

  return (
    <Grid width='375px' margin='196px auto 0'>
      <Image
        margin='0 auto 20px'
        size='155'
        src='https://image.shutterstock.com/image-vector/happy-woman-little-doghand-drawn-600w-1942348717.jpg'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'></Image>

      <Grid margin='0 auto 49px' display='flex' justifyContent='center'>
        <Text margin='0' weight='700' align='center' line_height='24px'>
          안녕하세요 , 항해님
          <br /> 입양 지식은 처음이시네요! <br />
          <span style={{ fontWeight: '800' }}>튜토리얼</span>을 시작할까요?
        </Text>
      </Grid>

      <Grid
        _onClick={() => {
          history.push('/tutorial2');
        }}
        margin=' 0 auto'
        bg='#FF6666'
        width='157px'
        height='52px'
        borderRadius='26px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'>
        <Text color='white' margin='0' weight='800'>
          네, 시작하겠습니다.
        </Text>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
};

export default Tutorial;
