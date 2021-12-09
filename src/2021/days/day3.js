import { data } from "../data/3";

const binaryToDecimal = (binary) => {
  const decimal = parseInt(binary, 2);
  return decimal;
};

// part 1

// init = ["12345", "67890", "12345",];
// mod = [
//   ["1", "2", "3", "4", "5"],
//   ["6", "7", "8", "9", "0"],
//   ["1", "2", "3", "4", "5"]
// ];
// bits = {
//   1: ["1", "6", "1"],
//   2: ["2", "7", "2"],
//   3: ["3", "8", "3"],
//   4: ["4", "9", "4"],
//   5: ["5", "0", "5"]
// };
// gammaBinary = [ "1", "2", "3", "4", "5" ];
// gammaBinaryString = "12345"

export const getBinaryArray = (arr, determineBinary) => {
  const modifiedArr = arr.map((x) => x.split(""));
  let bits = {};
  modifiedArr.forEach((item) => {
    item.forEach((num, index) => {
      if (bits[index]) {
        const arrayItems = bits[index];
        bits[index] = [...arrayItems, num];
      } else {
        bits[index] = [num];
      }
    });
  });
  const bitsArray = Object.values(bits);
  let binary = bitsArray.map((item) => determineBinary(item)).join("");
  return binary;
};

const mostCommonNumber = (arr) => {
  let zeroes = [];
  let ones = [];

  arr.forEach((item) => {
    item === "0" ? zeroes.push("0") : ones.push("1");
  });

  if (zeroes.length > ones.length) {
    return "0";
  } else {
    return "1";
  }
};

const leastCommonNumber = (arr) => {
  let zeroes = [];
  let ones = [];

  arr.forEach((item) => {
    item === "0" ? zeroes.push("0") : ones.push("1");
  });

  if (zeroes.length > ones.length) {
    return "1";
  } else {
    return "0";
  }
};

export const gammaRateBinary = (arr) => {
  return getBinaryArray(arr, mostCommonNumber);
};

export const epsilonRateBinary = (arr) => {
  return getBinaryArray(arr, leastCommonNumber);
};

export const gammaRate = (arr) => {
  return binaryToDecimal(gammaRateBinary(arr));
};

export const epsilonRate = (arr) => {
  return binaryToDecimal(epsilonRateBinary(arr));
};

export const calculate1 = (arr) => {
  return gammaRate(arr) * epsilonRate(arr);
};

// part 2

// init = ["00100", "11110", "10110", "10111"];
// mod = [
//   ["0", "0", "1", "0", "0"],
//   ["1", "1", "1", "1", "0"],
//   ["1", "0", "1", "1", "0"],
//   ["1", "0", "1", "1", "1"],
// ];
// Oxygen
// filteredBit1 = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "0", "1", "1", "0"],
//   ["1", "0", "1", "1", "1"],
// ];
// filteredBit2 = [
//   ["1", "0", "1", "1", "0"],
//   ["1", "0", "1", "1", "1"],
// ];
// filteredBit3/4/5 = [
//   ["1", "0", "1", "1", "1"],
// ];

const filterBinaryArray = (arr, determineBinary) => {
  const bits = new Array(arr[0].length).fill(0).map((x, index) => (x = index));

  let filteredArray = arr;

  for (const bit of bits) {
    if (filteredArray.length === 1) {
      break;
    }
    let binaryPattern = getBinaryArray(filteredArray, determineBinary);

    filteredArray = filteredArray.filter((item) => {
      return item[bit] === binaryPattern[bit];
    });
  }

  return filteredArray.toString();
};
export const oxygenBinary = (arr) => {
  return filterBinaryArray(arr, mostCommonNumber);
};

export const co2Binary = (arr) => {
  return filterBinaryArray(arr, leastCommonNumber);
};

export const oxygenRate = (arr) => {
  return binaryToDecimal(oxygenBinary(arr));
};
export const co2Rate = (arr) => {
  console.log("day 3 ran");
  return binaryToDecimal(co2Binary(arr));
};

export const calculate2 = (arr) => {
  return oxygenRate(arr) * co2Rate(arr);
};

// answers
const answer = () => [calculate1(data), calculate2(data)];

export default answer;
