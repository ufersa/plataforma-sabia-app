/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React, { useEffect, useState, useRef } from 'react';
import {
  Platform,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageView from '@hamidfzm/react-native-image-viewing';
import YoutubePlayer from 'react-native-youtube-iframe';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Accordion, Pins, Button } from '@components/.';
import Colors from '@utils/colors';
import { useTechnology } from '@hooks/useTechnology';
import { unitsOptions, TYPES as typesEnum } from '@utils/technology';
import {
  formatCurrencyToInt,
  formatMoney,
  technologyStages,
  zoomToAltitude,
} from '@utils/helper';
import ImageList from '@components/Gallery/ImageList';
import { getTechnologyTerms } from '@services/technology';
import { useAuth } from '@hooks/useAuth';
import { useModal } from '@hooks/useModal';

import * as S from './styles';

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
      <S.DetailsText>
        <S.Highlight>Tipo: </S.Highlight>
        {typesEnum.find((type) => type.value === technology.type)?.label}
      </S.DetailsText>
      <S.DetailsText>
        <S.Highlight>Grande área: </S.Highlight>
        {technology.knowledgeAreas?.greatArea.name}
      </S.DetailsText>
      <S.DetailsText>
        <S.Highlight>Área: </S.Highlight>
        {technology.knowledgeAreas?.area.name}
      </S.DetailsText>
      {technology.knowledgeAreas?.subArea ? (
        <S.DetailsText>
          <S.Highlight>Sub-área: </S.Highlight>
          {technology.knowledgeAreas?.subArea.name}
        </S.DetailsText>
      ) : (<></>)}
      {technology.knowledgeAreas?.speciality ? (
        <S.DetailsText>
          <S.Highlight>Especialidade: </S.Highlight>
          {technology.knowledgeAreas?.speciality?.name}
        </S.DetailsText>
      ) : (<></>)}
      <S.DetailsText>
        <S.Highlight>Domínio público: </S.Highlight>
        {technology.public_domain ? 'Sim' : 'Não'}
      </S.DetailsText>
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
      <S.DetailsText>
        <S.Highlight>Programa Governamental: </S.Highlight>
        {technology.taxonomies?.government_program || 'Nenhum'}
      </S.DetailsText>
      <S.DetailsText>
        <S.Highlight>Registro de patente depositado: </S.Highlight>
        {technology.patent ? 'Sim' : 'Não'}
      </S.DetailsText>
      <S.Subtitle>Estágio de desenvolvimento</S.Subtitle>
      <Stages currentStep={technology.currentLevel || 1} />
    </S.AccordionItemWrapper>
  );
};

export const Characteristics = () => {
  const technology = useTechnology();

  console.log(technology.knowledgeAreas);

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
        <S.Highlight>Exemplos de Aplicação: </S.Highlight>
        {technology.application_examples}
      </S.DetailsText>
      <S.DetailsText>
        <S.Highlight>Pré-requisitos para a implantação: </S.Highlight>
        {technology.requirements}
      </S.DetailsText>
      <S.DetailsText>
        <S.Highlight>Duração do processo de instalação da tecnologia: </S.Highlight>
        {`${technology.installation_time} dias.`}
      </S.DetailsText>

      <S.Subtitle>Problematização</S.Subtitle>

      <S.DetailsText>
        <S.Highlight>Problemas que a tecnologa soliciona: </S.Highlight>
        {technology.solves_problem}
      </S.DetailsText>

      <S.Subtitle>Contribuição</S.Subtitle>
      <S.DetailsText>
        <S.Highlight>Contribuição para o semiárido: </S.Highlight>
        {technology.contribution}
      </S.DetailsText>

      <S.Subtitle>Riscos</S.Subtitle>
      <S.DetailsText>
        <S.Highlight>Riscos associados à tecnologia: </S.Highlight>
        {technology.risks}
      </S.DetailsText>

    </S.AccordionItemWrapper>
  );
};

interface MarkerProps {
  type: string
  [key: string]: any
}

export const Geo = (): JSX.Element => {
  const { user } = useAuth();
  const { openModal } = useModal();
  const technology = useTechnology();
  const types: string[] = ['who_develop', 'where_can_be_applied', 'where_is_already_implemented'];
  const region = {
    latitude: -6.780127,
    longitude: -36.702823,
  };
  const zoom = Platform.OS === 'ios' ? -1500 : 6;
  const mapRef = useRef(null);

  const [markers, setMarkers] = useState([]);
  const [cachedMarkers, setCachedMarkers] = useState([]);
  const [markerFilters, setMarkerFilters] = useState<string[]>(types);

  const formatMarkers = (term: any) => {
    const colors: string[] = ['blue', 'yellow', 'red'];
    const marker: MarkerProps = { type: term.term };

    term.metas.forEach(({ meta_key, meta_value }: any) => {
      marker[meta_key] = meta_value;
    });

    return {
      ...marker,
      color: colors[types.indexOf(marker.type)],
    };
  };

  useEffect(() => {
    if (user) {
      const getTerms = async () => {
        const terms = await getTechnologyTerms(technology.id);
        const formattedMarkers = terms.filter(({ term }: any) => markerFilters.includes(term)).map(formatMarkers);
        setMarkers(formattedMarkers);
        setCachedMarkers(formattedMarkers);
      };

      getTerms();

      mapRef.current.animateCamera({
        center: region,
        zoom,
        altitude: zoomToAltitude(zoom),
      }, 400);
    }
  }, [user]);

  useEffect(() => {
    if (user) setMarkers(cachedMarkers.filter(({ type }: any) => markerFilters.includes(type)));
  }, [user, markerFilters]);

  return (
    user ? (
      <>
        <S.MapWrapper>
          <MapView
            ref={mapRef}
            loadingEnabled
            zoomControlEnabled
            initialRegion={{
              ...region,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{
              height: 300,
            }}
          >
            {markers?.map((marker, idx) => (
              <Marker
                key={`marker_${idx}`}
                title={marker.description}
                coordinate={{
                  latitude: Number(marker.latitude),
                  longitude: Number(marker.longitude),
                }}
              >
                <Pins color={marker.color} />
              </Marker>
            ))}
          </MapView>
        </S.MapWrapper>
        <S.MapFiltersWrapper>
          <S.Filter
            selected={markerFilters}
            data={[
              {
                name: 'Onde é desenvolvida',
                ref: 'who_develop',
                color: 'blue',
              },
              {
                name: 'Onde pode ser aplicada',
                ref: 'where_can_be_applied',
                color: 'yellow',
              },
              {
                name: 'Onde já está implementada',
                ref: 'where_is_already_implemented',
                color: 'red',
              },
            ]}
            onChange={(filter: string) => {
              setMarkerFilters((oldItems: string[]) => (oldItems.includes(filter) ? oldItems.filter((i) => i !== filter) : [...oldItems, filter]));
            }}
          />
        </S.MapFiltersWrapper>
      </>
    ) : (
      <S.ButtonWrapper>
        <Button onPress={() => openModal()}>Entrar na sua conta</Button>
      </S.ButtonWrapper>
    )
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
  const isEmpty = !data?.length || !Array.isArray(data);
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
        <S.ColText style={{ marginBottom: 20 }}>
          Nenhum custo cadastrado.
        </S.ColText>
      )}
    </>
  );
};

export const Costs = () => {
  const { user } = useAuth();
  const { openModal } = useModal();
  const technology = useTechnology();

  return (
    user ? (
      <S.AccordionItemWrapper>
        <S.CostSection>Custos de Implantação</S.CostSection>
        <CostsItems data={technology?.costs?.implementation_costs} />
        <S.CostSection>Custos de Manutenção</S.CostSection>
        <CostsItems data={technology?.costs?.maintenance_costs} />
      </S.AccordionItemWrapper>
    ) : (
      <S.ButtonWrapper>
        <Button onPress={() => openModal()}>Entrar na sua conta</Button>
      </S.ButtonWrapper>
    )
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
          title: 'Mapas',
          content: <Geo />,
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
