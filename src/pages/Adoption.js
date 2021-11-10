import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid } from '../elements';
import {
  AdoptionCardList,
  AdoptionSearchInput,
  AdoptionWishedCardList,
} from '../components/adoption';
import { history } from '../redux/configureStore';
import Footer from '../components/Footer';
import InfinityScroll from '../shared/InfinityScroll';
import { postActions } from '../redux/modules/post';

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
    old.current.style.backgroundColor = 'white';
    cur.current.style.backgroundColor = 'steelblue';
    dispatch(postActions.setSearch({ page: 0, sort: 'new' }));
    dispatch(postActions.getPostMW({ ...searchSetting, page: 0, sort: 'new' }));
  };
  const activeOldButton = () => {
    cur.current.style.backgroundColor = 'white';
    old.current.style.backgroundColor = 'steelblue';
    dispatch(postActions.setSearch({ page: 0, sort: 'old' }));
    dispatch(postActions.getPostMW({ ...searchSetting, page: 0, sort: 'old' }));
  };

  const goAddPost = () => {
    history.push('/addpost');
  };

  useEffect(() => {
    dispatch(postActions.setSearch({ page: 0, sort: 'new' }));
    dispatch(postActions.getPostMW({ ...searchSetting, page: 0, sort: 'new' }));
    if (userInfo.userId) {
      dispatch(postActions.getWishPostMW(userInfo.userId));
    }
  }, []);
  if (isToken && !userInfo.userId) {
    return <div>로딩중</div>;
  }

  return (
    <Grid>
      <Grid width='auto' padding='20px' overflow='auto' margin='80px 0'>
        <Grid>
          <AdoptionWishedCardList />
        </Grid>
        <Grid width='auto' margin='0 0 20px 0'>
          <AdoptionSearchInput />
        </Grid>
        <Grid>
          <Tag ref={cur} onClick={activeCurButton}>
            최신순
          </Tag>
          <Tag ref={old} onClick={activeOldButton}>
            등록순
          </Tag>
          <AdoptionCardList />
        </Grid>
        <CategoryBox>
          <span className='category active' ref={cur} onClick={activeCurButton}>
            입양 대기중
          </span>
          <span className='category' ref={old} onClick={activeOldButton}>
            입양 승락
          </span>
        </CategoryBox>
        <AddButton onClick={goAddPost}>+</AddButton>
      </Grid>
      {isLoading || totalPage <= searchSetting.page || totalPage === 1 ? (
        ''
      ) : (
        <InfinityScroll page={searchSetting.page} />
      )}
      <Footer></Footer>
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

const AddButton = styled.button`
  position: fixed;
  bottom: 10%;
  right: 10%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background-color: white;
  text-align: center;
  border: none;
  border-radius: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

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

export default Adoption;
