import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Text, Image } from '../../elements';

const AdoptionKnowledge = () => {
  const data = {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
  };
  const [answer, setAnswer1] = useState(data);

  const handleAnswerChange = (e) => {
    const newAnswer = { ...answer, [e.target.name]: e.target.value };
    setAnswer1(newAnswer);
  };

  console.log(answer);

  return (
    <Grid
      margin='100px auto'
      width='375px'
      border='1px solid black'
      padding='0 30px'
      boxSizing='border-box'>
      <Grid is_flex height='auto' justifyContent='center' alignItems='center'>
        <Image
          margin='0'
          size='60'
          src='https://image.shutterstock.com/image-vector/happy-woman-little-doghand-drawn-600w-1942348717.jpg'
          boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'></Image>

        <Grid
          margin='0 0 0 10px'
          bg='yellow'
          boxSizing='border-box'
          borderRadius='14px'
          boxShadow=' 10px 10px 20px rgba(0, 0, 0, 0.1);'
          display='flex'
          justifyContent='center'
          alignItems='center'>
          <Text
            width='220px'
            padding='15px'
            margin='0'
            weight='800'
            size='15px'
            align='center'
            line_height='22px'>
            <span
              style={{
                fontSize: '15px',
                color: '#FF0000',
              }}>
              동의사항
            </span>
            에 체크해주세요!
          </Text>
        </Grid>
      </Grid>

      <Grid is_flex margin='20px 0 0 0'>
        <Text
          margin='0'
          size='14px'
          line_height='22px'
          width='30px'
          align='center'>
          1.
        </Text>
        <Grid>
          <Text margin='0' size='14px' line_height='22px' width='275px'>
            입양이 확정되면 아이의
            <span style={{ fontWeight: '800', fontSize: '14px' }}>
              내장칩삽인은 필수
            </span>
            <br />
            이며,
            <span style={{ fontWeight: '800', fontSize: '14px' }}>
              내장침 보호자 등록변경은
            </span>
            <br />
            입양일 기준
            <span style={{ fontWeight: '800', fontSize: '14px' }}>
              6개월 이후에 변경
            </span>
            해드립니다.
          </Text>
          <Grid is_flex margin='10px 0 0 0'>
            <Grid>
              <RadioBtn
                type='radio'
                name='answer1'
                value='true'
                id='yes1'
                checked={answer.answer1 === 'true'}
                onChange={handleAnswerChange}
              />
              <label htmlFor='yes1'>네</label>
            </Grid>
            <Grid margin='0 60px 0 0'>
              <RadioBtn
                type='radio'
                name='answer1'
                value='false'
                id='no1'
                checked={answer.answer1 === 'false'}
                onChange={handleAnswerChange}
              />
              <label htmlFor='no1'>아니오</label>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid is_flex margin='20px 0 0 0'>
        <Text
          margin='0'
          size='14px'
          line_height='22px'
          width='30px'
          align='center'>
          2.
        </Text>
        <Grid>
          <Text margin='0' size='14px' line_height='22px' width='275px'>
            열악한 환경으로 인해 질병을 가지고 있을 수 있으므로
            <span style={{ fontWeight: '800', fontSize: '14px' }}>
              입양 후, 병원 진료부터 받아야 합니다.
            </span>
            <br />
            그에따른&nbsp;
            <span style={{ fontWeight: '800', fontSize: '14px' }}>
              아이의 건강 접종을 잘 따를 것
            </span>
            <br />을 동의하시나요?
          </Text>
          <Grid is_flex margin='10px 0 0 0'>
            <Grid>
              <RadioBtn
                type='radio'
                name='answer2'
                value='true'
                id='yes2'
                checked={answer.answer2 === 'true'}
                onChange={handleAnswerChange}
              />
              <label htmlFor='yes2'>네</label>
            </Grid>
            <Grid margin='0 60px 0 0'>
              <RadioBtn
                type='radio'
                name='answer2'
                value='false'
                id='no2'
                checked={answer.answer2 === 'false'}
                onChange={handleAnswerChange}
              />
              <label htmlFor='no2'>아니오</label>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const RadioBtn = styled.input``;

export default AdoptionKnowledge;
