import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Grid } from '../elements';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid
        boxSizing='border-box'
        padding='0 20px'
        position='fixed'
        top='0px'
        borderRadius='0 0 15px 15px '
        display='flex'
        justifyContent='space-between'
        height='80px'>
        <Grid display='flex' alignItems='center'>
          <Grid
            borderRadius='3px'
            width='45px'
            height='45px'
            bg='white'
            display='flex'
            alignItems='center'
            justifyContent='center'>
            <FontAwesomeIcon icon={faChevronLeft} color='black' fontSize='1x' />
          </Grid>
        </Grid>

        <Grid display='flex' alignItems='center'>
          <TEXT size='20px' bold margin='0'>
            도킹
          </TEXT>
        </Grid>

        <Grid display='flex' alignItems='center' justifyContent='flex-end'>
          <Grid
            borderRadius='3px'
            width='45px'
            height='45px'
            bg='white'
            display='flex'
            alignItems='center'
            justifyContent='center'>
            <FontAwesomeIcon icon={faBell} color='black' fontSize='1x' />
          </Grid>
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

export default Header;
