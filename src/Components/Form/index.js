import React from "react";
import './index.css'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useState } from "react";

export default function Form({ handleDay, handleMonth }) {
  const [date, setDate] = useState(new Date());

  function calendarUpdate() {
    const day = date.getDate();
    handleDay(day)
    const month = date.getMonth() + 1;
    handleMonth(month)
  } 

  calendarUpdate()
  
  return (
    <div class="calendar">
      <Calendar inDetail="month" onChange={(event) => {setDate(event); calendarUpdate();}} value={date} />
    </div>
  );
}
