import { makeDiagram, calculate1} from "./day5";

const data = [
  [
    [0, 9],
    [5, 9],
  ],
  [
    [8, 0],
    [0, 8],
  ],
  [
    [9, 4],
    [3, 4],
  ],
  [
    [2, 2],
    [2, 1],
  ],
  [
    [7, 0],
    [7, 4],
  ],
  [
    [6, 4],
    [2, 0],
  ],
  [
    [0, 9],
    [2, 9],
  ],
  [
    [3, 4],
    [1, 4],
  ],
  [
    [0, 0],
    [8, 8],
  ],
  [
    [5, 5],
    [8, 2],
  ],
];

describe("part 1", () => {
  test("makeDiagram", () => {
    const diagram = makeDiagram(data);
    expect(diagram[0][7]).toBe(1);
    expect(diagram[1][2]).toBe(1);
    expect(diagram[2][2]).toBe(1);
    expect(diagram[4][3]).toBe(2);
    expect(diagram[4][7]).toBe(2);
    expect(diagram[9][0]).toBe(2);
    expect(diagram[9][1]).toBe(2);
    expect(diagram[9][2]).toBe(2);
  });
  test("calculate1", () => {
    expect(calculate1(data)).toBe(5);
  });
});

// describe("part 2", () => {
//   test("makeDiagram2", () => {
//     const diagram = makeDiagram2(data);
//     expect(diagram[0][7]).toBe(1);
//     expect(diagram[1][2]).toBe(1);
//     expect(diagram[2][2]).toBe(1);
//     expect(diagram[4][3]).toBe(2);
//     expect(diagram[4][7]).toBe(2);
//     expect(diagram[9][0]).toBe(2);
//     expect(diagram[9][1]).toBe(2);
//     expect(diagram[9][2]).toBe(2);
//   });
//   test("calculate2", () => {
//     expect(calculate1(data)).toBe(5);
//   });
// });
