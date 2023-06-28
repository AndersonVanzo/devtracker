import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './styles';

const Loader = () => {
  const animation = require('../../../../../animations/searching.json');

  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieView source={animation} autoPlay={true} loop={true} />
      </View>
      <Text style={styles.text}>Searching dev...</Text>
    </View>
  );
};

export default Loader;
