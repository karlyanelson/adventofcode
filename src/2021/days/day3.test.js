import {
    gammaRateBinary,
    gammaRate,
    epsilonRateBinary,
    epsilonRate,
    calculate1,
    oxygenBinary,
    oxygenRate,
    co2Binary,
    co2Rate,
    calculate2,
} from "./day3";

const data = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
];

describe("part 1", () => {
    test("gammaRateBinary", () => {
        expect(gammaRateBinary(data)).toBe("10110");
    });
    test("epsilonRateBinary", () => {
        expect(epsilonRateBinary(data)).toBe("01001");
    });
    test("gammaRate", () => {
        expect(gammaRate(data)).toBe(22);
    });
    test("epsilonRate", () => {
        expect(epsilonRate(data)).toBe(9);
    });
    test("calculate1", () => {
        expect(calculate1(data)).toBe(198);
    });

    test("calculate1 with more than 5 digits", () => {
        const data = ["001001", "111101", "101101"];

        expect(gammaRateBinary(data)).toBe("101101");
        expect(epsilonRateBinary(data)).toBe("010010");
        expect(gammaRate(data)).toBe(45);
        expect(epsilonRate(data)).toBe(18);
        expect(calculate1(data)).toBe(810);
    });
});

describe("part 2", () => {
    test("oxygenBinary", () => {
        expect(oxygenBinary(data)).toBe("10111");
    });
    test("co2Binary", () => {
        expect(co2Binary(data)).toBe("01010");
    });
    test("oxygenRate", () => {
        expect(oxygenRate(data)).toBe(23);
    });
    test("co2Rate", () => {
        expect(co2Rate(data)).toBe(10);
    });
    test("calculate2", () => {
        expect(calculate2(data)).toBe(230);
    });
});
