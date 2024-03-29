import day1 from "./days/day1";
import day2 from "./days/day2";
import day3 from "./days/day3";
import day4 from "./days/day4";
import day5 from "./days/day5";
import day6 from "./days/day6";
import day7 from "./days/day7";
import { Calendar } from "../Calendar";
import React from "react";

export function Year2021() {
  const answers = [day1, day2, day3, day4, day5, day6, day7];

  return <Calendar answers={answers} />;
}
