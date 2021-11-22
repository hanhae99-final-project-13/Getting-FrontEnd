import React from 'react';
import styled from 'styled-components';

const Carousel = ({ list, width, height, sideOffset, dragSpeed }) => {
  const [state, setState] = React.useState({
    isDown,
    startX,
    transLeftOffset,
    dragSpeed,
  });
  const carousel = React.useRef();
  const cWrapper = React.useRef();
  const cWrapperStyle = {
    width: `${list.length * (width + 2 * sideOffset)}px`,
    height: `${height}px`,
  };

  giveMeIntValOf = (el) => {
    return parseInt(el.replace('translateX(', '').replace('px)', ''), 10);
  };

  handleMouseDown = (e) => {
    const carousel = carousel.current;

    const _startX = e.pageX - carousel.offsetLeft;
    const _transLeftOffset = giveMeIntValOf(
      carousel.firstChild.style.transform,
    );
    setState(
      {
        isDown: true,
        startX: _startX,
        transLeftOffset: _transLeftOffset,
      },
      () => {
        // handeling reset the transition
        const { startX, transLeftOffset, dragSpeed } = state;

        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * dragSpeed;

        carousel.firstChild.style.cssText = `
        transform: translateX(${transLeftOffset + walk}px);
        transition: transform 0.0s ease-in-out;
      `;
      },
    );
  };

  handleMouseLeave = (e) => {
    this.handleSnap();
  };

  handleMouseUp = (e) => {
    this.handleSnap();
  };

  handleMouseMove = (e) => {
    const carousel = carousel.current;

    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * dragSpeed;

    carousel.firstChild.style.transform = `translateX(${
      transLeftOffset + walk
    }px)`;
  };

  handleSnap = () => {
    const carousel = carousel.current;

    setState({ isDown: false });

    const tempThresholdOffset = this.giveMeIntValOf(
      carousel.firstChild.style.transform,
    );
    const end =
      _data.length * (itemWidth + 2 * itemSideOffsets) -
      30 -
      carousel.offsetWidth;

    if (tempThresholdOffset < 0 || tempThresholdOffset > end) {
      this.setState({ isDown: false });
      carousel.firstChild.style.cssText = `
        transform: translateX(${tempThresholdOffset < 0 ? 0 : end}px);
        transition: transform 0.5s cubic-bezier(.25,.72,.51,.96);
      `;
    }
  };

  return (
    <React.Fragment>
      <div
        ref={carousel}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div
          ref={cWrapper}
          style={{
            ...cWrapperStyle,
            transform: 'translateX(0px)',
          }}
        >
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
