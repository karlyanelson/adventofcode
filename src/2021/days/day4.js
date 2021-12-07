// import { data } from "../data/4";

const data = {
  nums: [
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
    20, 8, 19, 3, 26, 1,
  ],
  boards: [
    [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19],
    ],
    [
      [3, 15, 0, 2, 22],
      [9, 18, 13, 17, 5],
      [19, 8, 7, 25, 23],
      [20, 11, 10, 24, 4],
      [14, 21, 16, 12, 6],
    ],
    [
      [14, 21, 17, 24, 4],
      [10, 16, 15, 9, 19],
      [18, 8, 23, 26, 20],
      [22, 11, 13, 6, 5],
      [2, 0, 12, 3, 7],
    ],
  ],
};

// part 1

const matchNums = (arr) => {
  let matched = arr.boards;

  // for (const num of data.nums) {
  //   matched = matched.map((board) =>
  //     board.map((row) =>
  //       row.map((col) => {
  //         if (col === num || col.number === num) {
  //           return { number: col, matched: true };
  //         } else {
  //           return { number: col, matched: false };
  //         }
  //       })
  //     )
  //   );
  // }
  console.log({ matched });

  return matched;
};

export const getWinningBoard = (arr) => {
  matchNums(arr);
};

export const winningBoardScore = (arr) => {};
export const calculate1 = (arr) => {
  getWinningBoard(arr);
};

// part 2
export const calculate2 = (arr) => {};

// answers

const part1 = calculate1(data);
const part2 = calculate2(data);

const answer = [part1, part2];

export default answer;
