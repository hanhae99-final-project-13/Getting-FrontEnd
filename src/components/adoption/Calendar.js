import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const ExampleCustomInput = ({ value, onClick }) => (
    <ElButton onClick={onClick}>{value}</ElButton>
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};

const ElButton = styled.button`
  display: none;
  width: 70px;
  padding: 7px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  font-size: 4px;
`;

export default Calendar;
