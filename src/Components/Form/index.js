import React from "react";

export default function Form() {
  return (
    <form className="form">
      <label for="day">Choose a day:</label>
      <select name="day" id="day">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <br></br>
      <label for="month">Choose a month!:</label>
      <select name="month" id="month">
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
