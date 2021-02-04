/* eslint-disable max-len */
import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { DefaultText } from '../../../../components';
import Colors from '../../../../utils/colors';

export const Wrapper = styled.View`
  border-top-width: 1px;
  border-top-color: #e8e8e8;
  margin-horizontal: 16px;
`;

const Subtitle = styled(DefaultText)`
  color: ${Colors.primary};
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin-vertical: 8px;
`;

const Description = styled(DefaultText)`
  color: #777777;
  font-family: Montserrat_400Regular;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 4px;
`;

const Highlight = styled(Description)`
  font-family: Montserrat_700Bold;
  font-weight: 700;
`;

const AccordionItemWrapper = styled.View``;

const StagesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  justify-content: space-between;
`;

const Arrow = styled(SvgXml)`
  left: 0;
  position: absolute;
`;

const StagesWrapper = styled.View`
  width: ${Dimensions.get('window').width - 80}px;
  flex-direction: column;
  margin-left: 16px;
`;

const StageItem = styled.View`
  height: 36px;
  flex-direction: row;
`;

const StageItemPosition = styled.View`
  width: 48px;
  height: 36px;
  align-items: center;
  justify-content: center;
`;

const StageItemPositionText = styled(DefaultText)`
  color: #1d1d1d;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  opacity: 0.7;
`;

const StageItemTitle = styled.View`
  background-color: #1d1d1d20;
  justify-content: center;
  flex: 1;
  padding-left: 8px;
`;

const StageItemTitleText = styled(DefaultText)`
  color: #ffffff;
  font-family: Montserrat_400Regular;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

const StagesDescription = styled.View`
  width: 100%;
  flex-direction: row;
`;

const StageStep = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  margin-horizontal: 18px;
  text-align: center;
`;

interface StagesProps {
  currentStep: number
}

const Stages = ({ currentStep }: StagesProps) => {
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

  return (
    <StagesContainer>
      <Arrow
        style={{ top: 36 * currentStep }}
        xml={`
          <svg width="12" height="36" viewBox="0 0 12 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 18L2.76017e-07 35.3205L1.79022e-06 0.679491L12 18Z" fill="#F99942"/>
          </svg>        
        `}
      />
      <StagesWrapper>
        {stages.map(({ title, position, color }, idx) => (
          <StageItem key={`stage_${idx}`} style={{ backgroundColor: color }}>
            <StageItemPosition>
              <StageItemPositionText>{position}</StageItemPositionText>
            </StageItemPosition>
            <StageItemTitle>
              <StageItemTitleText>{title}</StageItemTitleText>
            </StageItemTitle>
          </StageItem>
        ))}
      </StagesWrapper>
      <StagesDescription
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
        <StageStep style={{ color: '#F04B40' }}>
          PoC
        </StageStep>
        <StageStep style={{ color: '#F9D142' }}>
          Protótipos
        </StageStep>
        <StageStep style={{ color: Colors.primary }}>
          Mercado
        </StageStep>
      </StagesDescription>
    </StagesContainer>
  );
};

export const Technology = () => (
  <AccordionItemWrapper>
    <Subtitle>Identificação</Subtitle>
    <Description>
      <Highlight>Título: </Highlight>
      Barragem subterrânea
    </Description>
    <Description>
      <Highlight>Categoria: </Highlight>
      Recursos Hídricos, Coleta de água de chuva
    </Description>
    <Description>
      <Highlight>Classificação: </Highlight>
      Tecnologias Sociais
    </Description>
    <Description>
      <Highlight>Dimensão: </Highlight>
      Econômica
    </Description>
    <Description>
      <Highlight>Público-alvo: </Highlight>
      Agricultores
    </Description>
    <Description>
      <Highlight>Bioma: </Highlight>
      Caatinga
    </Description>
    <Subtitle>Estágio de desenvolvimento</Subtitle>
    <Stages currentStep={0} />
  </AccordionItemWrapper>
);

export const Characteristics = () => (
  <AccordionItemWrapper>
    <Subtitle>Objetivos</Subtitle>
    <Description>
      <Highlight>Objetivo Principal: </Highlight>
      barrar o fluxo de água superficial e subterrâneo através de uma parede/septo impermeável (plástico de 200 micra) construída dentro do solo, transversalmente à direção das águas. Esse barramento armazena água com perdas mínimas de umidade, mantendo o solo úmido por um período maior de tempo, a depender das chuvas ocorridas, três a seis meses após o período chuvoso.
    </Description>
    <Subtitle>Aplicação</Subtitle>
    <Description>
      <Highlight>Onde é a Aplicação: </Highlight>
      Dentro do solo
    </Description>
    <Description>
      <Highlight>Aplicação: </Highlight>
      Dentro do solo
    </Description>
    <Description>
      <Highlight>Pré-requisitos para a implantação: </Highlight>
      1. atender aos parâmetros técnicos de construção da tecnologia; 2. possuir certo nível de organização; 3. demandar ações de assistência técnica; e 4. praticar sistemas de produção dentro dos princípios da agroecologia. Todas as propriedades, comunidades e/ou assentamentos visitadas foram georeferenciadas e as informações foram armazenadas para compor banco de dados/sistema de informação e confecção de mapas de localização da propriedade. Paralelo à seleção das comunidades, foram ministradas capacitações/sensibilizações dos agricultores e técnicos em serviço, com formação de multiplicadores, objetivando torná-los aptos para construção, manejo e manutenção da tecnologia. Essa sensibilização dos agricultores foi realizada através de oficinas de construção do conhecimento, dias de campo e cursos.
    </Description>
    <Description>
      <Highlight>Duração do processo de instalação da tecnologia: </Highlight>
      5 dias.
    </Description>
  </AccordionItemWrapper>
);
