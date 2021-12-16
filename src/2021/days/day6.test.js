import { calculate1, calculate2 } from "./day6";

const data = [3, 4, 3, 1, 2];

describe("part 1", () => {
  test("calculate1 - 18 days", () => {
    expect(calculate1(data, 18)).toBe(26);
  });

  test("calculate1 - 80 days", () => {
    expect(calculate1(data, 80)).toBe(5934);
  });
});
describe("part 2", () => {
  test("calculate2 - 256 days", () => {
    expect(calculate2(data, 256)).toBe(26984457539);
  });
});
