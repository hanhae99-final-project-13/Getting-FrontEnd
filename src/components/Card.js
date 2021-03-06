import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { history } from '../redux/configureStore';
import { Grid, Text } from '../elements';
import { ReceivedAdoptionList } from './mypage';
const Card = (props) => {
  const {
    margin,
    width,
    imageHeight,
    postId,
    breed,
    sex,
    age,
    createdAt,
    modifiedAt,
    ownerType,
    address,
    img,
    isAdopted,
    isShowApply,
    index,
    ApplyDt,
    boxShadow,
    noTag,
  } = props;
  const isDockingDeleteMode = useSelector(
    (state) => state.post.isDockingDeleteMode,
  );
  const isAdoptionDeleteMode = useSelector(
    (state) => state.post.isAdoptionDeleteMode,
  );
  const isAdoptionWait = useSelector((state) => state.post.isAdoptionWait);
  const goDetail = (e) => {
    history.push(`/detail/${postId}`);
  };
  return (
    <React.Fragment>
      <Grid
        position='relative'
        padding='12px 10px'
        width={width ? width : '180px'}
        bg='white'
        border='0.5px solid #E7E5E5'
        borderRadius='10px'
        margin={margin}
        boxShadow={boxShadow}
        _onClick={goDetail}
        cusor='pointer'
      >
        <Grid
          position='absolute'
          top='-29px'
          left='0'
          display={noTag ? 'none' : 'flex'}
          width='auto'
          height='auto'
        >
          <Grid
            width='auto'
            height='auto'
            margin='0 4px 0 0'
            padding='4px 9px'
            border=' 0.5px solid #E7E5E5'
            border={
              ownerType.includes('보호') ||
              ownerType.includes('병원') ||
              ownerType.includes('동물') ||
              ownerType.includes('센터') ||
              ownerType.includes('시청')
                ? '0.8px solid #A4B8FF'
                : '0.8px solid #FFBE5B'
            }
            boxShadow={boxShadow}
            borderRadius='15px'
          >
            <Text margin='0' size='12px' weight='700'>
              {ownerType.includes('보호') ||
              ownerType.includes('병원') ||
              ownerType.includes('동물') ||
              ownerType.includes('센터') ||
              ownerType.includes('시청')
                ? '보호소'
                : ownerType}
            </Text>
          </Grid>
          <Grid
            width='auto'
            height='auto'
            padding='4px 9px'
            border={
              isAdopted === 'ABANDONED'
                ? ' 0.8px solid #FE7968'
                : '0.8px solid #CECBCA'
            }
            boxShadow={boxShadow}
            borderRadius='15px'
          >
            <Text margin='0' size='12px' weight='700'>
              {isAdopted === 'ADOPTED' ? '입양완료' : ''}
              {isAdopted === 'EXPIRED' ? '보호종료' : ''}
              {isAdopted === 'ABANDONED' ? '보호중' : ''}
            </Text>
          </Grid>
        </Grid>
        {isDockingDeleteMode && <DeleteButton />}
        {isAdoptionDeleteMode && <EditButton />}
        {isAdoptionDeleteMode && <DeleteButton />}
        <ImageBox imageHeight={imageHeight} img={img}>
          {isAdoptionWait && (
            <CardCover imageHeight={imageHeight}>
              <Text margin='0' size='12px' weight='700' color='white'>
                잠시 살펴보고 있어요. 조금만 기다려주세요!
              </Text>
              <Grid
                display='flex'
                position='absolute'
                bottom='11px'
                right='9px'
                alignItems='center'
                width='auto'
                height='auto'
              >
                <img
                  width='10'
                  height='11'
                  style={{ background: 'white' }}
                  src={process.env.PUBLIC_URL + '/img/icon/document_icon.svg'}
                />
                <Text
                  margin='0 6px 0 5px'
                  size='12px'
                  weight='700'
                  color='white'
                >
                  신청날짜
                </Text>
                <Text margin='0' size='12px' weight='700' color='white'>
                  {ApplyDt}
                </Text>
              </Grid>
            </CardCover>
          )}
        </ImageBox>
        <Grid display='flex' width='auto' margin='5px 0 5px 0'>
          <img
            width='14'
            height='14'
            src={
              sex === 'M'
                ? process.env.PUBLIC_URL + '/img/icon/male_icon.svg'
                : process.env.PUBLIC_URL + '/img/icon/female_icon.svg'
            }
          />
          <Text margin='0 0 0 4px' size='14px' weight='800'>
            {breed ? breed.split('[개]').reverse()[0] : ''}
          </Text>
        </Grid>
        <Grid
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='auto'
        >
          <Grid
            display='flex'
            alignItems='center'
            width='auto'
            margin='0 0 6px 0'
          >
            <img
              width='10'
              height='12'
              src={process.env.PUBLIC_URL + '/img/icon/clock_icon.svg'}
            />
            <ElP>
              {modifiedAt
                ? modifiedAt.split('T')[0].replace(/-/g, '.')
                : createdAt}{' '}
            </ElP>
          </Grid>
        </Grid>
        <Grid display='flex' alignItems='center' width='auto'>
          <img
            width='10'
            height='12'
            src={process.env.PUBLIC_URL + '/img/icon/location_icon.svg'}
          />
          <ElP>{address}</ElP>
        </Grid>
      </Grid>
      {isShowApply && <ReceivedAdoptionList index={index} />}
    </React.Fragment>
  );
};

Card.defaultProps = {
  margin: null,
};
const ElP = styled.p`
  width: auto;
  margin: 0 0 0 4px;
  font-size: 12px;
  text-align: center;
`;

const ImageBox = styled.div`
  position: relative;
  margin-bottom: 8px;
  width: 100%;
  ${(props) =>
    props.imageHeight ? `height: ${props.imageHeight};` : `height: 100px;`}
  background: url(${(props) =>
    props.img
      ? props.img
      : 'http://rgo4.com/files/attach/images/2681740/682/850/029/5993dcd644b29c202130d9204e876693.jpeg'})
        no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;
const DeleteButton = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 0;
  right: 0;
  border-radius: 14px;
  background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Cancel_icon.svg/1200px-Cancel_icon.svg.png')
    no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const EditButton = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 0;
  right: 30px;
  border-radius: 14px;
  background: url('https://cdn.iconscout.com/icon/free/png-256/edit-2653317-2202989.png')
    no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const CardCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  ${(props) =>
    props.imageHeight ? `height: ${props.imageHeight};` : `height: 100px;`}
  background-color: rgba(49, 49, 49, 0.7);
  border-radius: 10px;
`;
export default Card;
