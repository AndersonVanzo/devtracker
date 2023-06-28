import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import LottieView from 'lottie-react-native';

const NotFound = () => {
  const animation = require('../../../../../animations/notfound.json');

  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieView source={animation} autoPlay={true} loop={true} />
      </View>
      <Text style={styles.text}>Dev not found</Text>
    </View>
  );
};

export default NotFound;
