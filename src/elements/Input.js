import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  // bg : background-color / type(혹시나 submit, file로 변경 가능성) / onSubmit(keypress Enter과 연결) / value 추가
  const {
    width,
    bg,
    border,
    border_radius,
    padding,
    margin,

    placeholder,
    type,
    onSubmit,
    _onChange,
    value,
    name,
  } = props;

  const styles = {
    width,
    bg,
    border,
    border_radius,
    padding,
    margin,
  };

  return (
    <React.Fragment>
      <DefaultInput
        {...styles}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={_onChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onSubmit(e);
          }
        }}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  placeholder: '',
  width: '100%',
  bg: null,
  border: '1px solid black',
  border_radius: '0px',
  padding: '2px',
  margin: '',
  type: 'text',
  name: '',
  value: '',
  onSubmit: () => {},
  _onChange: () => {},
};

const DefaultInput = styled.input`
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.border_radius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  /* :focus {
    outline: none;
  } */
`;

export default Input;
