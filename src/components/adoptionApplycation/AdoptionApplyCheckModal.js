import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../../elements';

const AdoptionApplyCheckModal = (props) => {
  const { closeModal, realApply } = props;
  return (
    <>
      <Grid
        position='fixed'
        left='0'
        right='0'
        bg='#FFFFFF'
        bottom='250px'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'
        height='264px'
        maxWidth='414px'
        width='auto'
        margin='35px auto'
        borderRadius='30px 30px 0 0'
        boxSizing='border-box'
        display='flex'
        flexDirection='column'
        alignItems='center'
        zIndex='9999'>
        <Grid width='62px' height='85px' margin='24px auto 8px '>
          <img src={process.env.PUBLIC_URL + '/img/GUIicon/warning_icon.svg'} />
        </Grid>
        <Text
          margin='14.25px 0 0 0'
          align='center'
          line_height='21px'
          weight='600'>
          작성한 입양신청서는
          <span style={{ fontWeight: '800' }}> 수정/삭제가 불가합니다.</span>
          <br />
          정말 이대로 제출하시겠습니까?
        </Text>
        <Grid display='flex' justifyContent='center'>
          <Button
            margin='17px 10px 0 0'
            width='130px'
            size='14px'
            weight='800'
            height='40px'
            padding='12px 0px'
            bg='#FFBE5B'
            border='none'
            border_radius='34px'
            onClick={() => {
              closeModal();
            }}>
            다시 생각해볼게요
          </Button>

          <Button
            margin='17px 0 0 10px'
            width='130px'
            size='14px'
            weight='800'
            height='40px'
            padding='12px 0px'
            bg='#FE7968'
            border='none'
            border_radius='34px'
            onClick={() => {
              realApply();
              closeModal();
            }}>
            확인했습니다
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const Button = styled.button`
  border: ${(props) => props.border};
  border-radius: ${(props) => props.border_radius};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  color: white;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

export default AdoptionApplyCheckModal;
