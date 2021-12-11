import { data } from "../data/4";

// const data = {
//   nums: [
//     7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
//     20, 8, 19, 3, 26, 1,
//   ],
//   boards: [
//     [
//       [22, 13, 17, 11, 0],
//       [8, 2, 23, 4, 24],
//       [21, 9, 14, 16, 7],
//       [6, 10, 3, 18, 5],
//       [1, 12, 20, 15, 19],
//     ],
//     [
//       [3, 15, 0, 2, 22],
//       [9, 18, 13, 17, 5],
//       [19, 8, 7, 25, 23],
//       [20, 11, 10, 24, 4],
//       [14, 21, 16, 12, 6],
//     ],
//     [
//       [14, 21, 17, 24, 4],
//       [10, 16, 15, 9, 19],
//       [18, 8, 23, 26, 20],
//       [22, 11, 13, 6, 5],
//       [2, 0, 12, 3, 7],
//     ],
//   ],
// };

// part 1

export const getWinningBoardAndNumber = (arr) => {
  // NEED TO MAKE A DEEP COPY OF WHOLE ARRAY SINCE NESTED
  const copy = JSON.parse(JSON.stringify(arr));
  let boards = Array.from(copy.boards);
  let nums = Array.from(copy.nums);
  let winningBoard;
  let winningNumber;

  console.log("boards[2][0][0]", boards[2][0][0]);

  for (const [numIndex, num] of nums.entries()) {
    if (winningBoard) {
      break;
    }
    for (const [boardIndex, board] of boards.entries()) {
      if (winningBoard) {
        break;
      }
      for (const [rowIndex, row] of board.entries()) {
        if (winningBoard) {
          break;
        }
        /// TODO only checking rows, still need to check matching columns

        let matchedRows = row.filter((x) => x === "matched");

        if (matchedRows.length === row.length) {
          winningBoard = boardIndex;
          winningNumber = nums[numIndex - 1];
          console.log({ num });
          break;
        } else {
          for (const [colIndex, col] of row.entries()) {
            if (col === num) {
              boards[boardIndex][rowIndex][colIndex] = "matched";
            }
          }
        }
      }
    }
  }
  return {
    boardIndex: winningBoard,
    winningNumber: winningNumber,
    board: boards[winningBoard],
  };
};

export const winningBoardScore = (arr) => {
  const { winningNumber, board } = getWinningBoardAndNumber(arr);

  const numbers = board.flat().filter((x) => x !== "matched");

  const boardScore = numbers.reduce(
    (prev, cur) => parseInt(prev) + parseInt(cur),
    [0]
  );
  return {
    winningNumber: parseInt(winningNumber),
    boardScore: parseInt(boardScore),
  };
};

export const calculate1 = (arr) => {
  const { winningNumber, boardScore } = winningBoardScore(arr);
  return winningNumber * boardScore;
};

// part 2
export const calculate2 = (arr) => {};

// answers

const answer = () => [calculate1(data), calculate2(data)];

export default answer;
