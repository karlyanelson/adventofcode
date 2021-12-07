import { data } from "../../data/2";

// part 1

export const horizontalPos = (arr) => {
  let posX = 0;

  for (const item of arr) {
    if (item.direction === "forward") {
      posX = posX + item.amount;
    }
  }

  return posX;
};

export const depth = (arr) => {
  let posY = 0;

  for (const item of arr) {
    if (item.direction === "down") {
      posY = posY + item.amount;
    }

    if (item.direction === "up") {
      posY = posY - item.amount;
    }
  }

  return posY;
};

export const calculate1 = (arr) => {
  return horizontalPos(arr) * depth(arr);
};

// part 2

// down X increases your aim by X units.
// up X decreases your aim by X units.
// forward X does two things:
// It increases your horizontal position by X units.
// It increases your depth by your aim multiplied by X.

export const calculate2 = (arr) => {
  let aim = 0;
  let posY = 0;
  let posX = 0;

  for (const item of arr) {
    if (item.direction === "down") {
      aim = aim + item.amount;
    }

    if (item.direction === "up") {
      aim = aim - item.amount;
    }

    if (item.direction === "forward") {
      posX = posX + item.amount;
      posY = posY + aim * item.amount;
    }
  }

  return posX * posY;
};

const part1 = calculate1(data);
const part2 = calculate2(data);

const answer = [part1, part2];

export default answer;
