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

export const getWinningBoardAndNumber = (input) => {
  // NEED TO MAKE A DEEP COPY OF WHOLE ARRAY SINCE NESTED
  const copy = JSON.parse(JSON.stringify(input));
  let boards = Array.from(copy.boards);
  let nums = Array.from(copy.nums);
  let winningBoard;
  let winningNumber;
  let matchedColumns = {};
  // let matchedRows = {};
  // console.log("----- getWinningBoardAndNumber RAN -----");

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

        let matchedRows = row.filter((x) => x === "matched");

        if (matchedRows.length === row.length) {
          winningBoard = boardIndex;
          winningNumber = nums[numIndex - 1];
          break;
        } else {
          for (const [colIndex, col] of row.entries()) {
            if (col === num) {
              if (!matchedColumns[boardIndex]) {
                matchedColumns[boardIndex] = {};
              }
              if (!matchedColumns[boardIndex][colIndex]) {
                matchedColumns[boardIndex][colIndex] = [];
              }
              matchedColumns[boardIndex][colIndex].push("matched");
              boards[boardIndex][rowIndex][colIndex] = "matched";

              if (
                matchedColumns[boardIndex][colIndex].length === board.length
              ) {
                // console.log(
                //   "matchedColumns[boardIndex][colIndex].length === board.length"
                // );
                winningBoard = boardIndex;
                winningNumber = nums[numIndex];
                break;
              }
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

export const winningBoardScore = (input, evaluate) => {
  const { winningNumber, board } = evaluate(input);

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

export const calculate1 = (input) => {
  const { winningNumber, boardScore } = winningBoardScore(
    input,
    getWinningBoardAndNumber
  );
  return winningNumber * boardScore;
};

// part 2
export const getLastWinningBoardAndNumber = (input) => {
  let dataInputCopy = JSON.parse(JSON.stringify(input));
  let winningBoards = [];

  // filter out boards that win
  while (winningBoards.length < dataInputCopy.boards.length) {
    const { boardIndex } = getWinningBoardAndNumber(dataInputCopy);

    winningBoards.push(boardIndex);

    dataInputCopy.boards.splice(boardIndex, 1);
  }

  let winningBoard;

  console.log({ dataInputCopy });

  // get the contents of the last board to win after matching numbers
  const { board, winningNumber } = getWinningBoardAndNumber(dataInputCopy);

  console.log({ winningBoards });
  console.log({ board });

  return {
    boardIndex: winningBoard,
    winningNumber: winningNumber,
    board: board,
  };
};
export const calculate2 = (input) => {
  const { winningNumber, boardScore } = winningBoardScore(
    input,
    getLastWinningBoardAndNumber
  );
  return winningNumber * boardScore;
};

// answers

const answer = () => [calculate1(data), calculate2(data)];

export default answer;
