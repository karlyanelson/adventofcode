import { data } from "../data/6";

// const data = [3, 4, 3, 1, 2];

// part 1

export const calculate1 = (input, days) => {
  // THIS DOESN'T SCALE WELL B/C IS O(log2 n)

  let arr = Array.from(input);

  for (let i = 0; i < days; i++) {
    arr.forEach((item, index) => {
      if (item === 0) {
        arr.push(8);
        arr[index] = 6;
      } else {
        arr[index] = item - 1;
      }
    });
  }

  return arr.length;
};

// part 2

export const calculate2 = (input, days) => {
  //// Full disclosure got this solution from the adventofcode subreddit (https://github.com/sk1talets/advent-of-code/blob/main/2021/6/script.2.js)
  //// scales better because is O(log n)

  let arr = Array.from(input);
  const counts = Array(9).fill(0);

  arr.forEach((n) => (counts[n] += 1));

  for (let i = 0; i < days; i++) {
    const newCount = counts.shift();
    counts[6] += newCount;
    counts.push(newCount);
  }

  return counts.reduce((count, total) => count + total);
};

// answers

const answer = () => [calculate1(data, 80), calculate2(data, 256)];

export default answer;
