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

const TakeAdoptionApply = (props) => {
  const dispatch = useDispatch();
  const fosterFormId = props.match.params.id;
  const detailFosterForm = useSelector((state) => state.apply.detailFosterForm);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    dispatch(applyActions.getDetailPostForm(fosterFormId));
    return () => setShowModal(false);
  }, []);

  if (!detailFosterForm) return <div>로딩중</div>;

  return (
    <React.Fragment>
      <Grid
        display='flex'
        flexDirection='column'
        alignItems='center'
        margin='0 0 160px 0'
        padding='0 35px'
        width='auto'
      >
        <Grid position='relative' height='100px' margin='0 0 16px 0'>
          <BackButton position='absolute' top='65px' left='0' />

          <Title>입양 신청서</Title>
        </Grid>
        <DefaultInfomation />
        <AdoptionReason />
        <AdoptionSurvey />
        <Grid
          position='fixed'
          bottom='91px'
          display='flex'
          justifyContent='space-evenly'
          height='auto'
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
                  window.alert('입양 신청을 거절하셨습니다');
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
