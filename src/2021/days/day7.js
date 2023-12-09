import { data } from "../data/7";

// const data = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

// part 1

export const determineFuelAtPosition = (input, position) => {
    let fuel = 0;

    input.forEach((item) => {
        fuel += Math.abs(position - item);
    });
    return fuel;
};

const getLowestFuelAmount = (input, determineFuel) => {
    const sortLowToHigh = (a, b) => {
        return a - b;
    };

    const sorted = input.slice().sort(sortLowToHigh);

    const lowestNum = sorted[0];
    const highestNum = sorted[input.length - 1];

    let fuelOptions = [];

    for (let i = lowestNum; i <= highestNum; i++) {
        fuelOptions.push(determineFuel(input, i));
    }

    const sortedFuelOptions = fuelOptions.sort(sortLowToHigh);

    return sortedFuelOptions[0];
};

export const calculate1 = (input) => {
    return getLowestFuelAmount(input, determineFuelAtPosition);
};

// part 2

export const determineCostOfStep = (a, b) => {
    // formula for the triangular number sequence: n*(n+1)/2
    // https://oeis.org/A000217
    const difference = Math.abs(a - b);
    return (difference * (difference + 1)) / 2;
};

export const determineFuelAtPosition2 = (input, position) => {
    let fuel = 0;

    input.forEach((item) => {
        fuel += determineCostOfStep(item, position);
    });
    return fuel;
};

export const calculate2 = (input) => {
    return getLowestFuelAmount(input, determineFuelAtPosition2);
};

// answers

const answer = () => [calculate1(data), calculate2(data)];

export default answer;
