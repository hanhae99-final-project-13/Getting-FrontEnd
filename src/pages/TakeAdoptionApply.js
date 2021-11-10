import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import {
  AcceptCheckModal,
  AdoptionReason,
  AdoptionSurvey,
  DefaultInfomation,
} from '../components/TakeAdoptionApply';

import { Grid, Text } from '../elements';

const TakeAdoptionApply = (props) => {
  const fosterFormId = props.match.params.id;
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    return () => setShowModal(false);
  }, []);

  return (
    <React.Fragment>
      <Grid
        display='flex'
        flexDirection='column'
        alignItems='center'
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
          justifyContent='center'
          alignItems='center'
          width='157px'
          height='52px'
          bg='#fe7968'
          borderRadius='26px'
          _onClick={() => setShowModal(true)}
        >
          <Text margin='0' color='white' size='16px' weight='800'>
            입양 승인하기
          </Text>
        </Grid>
      </Grid>
      {showModal && <AcceptCheckModal setShowModal={setShowModal} />}
      <Footer />
    </React.Fragment>
  );
};

export default TakeAdoptionApply;
