import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Text, Image } from '../../elements';
import { history } from '../../redux/configureStore';

const ReceivedAdoptionList = ({ index }) => {
  const myPostList = useSelector((state) => state.post.myPostList);

  return (
    <React.Fragment>
      <Grid
        margin='24px 0'
        padding='24px 10px'
        height='auto'
        width='auto'
        bg='#fff'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'
        borderRadius='15px'
      >
        {myPostList[index].formPreviews.map((preview) => {
          return (
            <Grid
              display='flex'
              justifyContent='space-between'
              width='auto'
              height='auto'
              _onClick={() => {
                history.push(`/takeapply/${preview.fosterFormId}`);
              }}
            >
              <Text margin='0' size='12px' weight='800'>
                {preview.name}
              </Text>
              <Text margin='0' size='12px'>
                ({preview.gender === 'F' ? '여' : '남'}, {preview.fosterAge})
              </Text>
              <Text margin='0' size='12px'>
                {preview.phone}
              </Text>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default ReceivedAdoptionList;
