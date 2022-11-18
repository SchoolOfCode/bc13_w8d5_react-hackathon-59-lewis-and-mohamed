import React from "react";
import "./index.css"
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Fact({ day, month }) {
    const [fact, setFact] = useState()
    const [factHistory, setFactHistory] = useState([])

    useEffect(() => {
        async function getDate() {
          console.log(day, month)
          const response = await fetch(`http://numbersapi.com/${month}/${day}/date?json`);
          const data = await response.json();
          console.log(data);
          setFactHistory(() => ([...factHistory, fact]))
          console.log(fact)
          setFact(data.text);
          console.log(fact)
        }
        getDate();
      }, [day, month]);
//list underneath displays previous facts
  return (
    <div className="facts">
        <p className="current-fact">{fact}</p>
        <div className="fact-history">
          <h3>Previous Facts</h3>
          <ul>
            {factHistory.map((fact) => (
              <li key={uuidv4()}>{fact}</li>
            ))}
          </ul>
        </div>
        
    </div>
  );
}
