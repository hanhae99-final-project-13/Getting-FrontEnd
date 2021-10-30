import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Input } from '../elements';
import Slider from './Slider';

const Modal = (props) => {
  const { open, close, _onClick } = props;
  return (
    <React.Fragment>
      <Grid
        backdropFilter='blur(20px)'
        border='none'
        boxShadow='5px 5px 10px 0px #00000040'
        padding='20px'
        width='auto'
        margin='142px auto 0px'
        borderRadius='30px 30px 0 0'>
        <Grid margin='54px 0 0 0'>
          <Text margin='0' size='20px' weight='700'>
            기본정보
          </Text>
        </Grid>

        <Grid margin='15px 0 0 0'>
          <Input
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_top='1px solid rgba(225, 225, 225, 0.5) '
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px'
            box-sizing
            placeholder='이름을 기입해주세요.'
            placeholder_color='#DFDFDF'
            name='username'
            // value={username}
            // _onChange={handleForm}
          />
        </Grid>

        <Grid>
          <Input
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px'
            box-sizing
            placeholder='직업을 기입해주세요'
            placeholder_color='#DFDFDF'
            type='password'
            name='password'
            // value={password}
            // _onChange={handleForm}
          />
        </Grid>

        <Grid>
          <Input
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px'
            box-sizing
            placeholder='연락처를 -를 빼고 입력해주세요'
            placeholder_color='#DFDFDF'
            type='password'
            name='password'
            // value={password}
            // _onChange={handleForm}
          />
        </Grid>

        <Grid
          display='flex'
          bg='#FFFFFF'
          width='100%'
          border='none'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          padding='16px'
          boxSizing='border-box'>
          <Text margin='0' bold>
            2001
          </Text>
          <Text margin='0' bold>
            년생
          </Text>
        </Grid>

        <Grid>
          <Input
            bg='#FFFFFF'
            width='100%'
            border='none'
            border_bottom='1px solid rgba(225, 225, 225, 0.5) '
            padding='16px'
            box-sizing
            placeholder='거주지를 입력해 주세요'
            placeholder_color='#DFDFDF'
            type='password'
            name='password'
            // value={password}
            // _onChange={handleForm}
          />
        </Grid>

        <Grid
          is_flex
          bg='#FFFFFF'
          width='100%'
          border='none'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          padding='16px'
          boxSizing='border-box'>
          <Grid>
            <Text margin='0' bold>
              반려동물여부
            </Text>
          </Grid>
          <Grid display='flex' justifyContent='space-around'>
            <Text margin='0' bold>
              있음
            </Text>
            <Slider />
            <Text margin='0' bold>
              없음
            </Text>
          </Grid>
        </Grid>

        <Grid
          is_flex
          bg='#FFFFFF'
          width='100%'
          border='none'
          borderBottom='1px solid rgba(225, 225, 225, 0.5) '
          padding='16px'
          boxSizing='border-box'>
          <Grid>
            <Text margin='0' bold>
              가족관계
            </Text>
          </Grid>
          <Grid display='flex' justifyContent='space-around'>
            <Text margin='0' bold>
              혼자
            </Text>
            <Text margin='0' bold>
              ㅇㅇ
            </Text>
            <Text margin='0' bold>
              가족
            </Text>
          </Grid>
        </Grid>

        <Grid margin='54px 0 18px 0'>
          <Text margin='0' size='20px' weight='700'>
            입양사유
          </Text>
        </Grid>

        <Grid>
          <Textarea
            // value={password}
            // _onChange={handleForm}

            cols='35'
            rows='15'
            placeholder='500자이상 적어주세요'></Textarea>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Textarea = styled.textarea`
  border-radius: 15px;
  background-color: #f7f7f7;
  width: auto;
  border: none;
  padding: 19px;
  box-sizing: border-box;
  ::placeholder {
    color: '#DFDFDF';
  }
`;

export default Modal;
