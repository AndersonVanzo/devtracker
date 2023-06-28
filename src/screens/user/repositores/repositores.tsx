import React from 'react';
import ScreenContainer from '../../../components/screen-container/screencontainer';
import Header from './components/header/header';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RepositoriesScreenProps = CompositeScreenProps<
  NativeStackScreenProps<UserNavigationParamList, 'RepositoresScreen'>,
  NativeStackScreenProps<RootStackParamsList>
>;

const Repositores = ({ navigation }: RepositoriesScreenProps) => {
  const onBackButtonPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }
    navigation.navigate('HomeScreen');
  };

  return (
    <ScreenContainer>
      <Header onBackButtonPress={onBackButtonPress} />
    </ScreenContainer>
  );
};

export default Repositores;
