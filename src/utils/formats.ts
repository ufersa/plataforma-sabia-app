import { formatDistanceToNow, format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatMoney = (value: number | bigint) => String(
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value),
).replace(String.fromCharCode(160), String.fromCharCode(32));

export const formatDistance = (date: string) => formatDistanceToNow(parseISO(date), { addSuffix: true, locale: ptBR });

export const formatDate = (date: string, locale: string) => {
  const locales: string[] = ['pt-BR', 'en-US'];
  const masks: string[] = ['dd/MM/yyyy', 'yyyy-MM-dd'];
  return format(new Date(date), masks[locales.indexOf(locale)]);
};

export const formatDateHelper = (date: string, display: string) => format(parseISO(date.replace(' ', 'T')), display, { locale: ptBR });
