import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../../elements';
import { history } from '../../redux/configureStore';

const AdoptionNoticeModal = (props) => {
  const { postId } = props;
  return (
    <ModalParent>
      <Grid
        position='sticky'
        top='43px'
        left='20px'
        zIndex='999'
        width='335px'
        height='740px'
        margin='auto'
        padding='0 20px'
        boxSizing='border-box'
        borderRadius='14px'
        boxShadow=' 10px 10px 20px rgba(0, 0, 0, 0.1);'
        bg='white'>
        <Grid position='relative' height='auto' margin='36px 0 0 0'>
          <Text align='center' margin='0' size='18px'>
            <span
              style={{
                borderRadius: '0px',
                boxShadow: 'inset 0px -9px 0px #FFC98A',
                fontWeight: '800',
                fontSize: '18px',
              }}>
              입양신청서&nbsp;
            </span>
            <span
              style={{
                borderRadius: '0px',
                boxShadow: 'inset 0px -9px 0px #FFC98A',
                fontWeight: '800',
                fontSize: '18px',
                color: '#FF0000',
              }}>
              주의사항
            </span>
          </Text>
        </Grid>

        <Grid
          is_flex
          justifyContent='center'
          alignItems='center'
          margin='15px 0 0 0'
          height='auto'>
          <img
            width='37px'
            height='44px'
            src={process.env.PUBLIC_URL + '/img/GUIicon/warning_dog_icon.svg'}
          />

          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            margin='0 0 0 10px'
            boxSizing='border-box'
            borderRadius='14px'
            boxShadow=' 4px 4px 20px rgba(0, 0, 0, 0.15);'>
            <Text
              align='center'
              padding='15px'
              margin='0'
              weight='800'
              size='15px'
              line_height='22px'>
              저희를 가족으로 입양하실려면,
              <br />
              <span
                style={{
                  borderRadius: '0px',
                  boxShadow: 'inset 0px -9px 0px #FFC98A',
                  fontSize: '18px',
                  color: '#FF0000',
                }}>
                꼭 아래부분
              </span>
              대로 임해주세요!
            </Text>
          </Grid>
        </Grid>

        <Grid margin='20px 0 0 0' height='auto'>
          <Grid is_flex>
            <Text margin='0' size='14px' line_height='22px'>
              1.
            </Text>
            <Text margin='0' size='14px' line_height='22px' width='275px'>
              <span style={{ fontWeight: '800', fontSize: '14px' }}>평생</span>
              저희의 가족이 되어 같이 살아갈 분만 신청 바랍니다.
            </Text>
          </Grid>

          <Grid is_flex>
            <Text margin='0' size='14px' line_height='22px'>
              2.
            </Text>
            <Text margin='0' size='14px' line_height='22px' width='275px'>
              건강상문제로 반려가 불가능 상태 이 외에 <br />
              <span style={{ fontWeight: '800', fontSize: '14px' }}>
                어떤 사유라도 파양은 절대 안됩니다.
              </span>
            </Text>
          </Grid>

          <Grid is_flex>
            <Text margin='0' size='14px' line_height='22px'>
              3.
            </Text>
            <Text margin='0' size='14px' line_height='22px' width='275px'>
              재입양, 유기, 동물학대 시,
              <span style={{ fontWeight: '800', fontSize: '14px' }}>
                민형사상 책임
              </span>
              을 져야합니다.
            </Text>
          </Grid>

          <Grid is_flex>
            <Text margin='0' size='14px' line_height='22px'>
              4.
            </Text>
            <Text margin='0' size='14px' line_height='22px' width='275px'>
              입양신청서 작성 후, 다시 수정 또는 삭제가 어려우며
              <span style={{ fontWeight: '800', fontSize: '14px' }}>
                , 처음부터 신중하고 꼼꼼하게
              </span>
              작성해주시길 바랍니다.
            </Text>
          </Grid>

          <Grid is_flex>
            <Text margin='0' size='14px' line_height='22px'>
              5.
            </Text>
            <Text margin='0' size='14px' line_height='22px' width='275px'>
              입양신청 후,
              <span style={{ fontWeight: '800', fontSize: '14px' }}>
                입양 확정이 나면, 계약서로 법적 효력
              </span>
              을 갖습니다.
            </Text>
          </Grid>
        </Grid>

        <Grid
          is_flex
          justifyContent='center'
          alignItems='center'
          margin='15px 0 0 0'
          height='auto'>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            margin='0 10px 0 0px'
            boxSizing='border-box'
            borderRadius='14px'
            boxShadow=' 4px 4px 20px rgba(0, 0, 0, 0.15);'>
            <Text
              align='center'
              padding='15px'
              margin='0'
              weight='800'
              size='15px'
              line_height='22px'>
              아래 분들을 저희를
              <span
                style={{
                  borderRadius: '0px',
                  boxShadow: 'inset 0px -9px 0px #FFC98A',
                  fontSize: '18px',
                  color: '#FF0000',
                }}>
                가족으로 <br />
                데려올 수 없습니다!
              </span>
            </Text>
          </Grid>

          <img
            width='37px'
            height='44px'
            src={process.env.PUBLIC_URL + '/img/GUIicon/warning_dog_icon.svg'}
          />
        </Grid>

        <Grid margin='20px 0 0 0' height='auto'>
          <Grid is_flex>
            <Text margin='0' size='14px' line_height='22px'>
              1.
            </Text>
            <Text margin='0' size='14px' line_height='22px' width='275px'>
              경제활동을 하지만,
              <span style={{ fontWeight: '800', fontSize: '14px' }}>
                혼자 사는 것이 빠듯
              </span>
              한 분
            </Text>
          </Grid>

          <Grid is_flex>
            <Text margin='0' size='14px' line_height='22px'>
              2.
            </Text>
            <Text margin='0' size='14px' line_height='22px' width='275px'>
              미성년자, 대학생, 무직, 군미필자, 70대 이상 등
              <span style={{ fontWeight: '800', fontSize: '14px' }}>
                경제적, 시간적으로 여유가 없는 분
              </span>
              한 분
            </Text>
          </Grid>

          <Grid is_flex>
            <Text margin='0' size='14px' line_height='22px'>
              3.
            </Text>
            <Text margin='0' size='14px' line_height='22px' width='275px'>
              <span style={{ fontWeight: '800', fontSize: '14px' }}>
                입양 후에 일정 기간 동안 연락하기
              </span>
              가 귀찮으신 분
            </Text>
          </Grid>
        </Grid>

        <Grid height='auto' margin='20px auto' cusor='pointer'>
          <Grid
            _onClick={() => {
              history.push(`/apply/${postId}`);
              window.sessionStorage.setItem(
                'length',
                JSON.stringify({
                  name: '',
                  job: '',
                  fosterAge: '20',
                  gender: 'F',
                  fosterAddress: '',
                  family: '',
                  currentPet: '있음',
                  phone: '',
                  reason: '',
                  click: false,
                }),
              );
              window.sessionStorage.setItem(
                'length2',
                JSON.stringify({
                  allergy: '증상있음',
                  anxiety: '',
                  bark: '',
                  check: false,
                  etc: '',
                  experience: '',
                  leaveHome: '',
                  medicalBudget: '',
                  monthlyBudget: '',
                  roomPreview: '',
                  roomUrl: '',
                  signPreview: '',
                  signUrl: '',
                  timeTogether: '',
                }),
              );
              window.scrollTo(0, 0);
            }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='158px'
            height='52px'
            margin='auto'
            bg='#FE7968'
            borderRadius='26px'
            boxShadow='1px 1px 5px rgba(0, 0, 0, 0.5)'>
            <Text margin='0' color='#F9F9F9' weight='800'>
              확인했습니다
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </ModalParent>
  );
};

const ModalParent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow-y: auto;
`;

export default AdoptionNoticeModal;
