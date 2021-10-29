import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Grid } from '../../elements';

const Calendar = (props) => {
  // const { startDate, endDate } = props;
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const ExampleCustomInput = ({ value, onClick }) => (
    <ElButton onClick={onClick}>{value}</ElButton>
  );

  return (
    <Grid width='auto' height='auto'>
      <DatePicker
        selected={startDate}
        dateFormat='yyyy-MM-dd'
        onChange={(date) => {
          setStartDate(date);
          props.changeDate(date);
        }}
        customInput={<ExampleCustomInput />}
        maxDate={new Date()}
      />
    </Grid>
  );
};

const ElButton = styled.button`
  margin: 0;
  padding: 8px 6px;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  font-size: 10px;
`;

const ElP = styled.p`
  height: auto;
  color: #a7a7a7;
`;

export default Calendar;
