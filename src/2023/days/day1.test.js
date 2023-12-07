import { calculate1 } from "./day1";

test("part 1 a", () => {
  const data = ["1abc2"];

  expect(calculate1(data)).toBe(12);
});

test("part 1 b", () => {
  const data = ["pqr3stu8vwx"];

  expect(calculate1(data)).toBe(38);
});

test("part 1 c", () => {
  const data = ["a1b2c3d4e5f"];

  expect(calculate1(data)).toBe(15);
});

test("part 1 d", () => {
  const data = ["treb7uchet"];

  expect(calculate1(data)).toBe(77);
});

test("part 1 two numbers in a row", () => {
  const data = ["treb76uche7t"];

  expect(calculate1(data)).toBe(77);
});

test("part 1 total", () => {
  const data = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

  expect(calculate1(data)).toBe(142);
});
