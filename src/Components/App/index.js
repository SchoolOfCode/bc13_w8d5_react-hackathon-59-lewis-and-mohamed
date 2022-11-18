import "./App.css";
import Form from "../Form";
import { useState, useEffect } from "react";

function App() {
  const [date, setDate] = useState({
    day: 1,
    month: 1,
  });
  useEffect(() => {
    async function getDate() {
      const response = await fetch(`http://numbersapi.com/1/1/date?json`);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setDate(data);
    }
    getDate();
  }, []);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
