/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import TechnologyCard from '../Card';
import * as S from './styles';
import { Placeholder } from '../../../../components';
import useFind from '../../../../hooks/useFind';

interface TechnologiesProps {
  navigation: StackNavigationProp<any, any>
}
interface ServicesItemProps {
  id?: number
  title?: string
  name?: string
  description: string
  status?: string
  date?: string
  thumbnail: {
    url: string
  }
  image?: {
  }
  price: number
  category?: {
    name: string
  }
  created_at: string
  measure_unit: string
  user: {
    institution: {
      name: string
    }
  }
}

const Services = ({ navigation }: TechnologiesProps): JSX.Element => {
  const { loading, services } = useFind('services', {
    embed: '',
    perPage: 10,
    orderBy: 'likes',
    order: 'DESC',
  });

  return (
    <>
      {
        loading ? (
          <Placeholder
            style={{
              width: 200,
              marginLeft: 16,
              marginTop: 0,
              marginBottom: 12,
            }}
          />
        ) : (
          <S.Title>Serviços em destaque</S.Title>
        )
      }
      <S.TechnologiesWrapper
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={4}
        decelerationRate={0}
        snapToInterval={294 - (16 + 10)}
        snapToAlignment="start"
        contentContainerStyle={{
          alignItems: 'flex-start',
        }}
      >
        {loading ? (
          <>
            {[0, 1, 2].map((technology, idx: number) => (
              <TechnologyCard
                type="service"
                key={`technology_${idx}`}
                loading
                style={{
                  marginRight: (idx + 1) === 3 ? 36 : 20,
                }}
              />
            ))}
          </>
        ) : (
          services && services.length > 0
            ? services.map((service: ServicesItemProps, idx: number) => (
              <TechnologyCard
                type="service"
                key={`service_${idx}`}
                data={{
                  id: service.id,
                  title: service.name,
                  description: service.description,
                  image: service.thumbnail?.url,
                  price: service.price,
                  createdAt: service.created_at,
                  measureUnit: service.measure_unit,
                  institution: service.user.institution.name,
                  isSeller: true,
                }}
                navigation={navigation}
                loading={false}
                style={{
                  marginRight: (idx + 1) === services.length ? 36 : 20,
                }}
              />
            ))
            : <S.Empty>Nenhum serviço</S.Empty>
        )}
      </S.TechnologiesWrapper>
    </>
  );
};

export default Services;
