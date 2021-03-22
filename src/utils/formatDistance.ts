import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function formatDistance(date: string) {
  return formatDistanceToNow(parseISO(date), { addSuffix: true, locale: ptBR });
}
