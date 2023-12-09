import { data } from "../data/2";

export const roundIsPossible = (round, config) => {
  const colorRegex = /([a-z])+/g;
  const numberRegex = /([0-9])+/g;

  let possible = true;

  for (const item of round) {
    const color = item.match(colorRegex);
    const num = Number(item.match(numberRegex));

    if(config && config[color] < num) {
      possible = false;
      break;
    }
  }

  console.log(round);
  console.log(possible);
  console.log("--------");

  return possible;
};

export const gameIsPossible = (game, config) => {
  let possible = true;

  for (const round of game) {
    const possibility = roundIsPossible(round, config);

    if(!possibility) {
      possible = false;
      break;
    }
  }

  return possible;
};

export const calculate1 = (arr) => {
  const config = {red: 12, green: 13, blue: 14}; 
  const possibleGames = [];
  let index = 1;
  for (const game of arr) {
    const gameValues = Object.values(game)[0];
    const possibility = gameIsPossible(gameValues, config);

    if(possibility) {
      possibleGames.push(index);
    }

    index = index + 1;
  }

  const sum = possibleGames.reduce((prev, cur) => prev + cur);

  return sum ;
};

export const calculate2 = (data) => {
  console.log("part2", data);
  return null;
};

const answer = () => [calculate1(data), calculate2(data)];

export default answer;
