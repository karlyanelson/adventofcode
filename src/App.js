import "./styles.css";
import { useState } from "react";
import day1 from "./2021/days/day1";
import day2 from "./2021/days/day2";
import day3 from "./2021/days/day3";
import day4 from "./2021/days/day4";
import day5 from "./2021/days/day5";
import day6 from "./2021/days/day6";
import day7 from "./2021/days/day7";
import DayButton from "./DayButton";

export function App() {
  const [answer, setAnswer] = useState(["no answer", "no answer"]);
  const [selectedDay, setSelectedDay] = useState(null);

  const isEven = selectedDay % 2 === 0;

  const answers = [day1, day2, day3, day4, day5, day6, day7];

  const noAnswers = new Array(25 - answers.length).fill(0);

  let emptyDays = [];

  noAnswers.forEach((day, index) => {
    emptyDays.push(answers.length + index + 1);
  });

  return (
    <div className="App">
      <h1>Advent of Code 2021</h1>

      <div aria-live="polite" aria-atomic="true">
        {selectedDay && (
          <div className="answers">
            <h2>
              Answers for{" "}
              <span
                className="answers-day"
                style={{ background: isEven ? "green" : "red" }}
              >
                Day {selectedDay}
              </span>
            </h2>
            <div>
              {answer.map((ans, index) => (
                <p key={`answers_${index}`}>
                  Part&nbsp;{index + 1}:<code>{ans || "TBD"}</code>
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
