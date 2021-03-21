/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Linking, TouchableOpacity, View } from 'react-native';
import ImageView from '@hamidfzm/react-native-image-viewing';
import YoutubePlayer from 'react-native-youtube-iframe';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as S from './styles';
import { Accordion } from '../../../../components';
import Colors from '../../../../utils/colors';
import { useTechnology } from '../../../../hooks/useTechnology';
import { unitsOptions } from '../../../../utils/technology';
import { formatCurrencyToInt, formatMoney, technologyStages } from '../../../../utils/helper';
import ImageList from '../../../../components/Gallery/ImageList';

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
      {technologyStages.map(({ title, position, color }, idx) => (
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
      <S.DetailsText>
        <S.Highlight>Título: </S.Highlight>
        {technology.title}
      </S.DetailsText>
      {false && (
        <S.DetailsText>
          <S.Highlight>Categoria: </S.Highlight>
          {technology.taxonomies?.category}
        </S.DetailsText>
      )}
      <S.DetailsText>
        <S.Highlight>Classificação: </S.Highlight>
        {technology.taxonomies?.classification}
      </S.DetailsText>
      <S.DetailsText>
        <S.Highlight>Dimensão: </S.Highlight>
        {technology.taxonomies?.dimension}
      </S.DetailsText>
      <S.DetailsText>
        <S.Highlight>Público-alvo: </S.Highlight>
        {technology.taxonomies?.target_audience}
      </S.DetailsText>
      <S.DetailsText>
        <S.Highlight>Bioma: </S.Highlight>
        {technology.taxonomies?.biome}
      </S.DetailsText>
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
      <S.DetailsText>
        <S.Highlight>Objetivo Principal: </S.Highlight>
        {technology.primary_purpose}
      </S.DetailsText>
      <S.Subtitle>Aplicação</S.Subtitle>
      <S.DetailsText>
        <S.Highlight>Onde é a Aplicação: </S.Highlight>
        {technology.application_mode}
      </S.DetailsText>
      <S.DetailsText>
        <S.Highlight>Pré-requisitos para a implantação: </S.Highlight>
        {technology.requirements}
      </S.DetailsText>
      <S.DetailsText>
        <S.Highlight>Duração do processo de instalação da tecnologia: </S.Highlight>
        {`${technology.installation_time} dias.`}
      </S.DetailsText>
    </S.AccordionItemWrapper>
  );
};

interface CostsItemsProps {
  data: {
    id: number,
    description: string,
    type: string,
    quantity: number,
    value: number,
    measure_unit: string
  }[]
}

export const CostsItems = ({ data } : CostsItemsProps) => {
  const emptyMessage = 'Nenhum custo cadastrado.';
  let isEmpty = false;

  if (!data?.length || !Array.isArray(data)) {
    isEmpty = true;
  }

  const typesValues = [
    {
      value: 'service',
      label: 'Serviço',
    },
    {
      value: 'raw_input',
      label: 'Insumo',
    },
    {
      value: 'equipment',
      label: 'Equipamento',
    },
    {
      value: 'others',
      label: 'Outro',
    },
  ];

  const getTypeLabelByValue = (value: string) => {
    const typeLabel = typesValues.find((type) => type.value === value);

    return typeLabel?.label || value;
  };

  const getUnitLabelByValue = (value: string) => {
    const unitItem = unitsOptions.find((unit:any) => unit.value === value);

    return unitItem?.label || value;
  };

  const items = data?.map((item) => ({
    id: item?.id,
    description: item?.description,
    type: getTypeLabelByValue(item?.type),
    quantity: item?.quantity,
    value: item?.value,
    measure_unit: getUnitLabelByValue(item?.measure_unit),
    total: formatCurrencyToInt(item?.value || 0) * parseInt(item?.quantity.toString() || '0', 10),
  }));

  const total = items?.reduce((acc, item) => acc + item.total, 0);

  return (
    <>
      {!isEmpty ? (
        <>
          {items?.map((item) => (
            <S.Row key={item.id}>
              <S.Col1>
                <S.Field>
                  <S.ColTextBold>
                    {item.description}
                  </S.ColTextBold>
                </S.Field>
                <S.Field><S.ColTextLight>{item.type}</S.ColTextLight></S.Field>
              </S.Col1>
              <S.Col2>
                <S.Field>
                  <S.ColText>
                    {item.quantity}
                    x
                  </S.ColText>
                </S.Field>
                <S.Field><S.ColTextLight /></S.Field>
              </S.Col2>
              <S.Col3>
                <S.Field>
                  <S.ColText>
                    {`R$ ${item.value}`}
                  </S.ColText>
                </S.Field>
                <S.Field><S.ColTextLight>{formatMoney(item.total)}</S.ColTextLight></S.Field>
              </S.Col3>
            </S.Row>
          ))}
          <View style={{ flexDirection: 'row-reverse' }}>
            <S.TotalValue>{formatMoney(total)}</S.TotalValue>
            <S.TotalLabel>Total: </S.TotalLabel>
          </View>
        </>
      ) : (
        <S.ColText style={{ marginBottom: 20 }}>{emptyMessage}</S.ColText>
      )}
    </>
  );
};

export const Costs = () => {
  const technology = useTechnology();

  return (
    <S.AccordionItemWrapper>
      <S.CostSection>Custos de Implantação</S.CostSection>
      <CostsItems data={technology?.costs?.implementation_costs} />

      <S.CostSection>Custos de Manutenção</S.CostSection>
      <CostsItems data={technology?.costs?.maintenance_costs} />

    </S.AccordionItemWrapper>
  );
};

export const Documents = () => {
  const [currentImageIndex, setImageIndex] = useState(0);
  const technology = useTechnology();
  const [isVisible, setIsVisible] = useState(false);

  const images = technology.attachments?.images.map((image) => ({ original: image.url }));
  const videos = technology.videos.map((video: any) => ({ original: video.thumbnail, videoId: video.videoId }));

  const onSelect = (index: number) => {
    setImageIndex(index);
    setIsVisible(true);
  };

  const onRequestClose = () => setIsVisible(false);
  const getItem = (data: any) => ({ uri: data.original });

  return (
    <S.AccordionItemWrapper>
      <S.CostSection>Fotos</S.CostSection>

      <ImageList
        images={images.map((image) => image.original)}
        onPress={(index: number) => onSelect(index)}
        shift={0.25}
      />

      <ImageView
        data={images}
        getImage={getItem}
        onRequestClose={onRequestClose}
        imageIndex={currentImageIndex}
        visible={isVisible}
        presentationStyle="overFullScreen"
      />

      {technology.videos?.length ? (
        <>
          <S.CostSection style={{ marginTop: 30 }}>Vídeos</S.CostSection>

          {videos.map((video) => (
            <View key={`video_${video.videoId}`} style={{ marginBottom: 0 }}>
              <YoutubePlayer
                height={240}
                videoId={video.videoId}
              />
            </View>
          ))}
        </>
      ) : null}

      {technology.attachments.documents?.length ? (
        <>
          <S.CostSection style={{ marginTop: 30 }}>Documentos</S.CostSection>
          {technology.attachments.documents.map((document) => (
            <TouchableOpacity
              key={`document_${document.id}`}
              onPress={() => {
                Linking.openURL(document.url);
              }}
            >
              <S.ColText>
                <MaterialCommunityIcons name="file-document-outline" size={24} color="black" style={{ paddingRight: 5 }} />
                {document.filename}
              </S.ColText>
            </TouchableOpacity>
          ))}
        </>
      ) : null}

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
          content: <Documents />,
        },
      ]}
    />
  </S.Wrapper>
);

export default Details;
