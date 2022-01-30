import { isStringOfNumbers } from "./string";
import { isNumber } from "./number";
import { THOUSAND_SEPARATOR, DECIMAL_SEPARATOR } from "./es-CL.constants";

const regExp = new RegExp(/(\d)(?=(\d{3})+(?!\d))/, "g");

/**
 * Valida si parámetro es un número flotante.
 *
 * @param {number} num
 * @return {boolean}
 */
export const isFloat = (val) =>
  val.toString().includes(THOUSAND_SEPARATOR) ||
  val.toString().includes(DECIMAL_SEPARATOR);

/**
 * Separa el número en miles.
 *
 * @param {number|string} val
 * @return {string}
 */
export const thousandSeparator = (val) =>
  parseFloat(val.toString().replace(THOUSAND_SEPARATOR, DECIMAL_SEPARATOR))
    .toFixed()
    .replace(THOUSAND_SEPARATOR, DECIMAL_SEPARATOR)
    .replace(regExp, "$1.");

const formatFloat = (amount) =>
  amount
    .toString()
    .replace(THOUSAND_SEPARATOR, DECIMAL_SEPARATOR)
    .replace(regExp, "$1.");

const processValue = (amount) => {
  let result = 0;

  if (isNumber(amount) || isStringOfNumbers(amount))
    result = isFloat(amount) ? formatFloat(amount) : thousandSeparator(amount);

  return result;
};

/**
 * Retorna el valor de una cantidad en formato de moneda.
 *
 * @param {number|string} val
 * @return {string}
 */
export const toCurrencyFormat = (val) => `$ ${processValue(val)}`;
