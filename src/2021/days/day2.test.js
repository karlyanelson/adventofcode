import { horizontalPos, depth, calculate1, calculate2 } from "./day2";

const data = [
    { direction: "forward", amount: 5 },
    { direction: "down", amount: 5 },
    { direction: "forward", amount: 8 },
    { direction: "up", amount: 3 },
    { direction: "down", amount: 8 },
    { direction: "forward", amount: 2 },
];

test("part 1", () => {
    expect(horizontalPos(data)).toBe(15);
    expect(depth(data)).toBe(10);
    expect(calculate1(data)).toBe(150);
});

test("part 2", () => {
    expect(calculate2(data)).toBe(900);
});
