import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid } from '../elements';
import {
  AdoptionCardList,
  AdoptionSearchInput,
  AdoptionWishedCardList,
} from '../components/adoption';

const Adoption = () => {
  const dispatch = useDispatch();
  const wishedPostList = useSelector((state) => state.post.wishedpostList);
  const cur = React.useRef();
  const old = React.useRef();  
  const activeCurButton = () => {    
    old.current.style.backgroundColor = 'white';
    cur.current.style.backgroundColor = 'steelblue';
  }
  const activeOldButton = () => {    
    cur.current.style.backgroundColor = 'white';
    old.current.style.backgroundColor = 'steelblue';
  }
  return (
    <Grid width='auto' padding='20px' overflow='auto'>
      <Grid>
        <AdoptionWishedCardList />
      </Grid>
      <Grid width='auto' padding='20px'>
        <AdoptionSearchInput />
      </Grid>
      <Grid>
        <Tag ref={cur} onClick={activeCurButton}>최신순</Tag>
        <Tag ref={old} onClick={activeOldButton} >등록순</Tag>
        <AdoptionCardList />
      </Grid>
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

export default Adoption;
