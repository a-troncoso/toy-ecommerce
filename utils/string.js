/**
 * Indica si el parámetro es un string.
 *
 * @param {string} str
 * @return {boolean}
 */
export const isString = (str) => typeof str === "string";

/**
 * Retorna un nuevo string con la/s primera/s letra/s en mayúscula.
 *
 * @param {string} str
 * @param opts opciones del método
 * @param opts.eachWord si queremos que cada una de las palabras estén capitalizadas.
 * @return {string}
 */
export const capitalize = (str, opts = { eachWord: false }) => {
  if (!isString(str)) return "";

  let result = str.toLowerCase();
  const { eachWord } = opts;

  if (eachWord)
    result = result.replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase()
    );
  else result = str.charAt(0).toUpperCase() + str.slice(1);

  return result;
};

/**
 *  Este método recibe un string, el cual retorna la * cadena sin caracteres especiales.
 *
 * @param {string} str
 * @return {string}
 */
export const removeSpecialChars = (str) => str.replace(/[^A-Za-z0-9\s]/g, "");

/**
 * Indica si el parámetro es un string de números.
 *
 * @param {string} str
 * @return {boolean}
 */
export const isStringOfNumbers = (str) =>
  isString(str) ? !Number.isNaN(parseInt(str, 10)) : false;

/**
 * Método que recibe una cadena y valida que tenga formato de email.
 *
 * @param {string} str
 * @return {boolean}
 */
export const isValidEmail = (email) => {
  const expRegular =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return expRegular.test(email.toLowerCase());
};
