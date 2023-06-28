import React from 'react';
import ScreenContainer from '../../components/screen-container/screencontainer';
import PageTitle from '../../components/page-title/pagetitle';
import SearchBar from '../../components/search-bar/searchbar';
import Button from '../../components/button/button';
import { View } from 'react-native';
import { styles } from './styles';

const Home = () => {
  return (
    <ScreenContainer>
      <View style={styles.content}>
        <PageTitle title={'Find'} effectTitle={'a dev'} />
        <SearchBar value={''} placeholder={'Search a dev'} onChangeValue={() => console.log()} />
        <Button label={'Find'} onPress={() => console.log()} />
      </View>
    </ScreenContainer>
  );
};

export default Home;
