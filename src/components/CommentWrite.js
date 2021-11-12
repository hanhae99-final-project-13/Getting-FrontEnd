import React, { useState } from 'react';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Grid, Image } from '../elements/';
import { postActions } from '../redux/modules/post';
const CommentWrite = (props) => {
  // console.log('코멘트', props);
  const postId = props.postId;
  if (props.comment) {
    console.log('수정버튼시 활성화', props.comment.commentId);
  }

  const editSubmit = () => {
    const commentId = props.comment.commentId;
    console.log('수정코멘트', comment);
    dispatch(postActions.updateCommentToAxios(commentId, { comment: comment }));
    props.setEdit(false);
  };
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  // 임시로 id값 지정
  const commentSubmit = () => {
    dispatch(
      postActions.addCommentToAxios({ postId: postId, comment: comment }),
    );
    setComment('');
  };
  return (
    <React.Fragment>
      {props.comment ? (
        <Grid
          bg='white'
          width='305px'
          height='40px'
          border='1.5px solid rgb(235, 235, 235)'
          borderRadius='10px'
          margin='0 auto 10px auto'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <CommentBox
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button
            style={{
              marginRight: '6px',
              padding: '4px 10px',
              border: 'none',
              color: 'white',
              backgroundColor: '#FE7968',
              borderRadius: '10px',
            }}
            onClick={editSubmit}
          >
            입력
          </button>
        </Grid>
      ) : (
        <Grid
          bg='white'
          width='305px'
          height='40px'
          border='1.5px solid rgb(235, 235, 235)'
          borderRadius='10px'
          margin='0 auto 10px auto'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <CommentBox
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button
            style={{
              marginRight: '6px',
              padding: '4px 10px',
              border: 'none',
              color: 'white',
              backgroundColor: '#FE7968',
              borderRadius: '10px',
            }}
            onClick={commentSubmit}
          >
            입력
          </button>
        </Grid>
      )}
    </React.Fragment>
  );
};

const CommentBox = styled.input`
  background-color: white;
  width: 230px;
  height: 35px;
  margin: auto;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default CommentWrite;
