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
        padding='8px 20px'
        height='auto'
        width='auto'
        bg='#fff'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1);'
        borderRadius='15px'
        boxSizing='border-box'
      >
        {myPostList[index].formPreviews.map((preview) => {
          return (
            <Grid
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              margin='12px 0'
              width='auto'
              height='auto'
              _onClick={() => {
                history.push(`/takeapply/${preview.fosterFormId}`);
              }}
              cusor='pointer'
            >
              <Grid display='flex' width='auto'>
                <Text margin='0 8px 0 0' size='12px' weight='800'>
                  {preview.name}
                </Text>
                {preview.eduStatus.심화지식2 && (
                  <img
                    src={
                      process.env.PUBLIC_URL + '/img/icon/hard2_mini_icon.svg'
                    }
                  />
                )}
                {!preview.eduStatus.심화지식2 && preview.eduStatus.심화지식 && (
                  <img
                    src={
                      process.env.PUBLIC_URL + '/img/icon/hard1_mini_icon.svg'
                    }
                  />
                )}
                {!preview.eduStatus.심화지식 &&
                  !preview.eduStatus.심화지식2 && (
                    <img
                      src={
                        process.env.PUBLIC_URL + '/img/icon/must_mini_icon.svg'
                      }
                    />
                  )}

                <Text margin='0 8px' size='12px'>
                  ({preview.gender === 'F' ? '여' : '남'}, {preview.fosterAge})
                </Text>
                <Text margin='0 8px 0 0' size='12px'>
                  {preview.fosterAddress}
                </Text>
              </Grid>
              {preview.acceptance === 'accepted' && (
                <Acceptance bg='#FE7968'>승인</Acceptance>
              )}
              {preview.acceptance === 'rejected' && (
                <Acceptance bg='#CECBCA'>반려</Acceptance>
              )}
              {preview.acceptance === 'waiting' && (
                <Acceptance bg='#FFD18C'>대기</Acceptance>
              )}
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

const Acceptance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 21px;
  background-color: ${(props) => props.bg};
  color: white;
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
`;

export default ReceivedAdoptionList;
