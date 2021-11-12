import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AcceptCheckModal,
  AdoptionReason,
  AdoptionSurvey,
  DefaultInfomation,
} from '../components/TakeAdoptionApply';
import { Grid, Text } from '../elements';
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
        <Text margin='0' weight='800' size='20px'>
          입양 신청서
        </Text>
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
        />
      )}
    </React.Fragment>
  );
};

export default TakeAdoptionApply;
