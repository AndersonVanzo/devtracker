import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import ScreenContainer from '../../../components/screen-container/screencontainer';
import { styles } from './styles';
import Header from './components/header/header';
import Followers from './components/followers/followers';
import Button from '../../../components/button/button';
import { colors } from '../../../common/colors';

const Profile = () => {
  return (
    <ScreenContainer padding={false}>
      <Header onBackButtonPress={() => console.log()} />
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
          <Button label={'See repositores'} onPress={() => console.log()} customColor={colors.secondary} />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default Profile;
