import { calculate1, gameIsPossible, roundIsPossible } from "./day2";


describe("part 1", () => {

  const config = {red: 12, green: 13, blue: 14};

  describe("Round", () => {
    it("round a: possible", () => {
      const gameData = ["3 blue", "4 red"];
  
      expect(roundIsPossible(gameData, config)).toBe(true);
    });
  
    it("round b: not possible", () => {
      const gameData = ["8 green", "6 blue", "20 red"];
  
      expect(roundIsPossible(gameData, config)).toBe(false);
    });
  });

  describe("Game", () => {
    it("Game 1: possible", () => {
      const gameData = [["3 blue", "4 red"], ["1 red", "2 green", "6 blue"], ["2 green"]];
  
      expect(gameIsPossible(gameData, config)).toBe(true);
    });
  
    it("Game 3: not possible", () => {
      const gameData = [["8 green", "6 blue", "20 red"], ["5 blue", "4 red", "13 green"], ["5 green"], ["1 red"]];
  
      expect(gameIsPossible(gameData, config)).toBe(false);
    });
  });

  it("total", () => {
    const data = [
      {"Game 1": [["3 blue", "4 red"], ["1 red", "2 green", "6 blue"], ["2 green"]]},
      {"Game 2": [["1 blue", "2 green"], ["3 green", "4 blue", "1 red"], ["1 green", "1 blue"]]},
      {"Game 3": [["8 green", "6 blue", "20 red"], ["5 blue", "4 red", "13 green"], ["5 green", "1 red"]]},
      {"Game 4": [["1 green", "3 red", "6 blue"],[ "3 green", "6 red"], ["3 green", "15 blue"], ["14 red"]]},
      {"Game 5": [["6 red", "1 blue", "3 green"], ["2 blue", "1 red", "2 green"]]},
    ];
    expect(calculate1(data, config)).toBe(8);
  });
  
});



// describe("part 2", () => {
//   it("a", () => {
//     const data = ["two1nine"];

//     expect(calculate2(data)).toBe(29);
//   });

// });
