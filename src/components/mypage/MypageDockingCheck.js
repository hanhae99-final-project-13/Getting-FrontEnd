import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid } from '../../elements';
import { AdoptionWait, AdoptionOk, AdoptionNo } from '.';
import { postActions } from '../../redux/modules/post';

const MypageDockingCheck = (props) => {
  const dispatch = useDispatch();
  const isDeleteMode = useSelector((state) => state.post.isDockingDeleteMode);
  const [adoptionWaitDisplay, setAdoptionWaitDisplay] = React.useState('block');
  const [adoptionOkDisplay, setAdoptionOkDisplay] = React.useState('none');
  const [adoptionNoDisplay, setAdoptionNoDisplay] = React.useState('none');
  const adoptionWait = React.useRef();
  const adoptionOk = React.useRef();
  const adoptionNo = React.useRef();

  if (adoptionOkDisplay === 'block') {
    dispatch(postActions.changeCardCover(false));
  }
  if (adoptionNoDisplay === 'block') {
    dispatch(postActions.changeCardCover(false));
  }

  const showAdoptionWait = () => {
    adoptionOk.current.classList.remove('active');
    adoptionNo.current.classList.remove('active');
    adoptionWait.current.classList.add('active');
    setAdoptionOkDisplay('none');
    setAdoptionNoDisplay('none');
    setAdoptionWaitDisplay('block');
    dispatch(postActions.changeCardCover(true));
  };
  const showAdoptionOk = () => {
    adoptionNo.current.classList.remove('active');
    adoptionWait.current.classList.remove('active');
    adoptionOk.current.classList.add('active');
    setAdoptionNoDisplay('none');
    setAdoptionWaitDisplay('none');
    setAdoptionOkDisplay('block');
    dispatch(postActions.changeCardCover(false));
    dispatch(postActions.changeDockingDeleteMode(false));
  };
  const showAdoptionNo = () => {
    adoptionWait.current.classList.remove('active');
    adoptionOk.current.classList.remove('active');
    adoptionNo.current.classList.add('active');
    setAdoptionWaitDisplay('none');
    setAdoptionOkDisplay('none');
    setAdoptionNoDisplay('block');
    dispatch(postActions.changeCardCover(false));
    dispatch(postActions.changeDockingDeleteMode(false));
  };

  const changeDeleteMode = () => {
    if (isDeleteMode === false) {
      dispatch(postActions.changeDockingDeleteMode(true));
    } else {
      dispatch(postActions.changeDockingDeleteMode(false));
    }
  };

  return (
    <Grid display={props.display} margin='22px 0 80px 0'>
      <CategoryBox>
        <span
          className='category active'
          ref={adoptionWait}
          onClick={showAdoptionWait}
        >
          입양 대기중
        </span>
        <span className='category' ref={adoptionOk} onClick={showAdoptionOk}>
          입양 승락
        </span>
        <span className='category' ref={adoptionNo} onClick={showAdoptionNo}>
          입양 반려
        </span>
        <span
          className='deleteMyRequest'
          style={{ display: adoptionWaitDisplay }}
          onClick={changeDeleteMode}
        >
          {/* {isDeleteMode ? '완료' : '삭제하기'} */}
        </span>
      </CategoryBox>
      <AdoptionWait display={adoptionWaitDisplay} />
      <AdoptionOk display={adoptionOkDisplay} />
      <AdoptionNo display={adoptionNoDisplay} />
    </Grid>
  );
};

const CategoryBox = styled.div`
  position: relative;
  display: flex;
  margin: 0 0 22px 0;

  .category {
    margin-right: 15px;
    font-size: 12px;
    color: #c5c5c5;
  }
  .active {
    color: #000;
    font-weight: 800;
    border-bottom: 2px solid #ff8888;
  }
  .deleteMyRequest {
    position: absolute;
    right: 0;
    color: #4a4a4a;
    font-size: 12px;
    font-weight: 800;
  }
`;

export default MypageDockingCheck;
