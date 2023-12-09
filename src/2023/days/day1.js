import { data } from "../data/1";

export const calculate1 = (arr) => {
  const nums = arr.map((str) => {
    const regex = /\d/g;
    const found = str.match(regex);
    const first = found.at(0);
    const last = found.at(-1);
    const num = Number(`${first}${last}`);
    return num;
  });
  const sum = nums.reduce(
    (prev, cur) => {
      return Number(prev + cur);
    },
    [0]
  );
  return sum;
};

const digits = [
  { label: "one", value: 1 },
  { label: "two", value: 2 },
  { label: "three", value: 3 },
  { label: "four", value: 4 },
  { label: "five", value: 5 },
  { label: "six", value: 6},
  { label: "seven", value: 7 },
  { label: "eight", value: 8 },
  { label: "nine", value: 9 },
];

export const replaceStringWithNumbers = (str) => {
  let updatedStr = str;
  digits.forEach(({label, value}) => {
    updatedStr = updatedStr.replaceAll(`${label}`, `${label}${value}${label}`);
  });
  return updatedStr;
};

export const calculate2 = (arr) => {
  const updatedArr = arr.map(item => replaceStringWithNumbers(item));
  return calculate1(updatedArr);
};

const answer = () => [calculate1(data), calculate2(data)];

export default answer;
