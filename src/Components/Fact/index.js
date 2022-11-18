import React from "react";
import "./index.css"
import { useEffect, useState } from "react";

export default function Fact({ day, month }) {
    const initialFact= {
        "text": "January 1st is the day in 69 that the Roman legions in Germania Superior refuse to swear loyalty to Galba.",
        "year": 69,
        "number": 1,
        "found": true,
        "type": "date"
      }
    const [fact, setFact] = useState(initialFact)
    const [factHistory, setFactHistory] = useState([])

    useEffect(() => {
        async function getDate() {
          const response = await fetch(`http://numbersapi.com/${month}/${day}/date?json`);
          const data = await response.json();
          console.log(data);
          setFactHistory(() => ([...factHistory, fact.text]))
          setFact(data);
        }
        getDate();
      }, [day, month]);
//list underneath displays previous facts
  return (
    <div className="facts">
        <p className="current-fact">{fact.text}</p>
        <div className="fact-history">
          <h3>Previous Facts</h3>
          <ul>
            {factHistory.map((fact) => (
              <li>{fact}</li>
            ))}
          </ul>
        </div>
        
    </div>
  );
}
