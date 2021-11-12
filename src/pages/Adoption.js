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
    dispatch(postActions.setSearch({ page: 0, sort: 'new' }));
    dispatch(postActions.getPostMW({ ...searchSetting, page: 0, sort: 'new' }));
  }, []);

  React.useEffect(() => {
    if (userInfo.userId) {
      dispatch(postActions.getWishPostMW(userInfo.userId));
    }
  });

  if (isToken && !userInfo.userId) {
    return <div>로딩중</div>;
  }

  return (
    <Grid width='375px' margin='0 auto' padding='0 0 80px 0'>
      <Grid width='auto' padding='35px' overflow='auto'>
        <Grid>
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
        <AdoptionCardList />
        <AddButton onClick={goAddPost}>+</AddButton>
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

const AddButton = styled.button`
  position: fixed;
  bottom: 15%;
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
  display: flex;
  margin: 0 0 22px 0;

  .category {
    margin-right: 15px;
    font-size: 12px;
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
