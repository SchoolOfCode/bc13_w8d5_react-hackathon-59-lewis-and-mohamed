import "./App.css";
import Form from "../Form";
import Fact from "../Fact";
import { useState, useEffect } from "react";

function App() {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);

  function handleDay(e) {
    console.log('changing day')
    setDay(e.target.value)
  }
  function handleMonth(e) {
    setMonth(e.target.value)
  }

  return (
    <div className="App">
      <Form day={day} month={month}/>
      <Fact handleDay={(e)=>{handleDay(e)}} handleMonth={(e)=>{handleMonth(e)}}/>
    </div>
  );
}

export default App;
