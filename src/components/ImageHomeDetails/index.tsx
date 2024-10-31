import React from 'react';

import {
  Container,
  Title,
  ContainerPercentage,
  ContainerTitle,
  ContentList,
  TitleItem,
  TitlePercentage,
  ContainerPercentageOpacity,
  ScrollView,
} from './styles';
import {useLoading} from '../../hooks/useLoding';
import {ActivityIndicator} from 'react-native';

interface ItemsData {
  name: string;
  value: string;
}

interface Props {
  items: ItemsData[];
}

export function ImageHomeDetails({items}: Props) {
  const {loading} = useLoading();

  return (
    <Container>
      <Title>Descrição da imagem</Title>

      <ScrollView>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <>
            {items?.map((item, index) => {
              return (
                <ContentList key={index.toString()}>
                  <ContainerTitle>
                    <TitleItem>{item.name}</TitleItem>
                  </ContainerTitle>

                  <ContainerPercentage>
                    <TitlePercentage>{item.value}</TitlePercentage>

                    <ContainerPercentageOpacity />
                  </ContainerPercentage>
                </ContentList>
              );
            })}
          </>
        )}
      </ScrollView>
    </Container>
  );
}
