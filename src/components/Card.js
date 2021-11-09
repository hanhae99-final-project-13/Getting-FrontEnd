import React from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Image, Text } from '../elements';
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
    name,
    gender,
    fosterAge,
    phone,
    fosterAddress,
    isShowApply,
  } = props;
  const dispatch = useDispatch();
  const isDockingDeleteMode = useSelector(
    (state) => state.post.isDockingDeleteMode,
  );
  const isAdoptionDeleteMode = useSelector(
    (state) => state.post.isAdoptionDeleteMode,
  );
  const isAdoptionWait = useSelector((state) => state.post.isAdoptionWait);
  const goDetail = () => {
    history.push(`/detail/${postId}`);
  };
  return (
    <React.Fragment>
      <Grid
        position='relative'
        width={width ? width : '180px'}
        padding='1rem'
        borderRadius='10px'
        margin={margin}
        boxShadow='10px 10px 20px rgba(0, 0, 0, 0.1)'
        _onClick={goDetail}
      >
        <Tag>
          <ElP>{ownerType ? ownerType : '임시보호중'}</ElP>
        </Tag>
        <Tag2>
          <ElP>{isAdopted ? isAdopted : '임시보호중'}</ElP>
        </Tag2>
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
                <Image size='12' margin='0' />
                <Text margin='0' size='12px' weight='700' color='white'>
                  신청날짜
                </Text>
                <Text margin='0' size='12px' weight='700' color='white'>
                  2021.10.27
                </Text>
              </Grid>
            </CardCover>
          )}
        </ImageBox>
        <Grid display='flex' width='auto' margin='5px 0 5px 0'>
          <Text margin='0 10px 0 0' size='14px' bold>
            {breed ? breed.split('[개]').reverse()[0] : ''}
          </Text>
          <Text margin='0' size='14px'>
            {sex ? sex : '남아'}/{age ? age : '2018년생'}
          </Text>
        </Grid>
        <Grid display='flex' width='auto'>
          <Image size='8' />
          <ElP>
            {createdAt ? createdAt : '2021.10.24'} &nbsp;&nbsp;&nbsp;&nbsp;
          </ElP>
          <Image size='8' />
          <ElP>{address ? address : '경기도 수원'}</ElP>
        </Grid>
      </Grid>
      {isShowApply && <ReceivedAdoptionList />}
    </React.Fragment>
  );
};

Card.defaultProps = {
  margin: null,
};
const ElP = styled.p`
  width: auto;
  margin: 0;
  font-size: 8px;
  text-align: center;
`;
const Tag = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  height: auto;
  padding: 3px 6px;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const Tag2 = styled.div`
  position: absolute;
  top: -10px;
  left: 100px;
  height: auto;
  padding: 3px 6px;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const ImageBox = styled.div`
  position: relative;
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
