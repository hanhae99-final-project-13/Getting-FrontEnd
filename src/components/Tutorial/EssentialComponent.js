import React from 'react';
import { Grid, Text, Image } from '../../elements';

const EssentialComponent = (props) => {
  const { url, content, number } = props;

  return (
    <Grid is_flex width='300px' margin='37px 0 0 0' padding='0 35px'>
      <Text margin='0 4px 0 0' size='14px' line_height='22px'>
        {number + 1}.
      </Text>
      <Grid>
        <Text margin='0' size='14px' line_height='22px' bold>
          {content}
        </Text>
        <Grid
          margin='5px 0 0 0'
          width='249px'
          height='166px'
          bgi={url}
          bgisize='contain'
          bgiposition='center'
          bgirepeat='no-repeat'></Grid>
      </Grid>
    </Grid>
  );
};

export default EssentialComponent;
