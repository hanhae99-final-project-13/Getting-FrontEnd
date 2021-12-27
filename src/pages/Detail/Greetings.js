import React from 'react';

const Greetings = () => {
  return (
    <p
      style={{
        display: 'flex',
        alignItems: 'center',
        fontWeight: '800',
      }}
    >
      저와 친구하실래요?
      <img
        src={process.env.PUBLIC_URL + '/img/icon/smile.svg'}
        style={{ width: '18px', height: '18px' }}
      />
    </p>
  );
};
export default Greetings;
