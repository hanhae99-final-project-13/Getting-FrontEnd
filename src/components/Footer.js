import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Grid } from '../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { postActions } from '../redux/modules/post';

const Footer = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const CardCoverInitialization = () => {
    dispatch(postActions.changeCardCover(false));
  };
  return (
    <React.Fragment>
      <Grid
        width='375px'
        margin='0 auto'
        bg='white'
        position='fixed'
        bottom='0px'
        borderRadius='15px 15px 0 0'
        display='flex'
        justifyContent='space-around'
        height='80px'>
        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            alert('아직 페이지 준비중~~');
          }}>
          <FontAwesomeIcon icon={faList} color='black' fontSize='1x' />
          <TEXT size='14px' bold margin='7px 0 0 0'>
            입양지식
          </TEXT>
        </Grid>

        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/adoption');
            CardCoverInitialization();
          }}>
          <FontAwesomeIcon icon={faPen} color='black' fontSize='1x' />
          <TEXT size='14px' bold margin='7px 0 0 0'>
            입양하기
          </TEXT>
        </Grid>

        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/main');
            CardCoverInitialization();
          }}>
          <FontAwesomeIcon icon={faHouseUser} color='black' fontSize='1x' />
          <TEXT size='14px' bold margin='7px 0 0 0'>
            홈
          </TEXT>
        </Grid>

        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/mypage');
          }}>
          <FontAwesomeIcon icon={faUser} color='black' fontSize='1x' />
          <TEXT size='14px' bold margin='7px 0 0 0'>
            마이페이지
          </TEXT>
        </Grid>

        <Grid
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          _onClick={() => {
            history.push('/setting');
          }}>
          <FontAwesomeIcon icon={faHammer} color='black' fontSize='1x' />
          <TEXT size='14px' bold margin='7px 0 0 0'>
            설정하기
          </TEXT>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const TEXT = styled.p`
  text-align: center;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  width: 100%;
  font-weight: ${(props) => (props.bold ? `600` : `400`)};
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
`;

export default Footer;
