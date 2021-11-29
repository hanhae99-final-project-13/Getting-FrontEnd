import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';

const AdoptionSurvey = () => {
  const detailFosterForm = useSelector((state) => state.apply.detailFosterForm);
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
        cusor='pointer'
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
      {showReason ? <Textarea>{detailFosterForm.reason}</Textarea> : ''}
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
