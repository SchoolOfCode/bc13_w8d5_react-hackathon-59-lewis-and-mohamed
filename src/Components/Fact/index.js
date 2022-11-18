import React from "react";
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

    useEffect(() => {
        async function getDate() {
          const response = await fetch(`http://numbersapi.com/${month}/${day}/date?json`);
          const data = await response.json();
          console.log(data);
          setFact(data);
        }
        getDate();
      }, [day, month]);

  return (
    <div>
        <p>{fact.text}</p>
    </div>
  );
}
