import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../../elements';

const AdoptionSurvey = () => {
  const [reason, setReason] = React.useState('');
  const [showSurvey, setShowSurvey] = React.useState(false);

  const showSurveyToggle = () => {
    setShowSurvey(!showSurvey);
  };

  React.useEffect(() => {
    return () => setShowSurvey(false);
  }, []);

  return (
    <React.Fragment>
      <Grid
        padding='15px 0'
        height='auto'
        borderBottom='1px solid rgba(225, 225, 225, 0.5)'
      >
        <Grid
          width='auto'
          height='auto'
          bg='95% 50% / contain no-repeat url(https://img.favpng.com/22/6/16/menu-arrow-icon-png-favpng-2GXTGtbaeyDpB41Kwnus43bEC_t.jpg) '
          _onClick={showSurveyToggle}
        >
          <Text margin='0' weight='700' size='20px'>
            입양 사유
          </Text>
        </Grid>
      </Grid>
      {showSurvey ? <Textarea>입양사유</Textarea> : ''}
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
