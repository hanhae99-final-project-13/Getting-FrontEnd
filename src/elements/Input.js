import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  // bg : background-color / type(혹시나 submit, file로 변경 가능성) / onSubmit(keypress Enter과 연결) / value 추가
  const {
    width,
    bg,
    border,
    border_radius,
    border_top,
    border_bottom,
    border_right,
    border_left,
    padding,
    margin,

    placeholder,
    type,
    onSubmit,
    _onChange,
    _onClick,
    value,
    name,
    placeholder_color,
    placeholder_weight,
    id,
  } = props;

  const styles = {
    width,
    bg,
    border,
    border_radius,
    border_top,
    border_bottom,
    border_right,
    border_left,
    padding,
    margin,
    placeholder_color,
    placeholder_weight,
    id,
  };

  return (
    <React.Fragment>
      <DefaultInput
        {...styles}
        onClick={_onClick}
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
  _onClick: () => {},
  border_top: false,
  border_bottom: false,
  border_right: false,
  border_left: false,
  placeholder_color: false,
  placeholder_weight: false,
};

const DefaultInput = styled.input`
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  border-top: ${(props) => props.border_top};
  border-bottom: ${(props) => props.border_bottom};
  border-right: ${(props) => props.border_right};
  border-left: ${(props) => props.border_left};

  border-radius: ${(props) => props.border_radius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  ::placeholder {
    color: ${(props) => props.placeholder_color};
    font-weight: ${(props) => props.placeholder_weight};
  }

  /* opacity: 0.5; */
  /* :focus {
    outline: none;
  } */
`;

export default Input;
