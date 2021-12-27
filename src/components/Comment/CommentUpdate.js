import React from 'react';
import CommentWrite from '../CommentWrite';
import { Grid, Image } from '../../elements/index';
const CommentUpdate = ({ comment, setEdit }) => {
  return (
    <Grid
      alignItems='center'
      width='333px'
      height='70px'
      margin='0 auto 10px'
      borderBottom='solid 1px rgba(225, 225, 225, 0.5)'
      borderRadius='10px'
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '40px',
          padding: '5px 0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={
              comment ? (
                comment.userImgUrl
              ) : (
                <img
                  src={
                    process.env.PUBLIC_URL + '/GUIicon/profile_defalut_icon.svg'
                  }
                />
              )
            }
          />
          <div
            style={{
              display: 'flex',
              color: '#FE7968',
              fontSize: '12px',
            }}
          >
            {comment.nickname}
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/img/icon/cancel_filled_icon.svg'}
          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          onClick={() => {
            setEdit(false);
          }}
        />
      </div>

      <CommentWrite
        key={comment.commentId}
        comment={comment}
        setEdit={setEdit}
      />
    </Grid>
  );
};

export default CommentUpdate;
