import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid } from '../elements';
import {
  AdoptionCardList,
  AdoptionSearchInput,
  AdoptionWishedCardList,
} from '../components/adoption';
import { history } from '../redux/configureStore';
import InfinityScroll from '../shared/InfinityScroll';
import { postActions } from '../redux/modules/post';
import { ErrorAlert } from '../shared/Alerts';

const Adoption = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user.userInfo);
  const searchSetting = useSelector((state) => state.post.searchSetting);
  const totalPage = useSelector((state) => state.post.totalPage);
  const isLoading = useSelector((state) => state.post.isLoading);
  const isToken = localStorage.getItem('USER_TOKEN');
  const cur = React.useRef();
  const old = React.useRef();

  const activeCurButton = () => {
    old.current.classList.remove('active');
    cur.current.classList.add('active');
    dispatch(postActions.setSearch({ page: 0, sort: 'new' }));
    dispatch(postActions.getPostMW({ ...searchSetting, page: 0, sort: 'new' }));
  };
  const activeOldButton = () => {
    cur.current.classList.remove('active');
    old.current.classList.add('active');
    dispatch(postActions.setSearch({ page: 0, sort: 'old' }));
    dispatch(postActions.getPostMW({ ...searchSetting, page: 0, sort: 'old' }));
  };

  const goAddPost = () => {
    history.push('/addpost');
  };

  React.useEffect(() => {
    if (searchSetting.page !== 0) return;
    dispatch(postActions.setSearch({ page: 0, sort: 'new' }));
    dispatch(postActions.getPostMW({ ...searchSetting, page: 0, sort: 'new' }));
  }, []);

  React.useEffect(() => {
    if (isToken) {
      dispatch(postActions.getWishPostMW());
    }
  });

  return (
    <Grid maxWidth='414px' margin='0 auto' padding='0 0 80px 0'>
      <Grid width='auto' padding='0 24px' margin='12px 0 0 0' overflow='auto'>
        <Grid width='auto'>
          <AdoptionWishedCardList />
        </Grid>
        <Grid width='auto' margin='0 0 20px 0'>
          <AdoptionSearchInput />
        </Grid>
        <CategoryBox>
          <span className='category active' ref={cur} onClick={activeCurButton}>
            최신순
          </span>
          <span className='category' ref={old} onClick={activeOldButton}>
            등록순
          </span>
        </CategoryBox>
        <Grid
          position='fixed'
          bottom='100px'
          margin='0 auto'
          maxWidth='414px'
          height='124px'
          zIndex='2'
        >
          <ToTop
            src={process.env.PUBLIC_URL + '/img/icon/totop_icon.svg'}
            onClick={() => window.scrollTo(0, 0)}
          />
          <AddButton
            src={process.env.PUBLIC_URL + '/img/icon/add_icon_pink.svg'}
            onClick={() => {
              if (!isToken) {
                ErrorAlert('로그인이 필요한 서비스입니다!');
                return;
              }
              goAddPost();
            }}
          />
        </Grid>
        <AdoptionCardList />
      </Grid>
      {isLoading || totalPage <= searchSetting.page || totalPage === 1 ? (
        ''
      ) : (
        <InfinityScroll page={searchSetting.page} />
      )}
    </Grid>
  );
};

const Tag = styled.button`
  margin-right: 20px;
  padding: 3px 6px;
  background-color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  :nth-child(1) {
    background-color: steelblue;
  }
`;

const ToTop = styled.img`
  position: absolute;
  top: 0;
  right: 48px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  box-shadow: 4px 4px 20px rgba(87, 87, 87, 0.1);
`;

const AddButton = styled.img`
  position: absolute;
  bottom: 0;
  right: 48px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  box-shadow: 4px 4px 20px rgba(87, 87, 87, 0.1);
`;

const CategoryBox = styled.div`
  display: flex;
  padding-left: 12px;
  .category {
    margin-right: 15px;
    font-size: 14px;
    font-weight: 700;
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

export default Adoption;
