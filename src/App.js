import "./styles.css";
import { Year2023 } from "./2023/2023";
import { Year2021 } from "./2021/2021";
import { useState } from "react";
import React from "react";

const latestyear = "2023";

function View({ year }) {
  console.log("i ran");
  if (year === latestyear) {
    return <Year2023 />;
  } else {
    return <Year2021 />;
  }
}

export function App() {
  const [year, setYear] = useState(latestyear);

  return (
    <div className="App">
       
      <h1> Advent of Code </h1>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="2021">2021</option>
        <option value="2023">2023</option>
      </select>
      <View year={year} />
    </div>
  );
}
