import React from 'react';
import ScreenContainer from '../../components/screen-container/screencontainer';
import PageTitle from '../../components/page-title/pagetitle';
import SearchBar from '../../components/search-bar/searchbar';
import Button from '../../components/button/button';
import { TextInput, View } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>;

const Home = ({ navigation }: HomeScreenProps) => {
  const [searchText, setSearchText] = React.useState<string>('');
  const inputRef = React.useRef<TextInput>(null);

  const onSearchButtonPress = () => {
    if (searchText.length === 0) {
      inputRef.current?.focus();
      return;
    }
    navigation.navigate('UserNavigation', { screen: 'ProfileScreen', params: { search: searchText } });
  };

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <PageTitle title={'Find'} effectTitle={'a dev'} />
        <SearchBar ref={inputRef} value={searchText} placeholder={'Search a dev'} onChangeValue={setSearchText} />
        <Button label={'Find'} onPress={onSearchButtonPress} />
      </View>
    </ScreenContainer>
  );
};

export default Home;
