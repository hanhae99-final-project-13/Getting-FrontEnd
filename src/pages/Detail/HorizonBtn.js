import React from 'react';

const HorizonBtn = ({ user, post, onModal }) => {
  return (
    <>
      {user && user.nickname === post.post.nickname ? (
        <button style={{ all: 'unset', cursor: 'pointer' }} onClick={onModal}>
          <img
            src={
              process.env.PUBLIC_URL + '/img/icon/setting_horizontal_icon.svg'
            }
            style={{ width: '12px', height: '12px' }}
          />
        </button>
      ) : (
        <button
          style={{ all: 'unset', width: '12px' }}
          onClick={onModal}
        ></button>
      )}
    </>
  );
};
export default HorizonBtn;
