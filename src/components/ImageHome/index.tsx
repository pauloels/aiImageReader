import React, {useCallback, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import {
  ButtonSelectImage,
  ButtonTitle,
  Container,
  ImageContainer,
  Title,
} from './styles';
import {useLoading} from '../../hooks/useLoding';

interface Props {
  handleDetectImage: (image: string) => void;
}

export function ImageHome({handleDetectImage}: Props) {
  const [imagemSelected, setImagemSelected] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const {handleLoading} = useLoading();

  const handleImagePicker = useCallback(async () => {
    try {
      setLoading(true);
      handleLoading(true);

      const response = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
        includeBase64: true,
        mediaType: 'photo',
        forceJpg: true,
        compressImageMaxHeight: 1,
        compressImageMaxWidth: 1,
      });

      if (response.sourceURL) {
        setImagemSelected(response.sourceURL);
      }

      if (response.data) {
        handleDetectImage(
          'https://images.unsplash.com/photo-1618239508321-3f6950699431?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        );
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);

      return;
    }
  }, [handleDetectImage, handleLoading]);

  return (
    <Container>
      <ImageContainer source={{uri: imagemSelected}}>
        {imagemSelected === '' && (
          <Title>Selecione uma imagem para a IA verificar</Title>
        )}

        <ButtonSelectImage
          disabled={loading}
          onPress={() => handleImagePicker()}>
          <ButtonTitle>Selecionar Imagem</ButtonTitle>
        </ButtonSelectImage>
      </ImageContainer>
    </Container>
  );
}
