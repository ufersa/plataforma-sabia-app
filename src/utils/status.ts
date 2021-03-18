interface RequestsStatusProps {
  [name: string]: string
}

export const RequestsStatus: RequestsStatusProps = {
  requested: 'Pedido enviado',
  closed: 'Pedido fechado',
  open: 'Pedido aberto',
  canceled: 'Pedido cancelado',
};
