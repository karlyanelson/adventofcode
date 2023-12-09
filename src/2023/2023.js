import React from "react";
import { Calendar } from "../Calendar";
import day1 from "./days/day1";
import day2 from "./days/day2";

export function Year2023() {
  const answers = [day1, day2];

  return (
    <Calendar answers={answers} />
  );
}
