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
import { FlatList, View } from 'react-native';
import { styles } from './styles';

type RepositoriesScreenProps = CompositeScreenProps<
  NativeStackScreenProps<UserNavigationParamList, 'RepositoresScreen'>,
  NativeStackScreenProps<RootStackParamsList>
>;

const Repositores = ({ navigation }: RepositoriesScreenProps) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const [repos, setRepos] = React.useState<UserRepositoryList>([]);

  const userData = useAppSelector(getSelectedUser);

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
    if (response.success && response.data) {
      setRepos(response.data);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    loadUserRepositories();
  }, []);

  return (
    <ScreenContainer padding={false}>
      <Header onBackButtonPress={onBackButtonPress} />
      {loading ? (
        <Loader message={'Searching repositories...'} />
      ) : error ? (
        <ErrorView />
      ) : (
        <FlatList
          data={repos}
          style={styles.list}
          renderItem={({ item }) => <RepositoryCard key={item.id} data={item as UserRepository} />}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        />
      )}
    </ScreenContainer>
  );
};

export default Repositores;
