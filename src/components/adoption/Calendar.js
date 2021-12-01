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
    <Grid position='relative' width='auto' height='auto'>
      {props.termCheck ? null : <Cover />}
      <DatePicker
        selected={startDate || endDate}
        dateFormat='yyyy-MM-dd'
        onChange={(date) => {
          setStartDate(date);
          setEndDate(date);
          props.changeDate(date);
        }}
        customInput={<ExampleCustomInput />}
        maxDate={new Date()}
        minDate={props.startDate}
      />
    </Grid>
  );
};

const ElButton = styled.button`
  margin: 0;
  padding: 6px 12px;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  font-size: 12px;
`;

const ElP = styled.p`
  height: auto;
  color: #a7a7a7;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.9;
  border-radius: 10px;
  z-index: 1;
`;

export default Calendar;
