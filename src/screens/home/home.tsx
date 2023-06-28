import React from 'react';
import ScreenContainer from '../../components/screen-container/screencontainer';
import PageTitle from '../../components/page-title/pagetitle';
import SearchBar from '../../components/search-bar/searchbar';
import Button from '../../components/button/button';
import { View } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>;

const Home = ({ navigation }: HomeScreenProps) => {
  const onSearchButtonPress = () => {
    navigation.navigate('UserNavigation', { screen: 'ProfileScreen' });
  };

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <PageTitle title={'Find'} effectTitle={'a dev'} />
        <SearchBar value={''} placeholder={'Search a dev'} onChangeValue={() => console.log()} />
        <Button label={'Find'} onPress={onSearchButtonPress} />
      </View>
    </ScreenContainer>
  );
};

export default Home;
