import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function formatMoney(price: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
}
