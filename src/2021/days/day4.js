import { data } from "../data/4";

// part 1

export const getWinningBoardAndNumber = (input) => {
    // NEED TO MAKE A DEEP COPY OF WHOLE ARRAY SINCE NESTED
    const copy = JSON.parse(JSON.stringify(input));
    let boards = Array.from(copy.boards);
    let nums = Array.from(copy.nums);
    let winningBoard;
    let winningNumber;
    let matchedColumns = {};
    let matchedRows = {};

    for (const [numIndex, num] of nums.entries()) {
        if (winningBoard || winningBoard === 0) {
            break;
        }
        for (const [boardIndex, board] of boards.entries()) {
            if (winningBoard || winningBoard === 0) {
                break;
            }

            for (const [rowIndex, row] of board.entries()) {
                if (winningBoard || winningBoard === 0) {
                    break;
                }

                matchedRows[rowIndex] = row.filter((x) => x === "matched");

                if (matchedRows[rowIndex].length === row.length) {
                    winningBoard = boardIndex;
                    winningNumber = nums[numIndex - 1];
                    break;
                }

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

                        if (matchedColumns[boardIndex][colIndex].length === board.length) {
                            winningBoard = boardIndex;
                            winningNumber = nums[numIndex];
                            break;
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
    let lastWinningBoard;

    // filter out boards that win
    while (winningBoards.length < input.boards.length - 1) {
        const { boardIndex } = getWinningBoardAndNumber(dataInputCopy);

        winningBoards.push(boardIndex);

        dataInputCopy.boards.splice(boardIndex, 1);
    }

    // get the contents of the last board to win after matching numbers
    const { board, winningNumber } = getWinningBoardAndNumber(dataInputCopy);

    for (const [index] of input.boards.entries()) {
        if (!winningBoards.includes(index)) {
            lastWinningBoard = index;
            break;
        }
    }

    return {
        boardIndex: lastWinningBoard,
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
