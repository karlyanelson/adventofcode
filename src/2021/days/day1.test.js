import { calculate2 } from "./day1";

test("part 2", () => {
  const data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

  expect(calculate2(data)).toBe(5);
});
