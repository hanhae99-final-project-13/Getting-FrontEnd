import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {
  AcceptCheckModal,
  AdoptionReason,
  AdoptionSurvey,
  DefaultInfomation,
} from '../components/TakeAdoptionApply';
import { Grid, Text } from '../elements';
import { BackButton, Logo } from '../components';
import { applyActions } from '../redux/modules/apply';
import { apis } from '../lib/axios';
import { history } from '../redux/configureStore';
import { ErrorAlert } from '../shared/Alerts';

const TakeAdoptionApply = (props) => {
  const dispatch = useDispatch();
  const fosterFormId = props.match.params.id;
  const detailFosterForm = useSelector((state) => state.apply.detailFosterForm);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    dispatch(applyActions.getDetailPostForm(fosterFormId));
    return () => setShowModal(false);
  }, []);

  return (
    <React.Fragment>
      <Grid
        position='relative'
        display='flex'
        flexDirection='column'
        alignItems='center'
        margin='0 auto 160px auto'
        padding='59px 35px 0 35px'
        maxWidth='414px'
        width='auto'
      >
        <BackButton position='absolute' top='21px' left='35px' />
        <Text
          position='absolute'
          top='17px'
          right='calc(50% - 48px)'
          margin='0'
          size='20px'
          weight='800'
        >
          입양 신청서
        </Text>
        <Grid
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          width='262px'
          height='156px'
          margin='0 auto 10px auto'
          bg='white'
          borderRadius='10px'
          boxShadow='4px 4px 20px rgba(87, 87, 87, 0.1)'
        >
          <Text margin='0 0 12px 0' size='16px' weight='700'>
            '{detailFosterForm.name}'님의 이수현황
          </Text>
          <img
            width='81.73'
            src={process.env.PUBLIC_URL + '/img/GUIicon/badge_1_icon.svg'}
          />
        </Grid>
        <DefaultInfomation />
        <AdoptionReason />
        <AdoptionSurvey />
        <Grid
          position='fixed'
          bottom='116px'
          display='flex'
          justifyContent='space-evenly'
          height='auto'
          maxWidth='414px'
        >
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='130px'
            height='40px'
            bg='#FFBE5B'
            borderRadius='26px'
            _onClick={() => {
              setShowModal(true);
              apis
                .applyDecision(fosterFormId, { acceptance: 'rejected' })
                .then((res) => {
                  console.log(res.data);
                  ErrorAlert('입양 신청을 거절하셨습니다');
                  history.push('/mypage');
                })
                .catch((err) => console.log(err));
            }}
          >
            <Text margin='0' color='white' size='16px' weight='800'>
              입양 거절하기
            </Text>
          </Grid>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='130px'
            height='40px'
            bg='#fe7968'
            borderRadius='26px'
            _onClick={() => {
              setShowModal(true);
            }}
          >
            <Text margin='0' color='white' size='16px' weight='800'>
              입양 승인하기
            </Text>
          </Grid>
        </Grid>
      </Grid>
      {showModal && (
        <AcceptCheckModal
          setShowModal={setShowModal}
          fosterFormId={fosterFormId}
          name={detailFosterForm.name}
        />
      )}
    </React.Fragment>
  );
};

const Title = styled.span`
  position: absolute;
  top: 61px;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 100px;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`;

export default TakeAdoptionApply;
