import "./App.css";
import Form from "../Form";
import Fact from "../Fact";
import { useState } from "react";

function App() {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);

  function handleDay(e) {
    setDay(e.target.value);
    console.log("changing day", e.target.value);
  }
  function handleMonth(e) {
    setMonth(e.target.value);
    console.log("changing month", e.target.value);
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
