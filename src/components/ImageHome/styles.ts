import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  height: ${width - 20}px;
`;

export const ImageContainer = styled.ImageBackground`
  width: ${width}px;
  height: ${width}px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: 'Roboto-Regular';
  margin-bottom: 20px;
`;

export const ButtonSelectImage = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  align-self: center;
  position: absolute;
  bottom: 30px;
  align-items: center;
  justify-content: center;
  background-color: #433d8b;
  border-radius: 10px;
`;

export const ButtonTitle = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: 'Roboto-Bold';
`;
