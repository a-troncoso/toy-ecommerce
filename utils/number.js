import { isStringOfNumbers } from "./string";

/**
 * Indica si el parámetro es un number.
 *
 * @param {string} str
 * @return {boolean}
 */
export const isNumber = (n) => typeof n === "number";

/**
 * Indica si un numero está en el rango definido por parametros.
 *
 * @param {string} number
 * @param {params} object
 * @return {boolean}
 */
export const isInRange = (value, params = { min: 0, max: 0 }) =>
  value >= params.min && value <= params.max;

/**
 * Retorna un numero redondeado.
 *
 * @param {number} num
 * @param opts opciones del método
 * @param opts.fixedDecimals si se aproxima el último decimal
 * @param opts.decimals cuántos decimales se quieren mostrar
 * @return {number|string}
 */
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
