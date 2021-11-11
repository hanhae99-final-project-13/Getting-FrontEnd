import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';

const AdoptionSurvey = () => {
  const [reason, setReason] = React.useState('');
  const [showReason, setShowReason] = React.useState(false);

  React.useEffect(() => {
    return () => setShowReason(false);
  }, []);

  return (
    <React.Fragment>
      <Grid
        padding='15px 0'
        height='auto'
        borderBottom='1px solid rgba(225, 225, 225, 0.5)'
      >
        <Grid
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='auto'
          height='auto'
          _onClick={() => setShowReason(!showReason)}
        >
          <Text margin='0' weight='700' size='20px'>
            입양 사유
          </Text>
          <img
            width='16px'
            height='12px'
            src={process.env.PUBLIC_URL + '/img/icon/downarrow.svg'}
          />
        </Grid>
      </Grid>
      {showReason ? <Textarea>입양사유</Textarea> : ''}
    </React.Fragment>
  );
};

const Textarea = styled.p`
  width: 100%;
  height: 249px;
  background-color: #f7f7f7;
  border-radius: 15px;
  border: none;
  padding: 19px;
  box-sizing: border-box;
`;

export default AdoptionSurvey;
