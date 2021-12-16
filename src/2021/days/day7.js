import { data } from "../data/7";

// const data = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

// part 1

export const determineFuelAtPosition = (input, position) => {
  let fuel = 0;

  input.forEach((item) => {
    if (position >= item) {
      fuel += position - item;
    } else {
      fuel += item - position;
    }
  });
  return fuel;
};

export const calculate1 = (input) => {
  const sortLowToHigh = (a, b) => {
    return a - b;
  };

  const sorted = input.slice().sort(sortLowToHigh);

  const lowestNum = sorted[0];
  const highestNum = sorted[input.length - 1];

  let fuelOptions = [];

  for (let i = lowestNum; i <= highestNum; i++) {
    fuelOptions.push(determineFuelAtPosition(input, i));
  }

  const sortedFuelOptions = fuelOptions.sort(sortLowToHigh);

  return sortedFuelOptions[0];
};

// part 2

export const calculate2 = (input) => {};

// answers

const answer = () => [calculate1(data), calculate2(data)];

export default answer;
