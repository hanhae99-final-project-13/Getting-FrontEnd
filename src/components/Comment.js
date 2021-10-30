import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Grid, Image, Text } from '../elements/';
import { commentCreators } from '../redux/modules/comment';
import CommentWrite from './CommentWrite';

const Comment = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const cmt = props.comment;
  console.log('아이디확인,', cmt.commentId);
  const commentDelete = () => {
    dispatch(commentCreators.deleteComment(cmt.commentId));
  };
  const [edit, setEdit] = React.useState(false);
  const editOn = () => {
    setEdit(!edit);
    setCommentModal(!commentModal);
  };
  const [commentModal, setCommentModal] = React.useState(false);
  const onModal = () => {
    console.log(commentModal);
    setCommentModal(!commentModal);
  };
  return (
    <React.Fragment>
      <Grid boxSizing='border-box'>
        {(cmt.commentId ? edit : false) ? (
          <React.Fragment>
            <Image />
            <CommentWrite comment={cmt} setEdit={setEdit} />
          </React.Fragment>
        ) : (
          <Grid
            height='70px'
            width='auto'
            padding='0 0px 0 0'
            borderBottom='solid 1px rgba(225, 225, 225, 0.5)'
            borderRadius='10px'
            display='flex'
            alignItems='center'
          >
            <div
              style={{
                width: '100%',
                height: '40px',
                display: 'flex',
              }}
            >
              <Image />
              <Grid margin='0 0 0 5px'>
                <div
                  style={{
                    margin: '4px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ fontSize: '12px' }}>닉네임</div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}
                  >
                    <div style={{ fontSize: '12px' }}>얼마 전</div>
                    <div
                      style={{ fontSize: '12px', margin: '0 0 0 8px' }}
                      onClick={onModal}
                    >
                      💛
                    </div>
                  </div>
                </div>
                <div style={{ paddingBottom: '8px' }}>{cmt.comment}</div>
                {/* <button onClick={editOn}>수정</button>
                <button onClick={commentDelete}>삭제</button> */}
              </Grid>
            </div>
          </Grid>
        )}
        {/* 모달 */}
        {commentModal ? (
          <div
            style={{
              backgroundColor: 'white',
              boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
              width: '283px',
              height: '200px',
              position: 'fixed',
              bottom: '0',
              display: 'flex',
              flexDirection: 'column',
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
            }}
          >
            <Grid display='flex' justifyContent='center' alignItems='center'>
              <button
                style={{
                  all: 'unset',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#ff6666',
                  width: '100%',
                  height: '100%',
                }}
                onClick={editOn}
              >
                수정
              </button>
            </Grid>
            <Grid display='flex' justifyContent='center' alignItems='center'>
              <button
                style={{
                  all: 'unset',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#ff6666',
                  width: '100%',
                  height: '100%',
                  borderTop: 'solid 1px rgba(225, 225, 225, 0.8)',
                  borderBottom: 'solid 1px rgba(225, 225, 225, 0.8)',
                }}
                onClick={() => {
                  window.confirm('정말 삭제하시겠습니까?');
                  commentDelete();
                }}
              >
                삭제
              </button>
            </Grid>
            <Grid display='flex' justifyContent='center' alignItems='center'>
              <button
                style={{
                  all: 'unset',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#ff6666',
                  width: '100%',
                  height: '100%',
                }}
                onClick={() => {
                  setCommentModal(!commentModal);
                }}
              >
                취소
              </button>
            </Grid>
          </div>
        ) : null}
      </Grid>
    </React.Fragment>
  );
};

export default Comment;
