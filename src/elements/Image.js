import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const {
    shape,
    src,
    size,
    margin,
    border,
    borderRadius,
    backgroundPosition,
    id,
    _onClick,
    _onMouseEnter,
    _onMouseLeave,
    display,
    zIndex,
    boxShadow,
    bg,
  } = props;

  const styles = {
    src: src,
    size: size,
    margin: margin,
    border: border,
    borderRadius,
    backgroundPosition: backgroundPosition,
    display: display,
    zIndex,
    boxShadow,
    bg,
  };

  if (shape === 'circle') {
    return (
      <React.Fragment>
        <ImageCircle
          {...styles}
          id={id}
          onMouseEnter={_onMouseEnter}
          onMouseLeave={_onMouseLeave}
          onClick={_onClick}></ImageCircle>
      </React.Fragment>
    );
  }

  if (shape === 'TitleLogo') {
    return (
      <MainInner
        {...styles}
        id={id}
        onMouseEnter={_onMouseEnter}
        onMouseLeave={_onMouseLeave}
        onClick={_onClick}></MainInner>
    );
  }

  if (shape === 'square') {
    return (
      <React.Fragment>
        <OuterRect>
          <InnerRect
            {...styles}
            id={id}
            onMouseEnter={_onMouseEnter}
            onMouseLeave={_onMouseLeave}
            onClick={_onClick}></InnerRect>
        </OuterRect>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <OuterRect>
        <InnerRect
          {...styles}
          id={id}
          onMouseEnter={_onMouseEnter}
          onMouseLeave={_onMouseLeave}
          onClick={_onClick}></InnerRect>
      </OuterRect>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: 'circle',
  src: 'https://district93.org/wp-content/uploads/2017/07/icon-user-default.png',
  size: 36,
  margin: false,
  border: false,
  borderRadius: null,
  backgroundPosition: false,
  _onMouseEnter: () => {},
  _onMouseLeave: () => {},
  _onClick: () => {},
  display: null,
  zIndex: null,
  boxShadow: null,
  bg: null,
};

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background: ${(props) => props.bg};
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: ${(props) => props.backgroundPosition};
  ${(props) => (props.margin ? `margin: ${props.margin}` : 'margin: 4px')};
  flex-shrink: 0;
  ${(props) => (props.border ? `border: ${props.border};` : '')};
  box-sizing: border-box;
  display: ${(props) => props.display};
  z-index: ${(props) => props.zIndex};
  box-shadow: ${(props) => props.boxShadow};
`;

const OuterRect = styled.div`
  width: 100%;
  min-width: 150px;
`;

const InnerRect = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background: ${(props) => props.bg};
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: ${(props) => props.backgroundPosition};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  z-index: ${(props) => props.zIndex};
  box-shadow: ${(props) => props.boxShadow};
  border-radius: ${(props) => props.borderRadius};
`;

const MainInner = styled.div`
  width: 300px;
  padding-top: 22%;
  overflow: hidden;
  background: ${(props) => props.bg};
  background-image: url(${(props) => props.src});
  background-position: left;
  background-size: cover;
  ${(props) => (props.border ? `border: ${props.border};` : '')};
  box-sizing: border-box;
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  z-index: ${(props) => props.zIndex};
  box-shadow: ${(props) => props.boxShadow};
`;

export default Image;
