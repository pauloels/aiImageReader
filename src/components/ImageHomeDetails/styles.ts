import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: ${height * 0.5}px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #51557e;
  padding: 20px 20px 30px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'Roboto-Bold';
  margin-bottom: 20px;
`;

export const ScrollView = styled.ScrollView``;

export const ContentList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 8px;
`;

export const ContainerTitle = styled.View``;

export const TitleItem = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: 'Roboto-Regular';
`;

export const ContainerPercentage = styled.View`
  width: 35px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

export const ContainerPercentageOpacity = styled.View`
  background-color: #5b4b8a;
  opacity: 0.3;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  align-self: center;
  border-radius: 4px;
`;

export const TitlePercentage = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: 'Roboto-Bold';
`;
