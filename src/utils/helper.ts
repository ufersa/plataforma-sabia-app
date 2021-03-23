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

export const technologyStages = [
  {
    title: 'Disponibilizado ao mercado',
    position: 9,
    color: '#00A688',
  },
  {
    title: 'Produto testado e qualificado',
    position: 8,
    color: '#33B8A0',
  },
  {
    title: 'Teste de escala',
    position: 7,
    color: '#66CAB8',
  },
  {
    title: 'Teste em campo',
    position: 6,
    color: '#C6DB99',
  },
  {
    title: 'Validação do protótipo',
    position: 5,
    color: '#F9D142',
  },
  {
    title: 'Validação laboratorial',
    position: 4,
    color: '#F9BB42',
  },
  {
    title: 'Prova de conceito (PoC)',
    position: 3,
    color: '#F99942',
  },
  {
    title: 'Conceito técnico-científico',
    position: 2,
    color: '#F96E42',
  },
  {
    title: 'Princípios físicos básicos',
    position: 1,
    color: '#F04B40',
  },
];
