import { calculate1, calculate2, replaceStringWithNumbers } from "./day1";

describe("part 1", () => {
  it("a", () => {
    const data = ["1abc2"];

    expect(calculate1(data)).toBe(12);
  });

  it("b", () => {
    const data = ["pqr3stu8vwx"];

    expect(calculate1(data)).toBe(38);
  });

  it("c", () => {
    const data = ["a1b2c3d4e5f"];

    expect(calculate1(data)).toBe(15);
  });

  it("d", () => {
    const data = ["treb7uchet"];

    expect(calculate1(data)).toBe(77);
  });

  it("two numbers in a row", () => {
    const data = ["treb76uche7t"];

    expect(calculate1(data)).toBe(77);
  });

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

  it("b", () => {
    const data = ["eightwothree"];

    expect(calculate2(data)).toBe(83);
  });

  it("b2", () => {
    const data = ["threeightwo"];

    expect(calculate2(data)).toBe(32);
  });

  it("c", () => {
    const data = ["abcone2threexyz"];

    expect(calculate2(data)).toBe(13);
  });

  it("d", () => {
    const data = ["xtwone3four"];

    expect(calculate2(data)).toBe(24);
  });

  it("e", () => {
    const data = ["4nineeightseven2"];

    expect(calculate2(data)).toBe(42);
  });

  it("e2", () => {
    const data = ["4nineeight"];

    expect(calculate2(data)).toBe(48);
  });

  it("e3", () => {
    const data = ["nineeight"];

    expect(calculate2(data)).toBe(98);
  });

  it("f", () => {
    const data = ["zoneight234"];

    expect(calculate2(data)).toBe(14);
  });


  it("g", () => {
    const data = ["7pqrstsixteen"];

    expect(calculate2(data)).toBe(76);
  });


  it("total", () => {
    const data = [
      "two1nine",
      "eightwothree",
      "abcone2threexyz",
      "xtwone3four",
      "4nineeightseven2",
      "zoneight234",
      "7pqrstsixteen",
    ];

    expect(calculate2(data)).toBe(281);
  });
});


describe("part 2: replaceStringWithNumbers", () => {
  it("a", () => {
    const data = "two1nine";

    expect(replaceStringWithNumbers(data)).toBe("two2two1nine9nine");
  });

  it("b", () => {
    const data = "eightwothree";

    expect(replaceStringWithNumbers(data)).toBe("eight8eightwo2twothree3three");
  });

  it("c", () => {
    const data = "abcone2threexyz";

    expect(replaceStringWithNumbers(data)).toBe("abcone1one2three3threexyz");
  });

  it("d", () => {
    const data = "xtwone3four";

    expect(replaceStringWithNumbers(data)).toBe("xtwo2twone1one3four4four");
  });

  it("e", () => {
    const data = "4nineeightseven2";

    expect(replaceStringWithNumbers(data)).toBe("4nine9nineeight8eightseven7seven2");
  });

  it("f", () => {
    const data = "zoneight234";

    expect(replaceStringWithNumbers(data)).toBe("zone1oneight8eight234");
  });


  it("g", () => {
    const data = "7pqrstsixteen";

    expect(replaceStringWithNumbers(data)).toBe("7pqrstsix6sixteen");
  });

  it("handle one at the end", () => {
    const data = "eightnineseventwo1seven";

    expect(replaceStringWithNumbers(data)).toBe("eight8eightnine9nineseven7seventwo2two1seven7seven");
  });
});