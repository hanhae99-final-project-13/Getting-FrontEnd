import React, { useState } from 'react';
import { Grid, Text } from '../../elements';
import Slider from '../../components/Slider';
import styled from 'styled-components';

const AdoptionReason = (props) => {
  const [allergy, setAllergy] = React.useState('있음');
  const [timeTogether, setTimeTogether] = React.useState('');
  const [anxiety, setAnxiety] = React.useState('');
  const [bark, setBark] = React.useState('');
  const [showSurvey, setShowSurvey] = React.useState(false);

  // 알러지 체크함수
  const [check, setCheck] = useState(true);
  const handleallergy = () => {
    setCheck(!check);
    if (check === true) {
      setAllergy('없음');
    } else setAllergy('있음');
  };

  const showSurveyToggle = () => {
    setShowSurvey(!showSurvey);
  };

  React.useEffect(() => {
    return () => setShowSurvey(false);
  }, []);

  return (
    <React.Fragment>
      <Grid
        padding='15px 0'
        height='auto'
        borderBottom='1px solid rgba(225, 225, 225, 0.5)'
      >
        <Grid
          width='auto'
          height='auto'
          bg='95% 50% / contain no-repeat url(https://img.favpng.com/22/6/16/menu-arrow-icon-png-favpng-2GXTGtbaeyDpB41Kwnus43bEC_t.jpg) '
          _onClick={showSurveyToggle}
        >
          <Text margin='0' weight='700' size='20px'>
            입양 설문
          </Text>
        </Grid>
      </Grid>
      {showSurvey ? (
        <Grid boxSizing='border-box'>
          <Grid>
            <Grid
              padding='13px 0px'
              boxSizing='border-box'
              height='118px'
              borderTop='1px solid rgba(225, 225, 225, 0.5) '
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid height='auto'>
                <Text margin='0' bold line_height='24px'>
                  가족 구성원 중
                  <span style={{ fontWeight: '800' }}> 동물 알레르기 증상</span>
                  이
                  <br />
                  있는 분이 있습니까?
                </Text>
              </Grid>
              <Grid
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                margin='12px 0 0 0'
                width='50%'
                height='auto'
              >
                <Text bold margin='0 7px 0 0'>
                  있음
                </Text>
                <Text bold margin='0 7px 0 0'>
                  없음
                </Text>
              </Grid>
            </Grid>

            <Grid
              boxSizing='border-box'
              height='352px'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid margin='11px 0 26px 0 ' height='auto'>
                <Text margin='0' bold line_height='24px'>
                  만약 <span style={{ fontWeight: '800' }}> 과거</span>에
                  반려동물을 키워본 적이 있다면 <br />
                  현재는 어떻게 되었나요?
                </Text>
              </Grid>

              <Textarea>입양사유</Textarea>
            </Grid>

            <Grid
              boxSizing='border-box'
              height='375px'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid margin='11px 0 26px 0 ' height='auto'>
                <Text margin='0' bold line_height='24px'>
                  반려동물과
                  <span style={{ fontWeight: '800' }}>
                    함께 할 수 있는 시간
                  </span>
                  을 알려주세요. <br />
                  (반려동물이 집에 혼자 있는 시간, 반려동물과 함께 할 수 있는
                  시간)
                </Text>
              </Grid>

              <Textarea>입양사유</Textarea>
            </Grid>

            <Grid
              boxSizing='border-box'
              height='362px'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid margin='11px 0 26px 0 ' height='auto'>
                <Text margin='0' bold line_height='24px'>
                  입양한 반려동물이
                  <span style={{ fontWeight: '800' }}>분리불안</span>이 있다면
                  <br />
                  어떻게 하시겠어요?
                </Text>
              </Grid>

              <Textarea>입양사유</Textarea>
            </Grid>

            <Grid
              boxSizing='border-box'
              height='364px'
              borderBottom='1px solid rgba(225, 225, 225, 0.5) '
            >
              <Grid margin='11px 0 26px 0 ' height='auto'>
                <Text margin='0' bold line_height='24px'>
                  입양한{' '}
                  <span style={{ fontWeight: '800' }}>반려동물이 짖음</span>이
                  있어 주변에서 민원이 들어온다면 어떻게 하시겠어요?
                </Text>
              </Grid>

              <Textarea>입양사유</Textarea>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

const Textarea = styled.p`
  width: 100%;
  height: 249px;
  background-color: #f7f7f7;
  border-radius: 15px;
  border: none;
  padding: 19px;
  box-sizing: border-box;
`;

export default AdoptionReason;
