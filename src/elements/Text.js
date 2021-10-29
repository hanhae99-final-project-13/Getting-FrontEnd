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
    weight,
    line_height,
    position,
    top,
    bottom,
    left,
    right,
    _onClick,
    id,
    display,
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
    weight: weight,
    line_height: line_height,
    position: position,
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    _onClick: _onClick,
    id: id,
    display: display,
  };

  return (
    <React.Fragment>
      <TextBox {...styles} onClick={_onClick}>
        {children}
      </TextBox>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  color: null,
  size: null,
  bold: false,
  align: null,
  margin: null,
  padding: null,
  family: null, //폰트 타입
  border: null,
  width: false,
  weight: false,
  line_height: false,
  position: false,
  top: false,
  bottom: false,
  left: false,
  right: false,
  display: null,
  _onClick: () => {},
};

const TextBox = styled.p`
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
    font-weight: ${(props) => (props.bold ? `600` : `400`)};
  ${(props) => (props.weight ? `font-weight:${props.weight}` : '')};
  ${(props) => (props.align ? `text-align: ${props.align};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
    ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
    ${(props) => (props.family ? `font-family: ${props.family};` : '')}
    border: ${(props) => (props.border ? props.border : '')};
  width: ${(props) => props.width};
  word-break: break-all;
  ${(props) => (props.line_height ? `line-height: ${props.line_height};` : '')}
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  display: ${(props) => props.display};
`;

export default Text;
