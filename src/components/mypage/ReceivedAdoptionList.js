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
        padding='16px 0'
        height='auto'
        bg='#fff'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'
        borderRadius='20px'
      >
        {myPostList[index].formPreviews.map((preview) => {
          return (
            <Grid
              display='flex'
              justifyContent='space-evenly'
              width='auto'
              height='auto'
              margin='13px'
              _onClick={() => {
                history.push(`/takeapply/${preview.fosterFormId}`);
              }}
            >
              <Text margin='0' bold>
                {preview.name}
              </Text>
              <Text margin='0'>
                ({preview.gender}, {preview.fosterAge})
              </Text>
              <Text margin='0'>{preview.phone}</Text>
              <Image margin='0' size='21' />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default ReceivedAdoptionList;
