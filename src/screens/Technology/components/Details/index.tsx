import React from 'react';
import * as S from './styles';
import { Accordion } from '../../../../components';
import Colors from '../../../../utils/colors';
import { useTechnology } from '../../../../hooks/useTechnology';

const stages = [
  {
    title: 'Incorporação da tecnologia',
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

interface StagesProps {
  currentStep: number
}

const Stages = ({ currentStep }: StagesProps) => (
  <S.StagesContainer>
    <S.Arrow
      style={{ bottom: 36 * (currentStep - 1) }}
      xml={`
          <svg width="12" height="36" viewBox="0 0 12 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 18L2.76017e-07 35.3205L1.79022e-06 0.679491L12 18Z" fill="#F99942"/>
          </svg>        
        `}
    />
    <S.StagesWrapper>
      {stages.map(({ title, position, color }, idx) => (
        <S.StageItem key={`stage_${idx}`} style={{ backgroundColor: color }}>
          <S.StageItemPosition>
            <S.StageItemPositionText>{position}</S.StageItemPositionText>
          </S.StageItemPosition>
          <S.StageItemTitle>
            <S.StageItemTitleText>{title}</S.StageItemTitleText>
          </S.StageItemTitle>
        </S.StageItem>
      ))}
    </S.StagesWrapper>
    <S.StagesDescription
      style={{
        transform: [
          { rotate: '-90deg' },
          { translateX: 0 },
          { translateY: -125 },
        ],
        width: 300,
        height: 27,
      }}
    >
      <S.StageStep style={{ color: '#F04B40' }}>
        PoC
      </S.StageStep>
      <S.StageStep style={{ color: '#F9D142' }}>
        Protótipos
      </S.StageStep>
      <S.StageStep style={{ color: Colors.primary }}>
        Mercado
      </S.StageStep>
    </S.StagesDescription>
  </S.StagesContainer>
);

export const Technology = () => {
  const technology = useTechnology();

  return (
    <S.AccordionItemWrapper>
      <S.Subtitle>Identificação</S.Subtitle>
      <S.Description>
        <S.Highlight>Título: </S.Highlight>
        {technology.title}
      </S.Description>
      <S.Description>
        <S.Highlight>Categoria: </S.Highlight>
        {technology.taxonomies?.category}
      </S.Description>
      <S.Description>
        <S.Highlight>Classificação: </S.Highlight>
        {technology.taxonomies?.classification}
      </S.Description>
      <S.Description>
        <S.Highlight>Dimensão: </S.Highlight>
        {technology.taxonomies?.dimension}
      </S.Description>
      <S.Description>
        <S.Highlight>Público-alvo: </S.Highlight>
        {technology.taxonomies?.target_audience}
      </S.Description>
      <S.Description>
        <S.Highlight>Bioma: </S.Highlight>
        {technology.taxonomies?.biome}
      </S.Description>
      <S.Subtitle>Estágio de desenvolvimento</S.Subtitle>
      <Stages currentStep={technology.currentLevel || 1} />
    </S.AccordionItemWrapper>
  );
};

export const Characteristics = () => {
  const technology = useTechnology();

  return (
    <S.AccordionItemWrapper>
      <S.Subtitle>Objetivos</S.Subtitle>
      <S.Description>
        <S.Highlight>Objetivo Principal: </S.Highlight>
        {technology.primary_purpose}
      </S.Description>
      <S.Subtitle>Aplicação</S.Subtitle>
      <S.Description>
        <S.Highlight>Onde é a Aplicação: </S.Highlight>
        {technology.application_mode}
      </S.Description>
      <S.Description>
        <S.Highlight>Aplicação: </S.Highlight>
        {technology.application_mode}
      </S.Description>
      <S.Description>
        <S.Highlight>Pré-requisitos para a implantação: </S.Highlight>
        {technology.requirements}
      </S.Description>
      <S.Description>
        <S.Highlight>Duração do processo de instalação da tecnologia: </S.Highlight>
        {`${technology.installation_time} dias.`}
      </S.Description>
    </S.AccordionItemWrapper>
  );
};

export const Costs = () => {
  const technology = useTechnology();

  return (
    <S.AccordionItemWrapper>
      <S.Subtitle>Custos de Implantação</S.Subtitle>
      <S.Description>
        <S.Highlight>Objetivo Principal: </S.Highlight>
        {technology?.technologyCosts?.costs?.implementation_costs}
      </S.Description>
      <S.Subtitle>Aplicação</S.Subtitle>
      <S.Description>
        <S.Highlight>Onde é a Aplicação: </S.Highlight>
        {technology.application_mode}
      </S.Description>
      <S.Description>
        <S.Highlight>Custos de Manutenção: </S.Highlight>
        {technology.application_mode}
      </S.Description>
      <S.Description>
        <S.Highlight>Pré-requisitos para a implantação: </S.Highlight>
        {technology.requirements}
      </S.Description>
      <S.Description>
        <S.Highlight>Duração do processo de instalação da tecnologia: </S.Highlight>
        {`${technology.installation_time} dias.`}
      </S.Description>
    </S.AccordionItemWrapper>
  );
};

const Details = () => (
  <S.Wrapper>
    <Accordion
      items={[
        {
          title: 'Sobre a tecnologia',
          content: <Technology />,
        },
        {
          title: 'Características',
          content: <Characteristics />,
        },
        {
          title: 'Georreferenciamento',
          content: <></>,
        },
        {
          title: 'Custos e financiamentos',
          content: <Costs />,
        },
        {
          title: 'Documentos',
          content: <></>,
        },
      ]}
    />
  </S.Wrapper>
);

export default Details;
