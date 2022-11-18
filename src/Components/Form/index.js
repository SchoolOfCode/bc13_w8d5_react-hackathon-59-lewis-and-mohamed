import React from "react";

export default function Form({ handleDay, handleMonth }) {
  //   function temp(e) {
  //     console.log(e.target.value)
  //   }
  return (
    <form className="form">
      <label htmlFor="day">Choose a day:</label>
      <select name="day" id="day" onChange={handleDay}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <br></br>
      <label htmlFor="month">Choose a month!:</label>
      <select name="month" id="month" onChange={handleMonth}>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
      </select>
      <br></br>
      <button>Generate Fact</button>
    </form>
  );
}
