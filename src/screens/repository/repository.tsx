import ScreenContainer from '../../components/screen-container/screencontainer';
import React from 'react';
import { Linking, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Loader from '../../components/loader/loader';
import { api } from '../../api/api';
import { styles } from './styles';
import Header from './components/header/header';
import { colors } from '../../common/colors';
import { getLanguageColor } from '../../utils/getLanguageColor';
import Content from './components/content/content';
import AccessButton from './components/access-button/accessbutton';

type RepositoryScreenProps = NativeStackScreenProps<RootStackParamsList, 'RepositoryScreen'>;

const Repository = ({ navigation, route }: RepositoryScreenProps) => {
  const [headerColor, setHeaderColor] = React.useState<string>(colors.text_light);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<UserRepository>();

  const onBackButtonPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }
    navigation.navigate('HomeScreen');
  };

  const onAccessButtonPress = () => {
    if (!data) {
      return;
    }
    Linking.openURL(data.html_url);
  };

  const loadRepositoryData = async () => {
    setLoading(true);
    const response = await api.repos.get(route.params.userName, route.params.repositoryName);
    setLoading(false);
    if (response.success && response.data) {
      setHeaderColor(getLanguageColor(response.data.language));
      setData(response.data);
    }
  };

  React.useEffect(() => {
    loadRepositoryData();
  }, []);

  return (
    <ScreenContainer>
      {loading ? (
        <Loader message={'Collecting repository data'} />
      ) : data ? (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <Header headerColor={headerColor} onBackButtonPress={onBackButtonPress} />
          <Content data={data} />
          <AccessButton onPress={onAccessButtonPress} />
        </ScrollView>
      ) : null}
    </ScreenContainer>
  );
};

export default Repository;
