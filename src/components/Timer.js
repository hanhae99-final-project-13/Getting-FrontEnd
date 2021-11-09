import React, { useState, useEffect } from 'react';
import { Grid, Text } from '../elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

const Timer = (props) => {
  const [minutes, setMinutes] = useState(parseInt(3));
  const [seconds, setSeconds] = useState(parseInt(0));

  useEffect(() => {
    const countDown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(seconds) === 0) {
          if (parseInt(minutes) === 0) {
            clearInterval(countDown);
          } else {
            setMinutes(parseInt(minutes) - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [minutes, seconds]);

  return (
    <Grid display='flex' alignItems='center'>
      <FontAwesomeIcon icon={faStopwatch} color='#00B412' fontSize='1x' />
      <Text size='14px' weight='800' color='#00B412' margin='0 0 0 6px'>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </Grid>
  );
};
export default Timer;
