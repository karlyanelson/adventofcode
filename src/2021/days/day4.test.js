import {
    getWinningBoardAndNumber,
    winningBoardScore,
    calculate1,
    getLastWinningBoardAndNumber,
    calculate2,
} from "./day4";

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

describe("part 1", () => {
    test("getWinningBoardAndNumber when row is winner", () => {
        const { boardIndex, winningNumber } = getWinningBoardAndNumber(data);
        expect(boardIndex).toEqual(2);
        expect(winningNumber).toEqual(24);
    });
    test("winningBoardScore", () => {
        expect(winningBoardScore(data, getWinningBoardAndNumber).boardScore).toBe(
            188
        );
    });
    test("calculate1", () => {
        expect(calculate1(data)).toBe(4512);
    });

    test("getWinningBoardAndNumber when column is winner", () => {
        const data2 = {
            nums: [
                7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
                18, 20, 8, 19, 3, 26, 1,
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
                    [14, 10, 18, 22, 2],
                    [21, 16, 15, 9, 19],
                    [17, 8, 23, 26, 20],
                    [24, 11, 13, 6, 5],
                    [4, 0, 12, 3, 7],
                ],
                [
                    [3, 15, 0, 2, 22],
                    [9, 18, 13, 17, 5],
                    [19, 8, 7, 25, 23],
                    [20, 11, 10, 24, 4],
                    [14, 21, 16, 12, 6],
                ],
            ],
        };
        const { boardIndex, winningNumber } = getWinningBoardAndNumber(data2);
        expect(boardIndex).toEqual(1);
        expect(winningNumber).toEqual(24);
    });
});

describe("part 2", () => {
    test("getLastWinningBoardAndNumber when row is winner", () => {
        const { boardIndex, winningNumber } = getLastWinningBoardAndNumber(data);
        expect(winningNumber).toEqual(13);
        expect(boardIndex).toEqual(1);
    });
    test("winningBoardScore", () => {
        expect(
            winningBoardScore(data, getLastWinningBoardAndNumber).boardScore
        ).toBe(148);
    });
    test("calculate2", () => {
        expect(calculate2(data)).toBe(1924);
    });
});
