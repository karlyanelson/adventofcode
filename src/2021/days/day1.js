import { data } from "../data/1";

export const calculate1 = (arr) => {
    let increased = 0;

    arr.reduce((prev, cur) => {
        if (prev && prev < cur) {
            increased++;
        }
        return cur;
    });

    return increased;
};

export const calculate2 = (arr) => {
    let newArr = arr.map((element, index, array) => {
        if (index > 1) {
            return [array[index - 2], array[index - 1], element];
        } else {
            return [];
        }
    });

    const slicedArr = newArr.slice(2);

    const summedArr = slicedArr.map((arr) =>
        arr.reduce((prev, cur) => {
            return prev + cur;
        }, 0)
    );

    return calculate1(summedArr);
};

const answer = () => [calculate1(data), calculate2(data)];

export default answer;
