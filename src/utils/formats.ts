export const formatMoney = (value: number | bigint) => String(
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value),
).replace(String.fromCharCode(160), String.fromCharCode(32));
