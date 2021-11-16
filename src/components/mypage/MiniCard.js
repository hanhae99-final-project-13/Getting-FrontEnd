import React from 'react';

import { Grid, Text } from '../../elements';
import { ReceivedAdoptionList } from '.';
import { history } from '../../redux/configureStore';

const MiniCard = ({
  width,
  imageHeight,
  key,
  breed,
  sex,
  modifiedAt,
  address,
  img,
  postId,
  isShowApply,
  index,
}) => {
  const goDetail = () => {
    history.push(`/detail/${postId}`);
  };
  return (
    <React.Fragment>
      <Grid
        display='flex'
        padding='10px'
        height='81px'
        width='auto'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
        borderRadius='10px'
      >
        <Grid
          margin='0 10px 0 0'
          width='39%'
          bg={`url(${img}) center / cover`}
          borderRadius='10px'
        />
        <Grid
          display='flex'
          flexDirection='column'
          justifyContent='space-around'
          width='61%'
          _onClick={goDetail}
        >
          <Grid
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            height='auto'
          >
            <Text margin='0' size='12px' weight='800'>
              {breed}
            </Text>
            <img
              width='7'
              src={
                sex === 'F'
                  ? process.env.PUBLIC_URL + '/img/icon/female_icon_pink.svg'
                  : process.env.PUBLIC_URL + '/img/icon/male_icon_blue.svg'
              }
            />
          </Grid>
          <Grid display='flex' alignItems='center' height='auto'>
            <img
              width='11'
              src={process.env.PUBLIC_URL + '/img/icon/clock_icon.svg'}
            />
            <Text margin='0 0 0 5px' size='12px' weight='400'>
              {modifiedAt.split('T')[0].replace(/-/g, '.')}
            </Text>
          </Grid>
          <Grid display='flex' alignItems='center' height='auto'>
            <img
              width='10'
              src={process.env.PUBLIC_URL + '/img/icon/location_icon.svg'}
            />
            <Text margin='0 0 0 5px' size='12px' weight='400'>
              {address}
            </Text>
          </Grid>
        </Grid>
      </Grid>
      {isShowApply && <ReceivedAdoptionList index={index} />}
    </React.Fragment>
  );
};

export default MiniCard;
