import React from 'react';
import ScreenContainer from '../../components/screen-container/screencontainer';
import PageTitle from '../../components/page-title/pagetitle';
import SearchBar from '../../components/search-bar/searchbar';
import Button from '../../components/button/button';
import { TextInput, View } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getLastSearched, setSelectedUser } from '../../redux/features/users/usersSlice';
import RecentSearch from './components/recent-search/recentsearch';

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>;

const Home = ({ navigation }: HomeScreenProps) => {
  const [searchText, setSearchText] = React.useState<string>('');
  const inputRef = React.useRef<TextInput>(null);

  const lastSearched = useAppSelector(getLastSearched);
  const dispatch = useAppDispatch();

  const onSelectedUser = (user: UserData) => {
    dispatch(setSelectedUser(user));
    navigation.navigate('UserNavigation', { screen: 'ProfileScreen', params: { search: user.login } });
  };

  const onSearchButtonPress = () => {
    if (searchText.length === 0) {
      inputRef.current?.focus();
      return;
    }
    setSearchText('');
    navigation.navigate('UserNavigation', { screen: 'ProfileScreen', params: { search: searchText } });
  };

  React.useEffect(() => {
    return () => setSearchText('');
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <PageTitle title={'Find'} effectTitle={'a dev'} />
        <SearchBar
          ref={inputRef}
          value={searchText}
          onSubmit={onSearchButtonPress}
          placeholder={'Search a dev'}
          onChangeValue={setSearchText}
        />
        <Button label={'Find'} onPress={onSearchButtonPress} />
        {lastSearched.length > 0 ? <RecentSearch data={lastSearched} onSelect={onSelectedUser} /> : null}
      </View>
    </ScreenContainer>
  );
};

export default Home;
