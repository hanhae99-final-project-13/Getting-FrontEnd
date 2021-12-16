import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../../elements';

const ReCheckModal = (props) => {
  const {
    closeModal,
    clickTrue,
    text,
    buttonTrueText,
    buttonFalseText,
    image,
  } = props;

  const ModalText = useRef();

  const makeText = () => {
    ModalText.current.innerHTML = text;
  };

  useEffect(() => {
    makeText();
  }, []);

  return (
    <>
      <Grid
        position='fixed'
        left='0'
        right='0'
        bottom='250px'
        display='flex'
        flexDirection='column'
        alignItems='center'
        zIndex='9999'
        height='264px'
        maxWidth='414px'
        width='auto'
        margin='35px auto'
        bg='#FFFFFF'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'
        borderRadius='30px 30px 0 0'
        boxSizing='border-box'>
        <Grid
          width='62px'
          height='85px'
          margin={
            image.includes('warning_icon')
              ? '24px auto 8px'
              : '24px 40px 25px 0px'
          }>
          <img src={process.env.PUBLIC_URL + image} />
        </Grid>
        <Text
          _ref={ModalText}
          margin='14.25px 0 0 0'
          align='center'
          line_height='21px'
          weight='800'></Text>
        <Grid display='flex' justifyContent='center'>
          <Button
            onClick={() => {
              closeModal();
            }}
            height='40px'
            width='130px'
            margin='17px 10px 0 0'
            size='14px'
            weight='800'
            bg='#FFBE5B'
            border='none'
            border_radius='34px'>
            {buttonFalseText}
          </Button>

          <Button
            onClick={() => {
              clickTrue();
              closeModal();
            }}
            height='40px'
            width='130px'
            margin='17px 0 0 10px'
            size='14px'
            weight='800'
            bg='#FE7968'
            border='none'
            border_radius='34px'>
            {buttonTrueText}
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
  cursor: pointer;
`;

export default ReCheckModal;
