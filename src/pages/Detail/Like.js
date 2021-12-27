import React from 'react';
import { Grid } from '../../elements/index';
import { ErrorAlert } from '../../shared/Alerts';
import { useDispatch } from 'react-redux';
import { postActions } from '../../redux/modules/post';
const Like = ({ token, postId, post }) => {
  const dispatch = useDispatch();
  return (
    <Grid
      position='relative'
      top='75px'
      left='55px'
      zIndex='2'
      display='flex'
      flexDirection='row-reverse'
      width='30px'
      height='auto'
    >
      <button
        style={{ all: 'unset', cursor: 'pointer' }}
        onClick={() => {
          if (!token) {
            ErrorAlert('로그인 후 이용해주세요');
          } else {
            dispatch(postActions.heartToAxios({ postId: postId }));
          }
        }}
      >
        {post.post.heart === true ? (
          <img
            src={process.env.PUBLIC_URL + '/img/icon/heart_fill_icon.svg'}
            style={{ width: '25px', height: '25px' }}
          />
        ) : (
          <img
            src={process.env.PUBLIC_URL + '/img/icon/heart_line_icon.svg'}
            style={{ width: '25px', height: '25px' }}
          />
        )}
      </button>
    </Grid>
  );
};
export default Like;
