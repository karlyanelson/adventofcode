import { data } from "../data/5";

// const data = [
//   [
//     [0, 9],
//     [5, 9],
//   ],
//   [
//     [8, 0],
//     [0, 8],
//   ],
//   [
//     [9, 4],
//     [3, 4],
//   ],
//   [
//     [2, 2],
//     [2, 1],
//   ],
//   [
//     [7, 0],
//     [7, 4],
//   ],
//   [
//     [6, 4],
//     [2, 0],
//   ],
//   [
//     [0, 9],
//     [2, 9],
//   ],
//   [
//     [3, 4],
//     [1, 4],
//   ],
//   [
//     [0, 0],
//     [8, 8],
//   ],
//   [
//     [5, 5],
//     [8, 2],
//   ],
// ];

// part 1

export const makeDiagram = (input) => {
  const formattedData = input.map((set) => ({
    x1: set[0][0],
    x2: set[1][0],
    y1: set[0][1],
    y2: set[1][1],
  }));

  let diagram = [];

  formattedData.forEach((set) => {
    if (set.x1 === set.x2 || set.y1 === set.y2) {
      if (set.x1 === set.x2) {
        const x = set.x1;
        let yRange;
        let yStart;

        if (set.y1 < set.y2) {
          yRange = set.y2 - set.y1;
          yStart = set.y1;
        } else {
          yRange = set.y1 - set.y2;
          yStart = set.y2;
        }

        for (let y = 0; y <= yRange; y++) {
          if (!diagram[yStart + y]) {
            diagram[yStart + y] = [];
          }
          if (!diagram[yStart + y][x]) {
            diagram[yStart + y][x] = 1;
          } else {
            diagram[yStart + y][x] = diagram[yStart + y][x] + 1;
          }
        }
      }

      if (set.y1 === set.y2) {
        const y = set.y1;
        let xRange;
        let xStart;

        if (set.x1 < set.x2) {
          xRange = set.x2 - set.x1;
          xStart = set.x1;
        } else {
          xRange = set.x1 - set.x2;
          xStart = set.x2;
        }

        for (let x = 0; x <= xRange; x++) {
          if (!diagram[y]) {
            diagram[y] = [];
          }
          if (!diagram[y][xStart + x]) {
            diagram[y][xStart + x] = 1;
          } else {
            diagram[y][xStart + x] = diagram[y][xStart + x] + 1;
          }
        }
      }
    }
  });

  return diagram;
};

export const calculate1 = (input) => {
  const diagram = makeDiagram(input);

  let overlap = 0;

  diagram.forEach((row) => row.forEach((item) => item > 1 && overlap++));

  return overlap;
};

// part 2

export const makeDiagram2 = (input) => {
  const formattedData = input.map((set) => ({
    x1: set[0][0],
    x2: set[1][0],
    y1: set[0][1],
    y2: set[1][1],
  }));

  let diagram = [];

  formattedData.forEach((set) => {
    if (set.x1 === set.x2 || set.y1 === set.y2) {
      if (set.x1 === set.x2) {
        const x = set.x1;
        let yRange;
        let yStart;

        if (set.y1 < set.y2) {
          yRange = set.y2 - set.y1;
          yStart = set.y1;
        } else {
          yRange = set.y1 - set.y2;
          yStart = set.y2;
        }

        for (let y = 0; y <= yRange; y++) {
          if (!diagram[yStart + y]) {
            diagram[yStart + y] = [];
          }
          if (!diagram[yStart + y][x]) {
            diagram[yStart + y][x] = 1;
          } else {
            diagram[yStart + y][x] = diagram[yStart + y][x] + 1;
          }
        }
      }

      if (set.y1 === set.y2) {
        const y = set.y1;
        let xRange;
        let xStart;

        if (set.x1 < set.x2) {
          xRange = set.x2 - set.x1;
          xStart = set.x1;
        } else {
          xRange = set.x1 - set.x2;
          xStart = set.x2;
        }

        for (let x = 0; x <= xRange; x++) {
          if (!diagram[y]) {
            diagram[y] = [];
          }
          if (!diagram[y][xStart + x]) {
            diagram[y][xStart + x] = 1;
          } else {
            diagram[y][xStart + x] = diagram[y][xStart + x] + 1;
          }
        }
      }
    } else {
      let xRange;
      let yRange;
      let xStart;
      let yStart;

      if (set.y1 < set.y2) {
        yRange = set.y2 - set.y1;
        yStart = set.y1;
      } else {
        yRange = set.y1 - set.y2;
        yStart = set.y2;
      }

      if (set.x1 < set.x2) {
        xRange = set.x2 - set.x1;
        xStart = set.x1;
      } else {
        xRange = set.x1 - set.x2;
        xStart = set.x2;
      }

      for (let i = 0; i <= yRange; i++) {
        if (!diagram[yStart + i]) {
          diagram[yStart + i] = [];
        }
        if (!diagram[yStart + i][xStart + i]) {
          diagram[yStart + i][xStart + i] = 1;
        } else {
          diagram[yStart + i][xStart + i] = diagram[yStart + i][xStart + i] + 1;
        }
      }
    }
  });

  return diagram;
};

export const calculate2 = (input) => {
  const diagram = makeDiagram2(input);

  let overlap = 0;

  diagram.forEach((row) => row.forEach((item) => item > 1 && overlap++));

  return overlap;
};

// answers

const answer = () => [calculate1(data), calculate2(data)];

export default answer;
