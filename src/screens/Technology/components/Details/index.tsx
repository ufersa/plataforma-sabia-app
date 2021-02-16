import React from 'react';
import * as S from './styles';
import { Accordion } from '../../../../components';
import Colors from '../../../../utils/colors';

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
      style={{ top: 36 * currentStep }}
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

const Technology = () => (
  <S.AccordionItemWrapper>
    <S.Subtitle>Identificação</S.Subtitle>
    <S.Description>
      <S.Highlight>Título: </S.Highlight>
      Barragem subterrânea
    </S.Description>
    <S.Description>
      <S.Highlight>Categoria: </S.Highlight>
      Recursos Hídricos, Coleta de água de chuva
    </S.Description>
    <S.Description>
      <S.Highlight>Classificação: </S.Highlight>
      Tecnologias Sociais
    </S.Description>
    <S.Description>
      <S.Highlight>Dimensão: </S.Highlight>
      Econômica
    </S.Description>
    <S.Description>
      <S.Highlight>Público-alvo: </S.Highlight>
      Agricultores
    </S.Description>
    <S.Description>
      <S.Highlight>Bioma: </S.Highlight>
      Caatinga
    </S.Description>
    <S.Subtitle>Estágio de desenvolvimento</S.Subtitle>
    <Stages currentStep={0} />
  </S.AccordionItemWrapper>
);

export const Characteristics = () => (
  <S.AccordionItemWrapper>
    <S.Subtitle>Objetivos</S.Subtitle>
    <S.Description>
      <S.Highlight>Objetivo Principal: </S.Highlight>
      barrar o fluxo de água superficial e subterrâneo através de uma parede/septo impermeável (plástico de 200 micra) construída dentro do solo, transversalmente à direção das águas. Esse barramento armazena água com perdas mínimas de umidade, mantendo o solo úmido por um período maior de tempo, a depender das chuvas ocorridas, três a seis meses após o período chuvoso.
    </S.Description>
    <S.Subtitle>Aplicação</S.Subtitle>
    <S.Description>
      <S.Highlight>Onde é a Aplicação: </S.Highlight>
      Dentro do solo
    </S.Description>
    <S.Description>
      <S.Highlight>Aplicação: </S.Highlight>
      Dentro do solo
    </S.Description>
    <S.Description>
      <S.Highlight>Pré-requisitos para a implantação: </S.Highlight>
      1. atender aos parâmetros técnicos de construção da tecnologia; 2. possuir certo nível de organização; 3. demandar ações de assistência técnica; e 4. praticar sistemas de produção dentro dos princípios da agroecologia. Todas as propriedades, comunidades e/ou assentamentos visitadas foram georeferenciadas e as informações foram armazenadas para compor banco de dados/sistema de informação e confecção de mapas de localização da propriedade. Paralelo à seleção das comunidades, foram ministradas capacitações/sensibilizações dos agricultores e técnicos em serviço, com formação de multiplicadores, objetivando torná-los aptos para construção, manejo e manutenção da tecnologia. Essa sensibilização dos agricultores foi realizada através de oficinas de construção do conhecimento, dias de campo e cursos.
    </S.Description>
    <S.Description>
      <S.Highlight>Duração do processo de instalação da tecnologia: </S.Highlight>
      5 dias.
    </S.Description>
  </S.AccordionItemWrapper>
);

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
          content: <></>,
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
