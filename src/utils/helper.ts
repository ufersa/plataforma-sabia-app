import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

/**
 * Format currency to integer
 *
 * @param {string} value Currency formatted value (BRL or USD)
 * @returns {number}
 */
export const formatCurrencyToInt = (value: number) => {
  const BRL = /(?=.*\d)^(R\$\s)?(([1-9]\d{0,2}(\.\d{3})*)|0)?(,\d{1,2})?$/;
  const numbersOnly = value.toString().replace(/[^\d.,]+/g, '');
  let currencyAsInt = '0';

  if (BRL.test(numbersOnly)) {
    currencyAsInt = numbersOnly.replace(/\./g, '').replace(',', '.');
  } else {
    currencyAsInt = numbersOnly.replace(/,/g, '');
  }

  return parseFloat(currencyAsInt);
};

/**
 * Format money to BRL
 *
 * @param {number} value Raw value
 * @returns {string}
 */
export const formatMoney = (value: number) => String(
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value),
).replace(String.fromCharCode(160), String.fromCharCode(32));
