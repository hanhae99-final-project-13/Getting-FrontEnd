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
            margin='17px 10px 0 0'
            width='130px'
            size='14px'
            weight='800'
            height='40px'
            bg='#FFBE5B'
            border='none'
            border_radius='34px'
            onClick={() => {
              closeModal();
            }}>
            {buttonFalseText}
          </Button>

          <Button
            margin='17px 0 0 10px'
            width='130px'
            size='14px'
            weight='800'
            height='40px'
            bg='#FE7968'
            border='none'
            border_radius='34px'
            onClick={() => {
              clickTrue();
              closeModal();
            }}>
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
