// import { data } from "../data/6";

const data = [3, 4, 3, 1, 2];

// part 1

export const calculate1 = (input, days) => {
  // THIS DOESN'T SCALE WELL B/C IS O(n^2)

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
  //// Full disclosure got this solution from the adventofcode subreddit
  // (https://github.com/sk1talets/advent-of-code/blob/main/2021/6/script.2.js)

  //// scales better because is O(n)

  let fishes = Array.from(input);

  // the only possible timer options are 0 - 8
  const fishesAtEachInternalTimerValue = Array(9).fill(0);

  // count the number of fish at every timer point for the initial day
  fishes.forEach((fishInternalTimerValue) => {
    fishesAtEachInternalTimerValue[fishInternalTimerValue] += 1;
  });

  //
  for (let i = 0; i < days; i++) {
    // on each day,
    // remove the fish at counter time 0
    const numberOfFishThatWillReproduce =
      fishesAtEachInternalTimerValue.shift();

    // move the fish at counter time 0 to counter time 6
    fishesAtEachInternalTimerValue[6] += numberOfFishThatWillReproduce;

    // push the number of fish that were counter time 0 to the end of the array
    // because they've generated new fish
    fishesAtEachInternalTimerValue.push(numberOfFishThatWillReproduce);
  }

  // sum all the fish at each counter point together
  return fishesAtEachInternalTimerValue.reduce(
    (total, fishCount) => total + fishCount
  );
};

// answers

const answer = () => [calculate1(data, 80), calculate2(data, 256)];

export default answer;
