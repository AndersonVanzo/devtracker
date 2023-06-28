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

type ProfileScreenProps = CompositeScreenProps<
  NativeStackScreenProps<UserNavigationParamList, 'ProfileScreen'>,
  NativeStackScreenProps<RootStackParamsList>
>;

const Profile = ({ navigation }: ProfileScreenProps) => {
  const onBackButtonPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }
    navigation.navigate('HomeScreen');
  };

  const onRepositoriesButtonPress = () => {
    navigation.navigate('UserNavigation', { screen: 'RepositoresScreen' });
  };

  return (
    <ScreenContainer padding={false}>
      <Header onBackButtonPress={onBackButtonPress} />
      <ScrollView>
        <Image style={styles.image} source={{ uri: 'https://aliancatraducoes.com/wp-content/uploads/2019/10/o-que-sao-cat-tools.jpg' }} />
        <View style={styles.content}>
          <Text style={styles.username}>Anderson Vanzo</Text>
          <Text style={styles.email}>anderson.vanzo01@gmail.com</Text>
          <Text style={styles.biography}>
            Bio - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod, nibh non consectetur euismod, sapien tellus lacinia
            mi, ut finibus erat arcu ac magna. Suspendisse nec auctor velit. Suspendisse nec auctor velit. Suspendisse nec auctor velit.
          </Text>
          <Followers />
          <Button label={'See repositores'} onPress={onRepositoriesButtonPress} customColor={colors.secondary} />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default Profile;
