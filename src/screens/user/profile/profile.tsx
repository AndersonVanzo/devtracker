import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import ScreenContainer from '../../../components/screen-container/screencontainer';
import { styles } from './styles';
import Header from './components/header/header';
import Followers from './components/followers/followers';
import Button from '../../../components/button/button';
import { colors } from '../../../common/colors';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Loader from './components/loader/loader';
import { api } from '../../../api/api';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  addLastSearched,
  getSelectedUser,
  removeSelectedUser,
  setSelectedUser,
  updatedSearchedUser,
} from '../../../redux/features/users/usersSlice';
import NotFound from './components/not-found/notfound';
import ErrorView from '../../../components/error-view/errorview';

type ProfileScreenProps = CompositeScreenProps<
  NativeStackScreenProps<UserNavigationParamList, 'ProfileScreen'>,
  NativeStackScreenProps<RootStackParamsList>
>;

const Profile = ({ navigation, route }: ProfileScreenProps) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);

  const userData = useAppSelector(getSelectedUser);
  const dispatch = useAppDispatch();

  const onBackButtonPress = () => {
    dispatch(removeSelectedUser());
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }
    navigation.navigate('HomeScreen');
  };

  const onRepositoriesButtonPress = () => {
    navigation.navigate('UserNavigation', { screen: 'RepositoresScreen' });
  };

  const searchNewUser = async () => {
    setLoading(true);
    const response = await loadUserData();
    setLoading(false);
    if (response.success && response.data) {
      dispatch(addLastSearched(response.data));
    }
    if (!response.success && response.status !== 404) {
      setError(true);
    }
  };

  const updateLoadedUser = async () => {
    setLoading(false);
    const response = await loadUserData();
    if (response.success && response.data) {
      dispatch(updatedSearchedUser(response.data));
    }
  };

  const loadUserData = async () => {
    const response = await api.users.get(route.params.search);
    if (response.success && response.data) {
      dispatch(setSelectedUser(response.data));
    }
    return response;
  };

  React.useEffect(() => {
    if (userData) {
      updateLoadedUser();
    } else {
      searchNewUser();
    }
  }, []);

  return (
    <ScreenContainer padding={false}>
      <Header onBackButtonPress={onBackButtonPress} />
      {loading ? (
        <Loader />
      ) : userData ? (
        <ScrollView>
          <Image style={styles.image} source={{ uri: userData.avatar_url }} />
          <View style={styles.content}>
            <Text style={styles.username}>{userData.name}</Text>
            {userData.email ? <Text style={styles.email}>{userData.email}</Text> : null}
            {userData.bio ? <Text style={styles.biography}>{userData.bio}</Text> : null}
            <Followers />
            <Button label={'See repositores'} onPress={onRepositoriesButtonPress} customColor={colors.secondary} />
          </View>
        </ScrollView>
      ) : error ? (
        <ErrorView />
      ) : (
        <NotFound />
      )}
    </ScreenContainer>
  );
};

export default Profile;
