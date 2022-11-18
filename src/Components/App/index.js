import "./App.css";
import Form from "../Form";
import Fact from "../Fact";

import { useState } from "react";

function App() {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();

  function handleDay(day) {
    console.log('updating day')
    setDay(day);
  }
  function handleMonth(month) {
    setMonth(month);
  }

  return (
    <div className="App">
      <h1>On This Day</h1>
      <Form
        handleDay={(e) => {
          handleDay(e);
        }}
        handleMonth={(e) => {
          handleMonth(e);
        }}
      />
      <Fact day={day} month={month} />
    </div>
  );
}

export default App;
