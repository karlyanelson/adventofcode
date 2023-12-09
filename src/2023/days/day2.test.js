import { calculate1, calculate2, isPossible, roundIsPossible } from "./day2";


describe("part 1: isPossible", () => {

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
  
      expect(isPossible(gameData, config)).toBe(true);
    });
  
    it("Game 3: not possible", () => {
      const gameData = [["8 green", "6 blue", "20 red"], ["5 blue", "4 red", "13 green"], ["5 green"], ["1 red"]];
  
      expect(isPossible(gameData, config)).toBe(false);
    });
  });

  
});


describe("part 1", () => {
  it("total", () => {
    const data = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

    expect(calculate1(data)).toBe(142);
  });
});



describe("part 2", () => {
  it("a", () => {
    const data = ["two1nine"];

    expect(calculate2(data)).toBe(29);
  });

});
