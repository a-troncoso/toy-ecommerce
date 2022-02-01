import { isStringOfNumbers } from "./string";

export const isNumber = (n) => typeof n === "number";

export const isInRange = (value, params = { min: 0, max: 0 }) =>
  value >= params.min && value <= params.max;

export const round = (num, opts = { fixedDecimals: false, decimals: 0 }) => {
  const { fixedDecimals, decimals } = opts;
  const multiplier = 10 ** decimals;
  let result = 0;

  if (isNumber(num) || isStringOfNumbers(num))
    result = parseFloat(
      Math.round(
        (Number(num.toString().replace(",", ".")) + Number.EPSILON) * multiplier
      ) / multiplier
    );

  return fixedDecimals ? result.toFixed(decimals) : result;
};

export const getRandomInt = (min, max, { multiplier = 1 } = {}) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (
    Math.round((Math.random() * (max - min) + min) / multiplier) * multiplier
  );
};
