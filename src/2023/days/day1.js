import { data } from "../data/1";

export const calculate1 = (arr) => {
  const nums = arr.map((str) => {
    const regex = /\d/g;
    const found = str.match(regex);
    console.log(found);
    const first = found.at(0);
    const last = found.at(-1);
    const num = Number(`${first}${last}`);
    console.log(num);
    return num;
  });
  const sum = nums.reduce(
    (prev, cur) => {
      return Number(prev + cur);
    },
    [0]
  );
  console.log({ sum });
  return sum;
};

export const calculate2 = () => {
  return null;
};

const answer = () => [calculate1(data), calculate2(data)];

export default answer;
