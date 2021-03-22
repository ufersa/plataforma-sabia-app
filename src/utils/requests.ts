interface StatusProps {
  [name: string]: string
}

export const UseStatus: StatusProps = {
  private: 'Privado',
  enterprise: 'Empresa',
  provincial_government: 'Municipal',
  local_government: 'Estadual',
  federal_government: 'Federal',
  other: 'Outro',
};

export const FundingStatus: StatusProps = {
  has_funding: 'Sim, eu já tenho como financiar',
  wants_funding: 'Sim, mas não tenho como financiar',
  no_need_funding: 'Não preciso de financiamento',
};
