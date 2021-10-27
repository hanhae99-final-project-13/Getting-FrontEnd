import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const {
    children,
    color,
    size,
    bold,
    align,
    margin,
    family,
    padding,
    border,
    width,
  } = props;

  const styles = {
    color: color,
    size: size,
    bold: bold,
    align: align,
    margin: margin,
    family: family,
    padding: padding,
    border: border,
    width: width,
  };

  return (
    <React.Fragment>
      <TextBox {...styles}>{children}</TextBox>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  color: null,
  size: null,
  bold: false,
  align: null,
  margin: false,
  padding: false,
  family: false, //폰트 타입
  border: null,
  width: false,
};

const TextBox = styled.p`
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
    font-weight: ${(props) => (props.bold ? `600` : `400`)};
  ${(props) => (props.align ? `text-align: ${props.align};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
    ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
    ${(props) => (props.family ? `font-family: ${props.family};` : '')}
    border: ${(props) => (props.border ? props.border : '')};
  width: ${(props) => props.width};
  word-break: break-all;
`;

export default Text;
