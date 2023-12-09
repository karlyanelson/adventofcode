import React from "react";
import { useState } from "react";

function DayButton({ day, onClick }) {
  return <button onClick={onClick}>{day}</button>;
}

export function Calendar({ answers }) {
  const [answer, setAnswer] = useState(["no answer", "no answer"]);
  const [selectedDay, setSelectedDay] = useState(null);

  const isEven = selectedDay % 2 === 0;

  const noAnswers = new Array(25 - answers.length).fill(0);

  let emptyDays = [];

  noAnswers.forEach((day, index) => {
    emptyDays.push(answers.length + index + 1);
  });

  return (
    <div>
      <div aria-live="polite" aria-atomic="true">
        {selectedDay && (
          <div className="answers">
            <h2>
              <span>Answers for</span>{" "}
              <span
                className="answers-day"
                style={{ background: isEven ? "green" : "red" }}
              >
                <span> Day {selectedDay}</span> 
              </span>
            </h2>
            <div>
              {answer.map((ans, index) => (
                <p key={`answers_${index}`}>
                  <span>Part&nbsp;{index + 1}:<code>{ans ? JSON.stringify(ans) : "TBD"}</code></span>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid">
        {answers.map((day, index) => (
          <div className="grid-item" key={`dayButton_${index}`}>
            <DayButton
              day={index + 1}
              onClick={() => {
                setAnswer(day());
                setSelectedDay(index + 1);
              }}
            />
          </div>
        ))}
        {emptyDays &&
          emptyDays.map((day, index) => (
            <div key={`emptyDays_${index}`} className="grid-item">
              {day}
            </div>
          ))}
      </div>
    </div>
  );
}
