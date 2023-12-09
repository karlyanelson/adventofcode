import {
    determineFuelAtPosition,
    calculate1,
    determineFuelAtPosition2,
    calculate2,
} from "./day7";

const data = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

describe("part 1", () => {
    test("determineFuelAtPosition", () => {
        expect(determineFuelAtPosition(data, 1)).toBe(41);
        expect(determineFuelAtPosition(data, 3)).toBe(39);
        expect(determineFuelAtPosition(data, 10)).toBe(71);
        expect(determineFuelAtPosition(data, 2)).toBe(37);
    });
    test("calculate1", () => {
        expect(calculate1(data)).toBe(37);
    });
});
describe("part 2", () => {
    test("determineFuelAtPosition2", () => {
        expect(determineFuelAtPosition2(data, 5)).toBe(168);
        expect(determineFuelAtPosition2(data, 2)).toBe(206);
    });
    test("calculate2", () => {
        expect(calculate2(data)).toBe(168);
    });
});
