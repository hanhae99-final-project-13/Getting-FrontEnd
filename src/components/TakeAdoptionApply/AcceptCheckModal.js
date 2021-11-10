import React from 'react';

import { Grid, Image, Text } from '../../elements';
import AcceptComplete from './AcceptComplete';

const AcceptCheckModal = ({ setShowModal }) => {
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
        <Image size='50' />
        <Text>님의 입양신청을 승인합니다</Text>
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
            _onClick={() => setShowAcceptComplete(true)}
          >
            <Text margin='0' color='white' size='14px' weight='800'>
              확인했습니다
            </Text>
          </Grid>
        </Grid>
      </Grid>
      {showAcceptComplete && <AcceptComplete />}
    </React.Fragment>
  );
};

export default AcceptCheckModal;
