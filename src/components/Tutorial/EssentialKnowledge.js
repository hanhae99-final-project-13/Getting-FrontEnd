import React from 'react';

import { Grid, Text } from '../../elements';
import { ErrorAlert } from '../../shared/Alerts';

import { history } from '../../redux/configureStore';
import { size } from 'lodash';

const EssentialKnowledge = () => {
  const token = localStorage.getItem('USER_TOKEN');

  return (
    <>
      <Grid
        maxWidth='414px'
        width='auto'
        margin='0 auto 200px'
        position='relative'
        padding='0 35px'>
        <Grid
          cusor='pointer'
          zIndex='9999'
          _onClick={() => {
            history.goBack();
          }}
          position='absolute'
          width='20px'
          height='20px'
          top='-51px'
          left='36px'>
          <Grid width='12px' height='7px'>
            <img src={process.env.PUBLIC_URL + '/img/icon/back_icon.svg'} />
          </Grid>
        </Grid>

        <Grid position='absolute' top='-52px' left='0' right='0'>
          <Text size='18px' margin='0' weight='800' align='center'>
            필수지식 리스트
          </Text>
        </Grid>

        {/*지식 1번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='117px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            1.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              반려견에게도 새로운 가족을 받아들일 시간이 필요해요.{' '}
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                입양 직후 낯선 환경과 사람들 속에서도 반려견도 적응할 시간이
                필요합니다.
              </span>
              <br />
              초반부터무리한 교육은 반려견이 부정적인 인식을 갖게 할 수 있어요.
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={process.env.PUBLIC_URL + '/img/QuizImg/QuizImg1.svg'}
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        {/*지식 2번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='24px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            2.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              반려견을 관리,보호하는 사람은 반려견과 함께 외출할 때에는 반드시
              &nbsp;
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                목줄 또는 가슴줄을 하거나 이동장치
              </span>
              를 사용하여야 합니다.
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={process.env.PUBLIC_URL + '/img/QuizImg/QuizImg2.svg'}
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        {/*지식 3번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='24px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            3.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              노화가 진행된 반려견의 경우 산책을 하지 않는 것이 좋을까요?
              <br />
              아닙니다.&nbsp;
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                적절한 운동과 산책 등 &nbsp;
              </span>
              일상생활의 자극이 없다면 반려견의 노화는 더욱 가속화될 수
              있습니다. 산책을 원하지 않더라도 가벼운 산책을 나가보세요!
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={process.env.PUBLIC_URL + '/img/QuizImg/QuizImg3.svg'}
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        {/*지식 4번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='24px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            4.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              사람이 주민등록번호를 발급받는 것처럼 &nbsp;
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                반려견도 등록번호를 발급받아야 됩니다. &nbsp;
              </span>
              반려견이 3개월령이 되는 날로부터 30일 이내로 등록하셔야 합니다.
              동물등록은 법적으로 의무사항이며, 미등록시 100만원 이하의 과태료가
              부과됩니다.
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={process.env.PUBLIC_URL + '/img/QuizImg/QuizImg4.svg'}
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        {/*지식 5번 */}

        <Grid is_flex maxWidth='414px' width='auto' margin='24px auto 0'>
          <Text margin='0 4px 0 0' size='16px' line_height='22px' weight='700'>
            5.
          </Text>
          <Grid>
            <Text margin='0' size='14px' line_height='21px' weight='700'>
              반려견의 평균수명은 약 14년입니다. <br />
              이사, 결혼, 출산, 여행, 이민 등으로 환경이 바뀌어도 끝까지 책임
              질수 있는{' '}
              <span style={{ color: '#FE7968', fontSize: '14px' }}>
                &nbsp;장기적인 계획
              </span>
              이 필요합니다.
            </Text>
            <Grid
              borderRadius='15px'
              margin='36px auto 0'
              maxWidth='226px'
              width='100%'
              height='152px'
              bgi={process.env.PUBLIC_URL + '/img/QuizImg/QuizImg5.svg'}
              bgisize='contain'
              bgiposition='center'
              bgirepeat='no-repeat'></Grid>
          </Grid>
        </Grid>

        <Grid
          cusor='pointer'
          position='fixed'
          top='580px'
          left='0'
          right='0'
          bottom='144px'
          _onClick={() => {
            if (!token) {
              ErrorAlert('로그인 후 진행해주세요!');
              return;
            }

            history.push('/essentialquiz');
          }}
          margin='0 auto'
          bg='#FE7968'
          width='157px'
          height='52px'
          borderRadius='26px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'>
          <Text color='white' margin='0' weight='700'>
            퀴즈로 검증하기
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

export default EssentialKnowledge;
