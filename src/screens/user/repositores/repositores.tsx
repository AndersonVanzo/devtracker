import React from 'react';
import ScreenContainer from '../../../components/screen-container/screencontainer';
import Header from './components/header/header';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RepositoryCard from './components/repository-card/repositorycard';
import { useAppSelector } from '../../../redux/hooks';
import { getSelectedUser } from '../../../redux/features/users/usersSlice';
import { api } from '../../../api/api';
import Loader from '../../../components/loader/loader';
import ErrorView from '../../../components/error-view/errorview';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import EmptyView from './components/empty-view/emptyview';

type RepositoriesScreenProps = CompositeScreenProps<
  NativeStackScreenProps<UserNavigationParamList, 'RepositoresScreen'>,
  NativeStackScreenProps<RootStackParamsList>
>;

type SortType = 'A-Z' | 'Z-A';

const Repositores = ({ navigation }: RepositoriesScreenProps) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const [repos, setRepos] = React.useState<UserRepositoryList>([]);
  const [sort, setSort] = React.useState<SortType>('A-Z');

  const baseRepos = React.useRef<UserRepositoryList>([]);

  const userData = useAppSelector(getSelectedUser);

  const handleChangeSort = () => {
    const newRepos = [...baseRepos.current];
    if (sort === 'Z-A') {
      setRepos(newRepos);
      setSort('A-Z');
      return;
    }
    newRepos.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    setRepos(newRepos);
    setSort('Z-A');
    return;
  };

  const onSelectRepository = (data: UserRepositoryList[number]) => {
    if (!userData) {
      return;
    }
    navigation.navigate('RepositoryScreen', { userName: userData.login, repositoryName: data.name });
  };

  const onBackButtonPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }
    navigation.navigate('HomeScreen');
  };

  const loadUserRepositories = async () => {
    if (!userData) {
      return onBackButtonPress();
    }
    setLoading(true);
    const response = await api.users.repos(userData.login);
    setLoading(false);
    if (response.success && response.data) {
      const newRepos = response.data;
      newRepos.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      baseRepos.current = newRepos;
      setRepos(newRepos);
      return;
    }
    if (!response.success) {
      setError(true);
    }
  };

  React.useEffect(() => {
    loadUserRepositories();
  }, []);

  return (
    <ScreenContainer>
      <Header onBackButtonPress={onBackButtonPress} />
      {loading ? (
        <Loader message={'Searching repositories...'} />
      ) : error ? (
        <ErrorView />
      ) : repos.length === 0 ? (
        <EmptyView />
      ) : (
        <React.Fragment>
          <TouchableOpacity activeOpacity={0.75} style={styles.sortContainer} onPress={handleChangeSort}>
            <Text style={styles.sortText}>Sort by: </Text>
            <Text style={styles.sortType}>{sort}</Text>
          </TouchableOpacity>
          <FlatList
            data={repos}
            renderItem={({ item }) => <RepositoryCard key={item.id} data={item} onSelect={onSelectRepository} />}
            contentContainerStyle={styles.listContent}
          />
        </React.Fragment>
      )}
    </ScreenContainer>
  );
};

export default Repositores;
