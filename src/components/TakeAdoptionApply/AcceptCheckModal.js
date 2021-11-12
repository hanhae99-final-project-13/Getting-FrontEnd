import React from 'react';

import { Grid, Text } from '../../elements';
import AcceptComplete from './AcceptComplete';
import { apis } from '../../lib/axios';
import { SuccessAlert } from '../../shared/Alerts';

const AcceptCheckModal = ({ setShowModal, fosterFormId, name }) => {
  const [showAcceptComplete, setShowAcceptComplete] = React.useState(false);

  React.useEffect(() => {
    return () => setShowAcceptComplete(false);
  }, []);

  return (
    <React.Fragment>
      <Grid
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        position='fixed'
        bottom='91px'
        left='0'
        height='264px'
        bg='white'
        borderRadius='30px 30px 0 0'
        boxShadow='4px 4px 20px rgba(0, 0, 0, 0.1)'
      >
        <img
          src={process.env.PUBLIC_URL + '/img/GUIicon/warning_icon.svg'}
          width='62'
          height='92'
        />
        <Text margin='18px 0 26px 0' weight='700'>
          님의 입양신청을 승인합니다
        </Text>
        <Grid display='flex' justifyContent='center' height='auto'>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            margin='0 10px 0 0'
            width='130px'
            height='40px'
            bg='rgba(254, 121, 104, 0.5)'
            borderRadius='34px'
            _onClick={() => setShowModal(false)}
          >
            <Text margin='0' color='white' size='14px' weight='800'>
              다시 생각해볼게요
            </Text>
          </Grid>
          <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='130px'
            height='40px'
            bg='#FE7968'
            borderRadius='34px'
            _onClick={() => {
              setShowAcceptComplete(true);
              apis
                .applyDecision(fosterFormId, { acceptance: 'accepted' })
                .then((res) => {
                  console.log(res.data);
                  SuccessAlert('입양 신청을 수락하셨습니다');
                })
                .catch((err) => console.log(err));
            }}
          >
            <Text margin='0' color='white' size='14px' weight='800'>
              확인했습니다
            </Text>
          </Grid>
        </Grid>
      </Grid>
      {showAcceptComplete && <AcceptComplete name={name} />}
    </React.Fragment>
  );
};

export default AcceptCheckModal;
