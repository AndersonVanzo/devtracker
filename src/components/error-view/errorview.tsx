import { Text, View } from 'react-native';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import React from 'react';

const ErrorView = () => {
  const animation = require('../../animations/error.json');

  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieView source={animation} autoPlay={true} loop={true} />
      </View>
      <Text style={styles.text}>An error occurred</Text>
    </View>
  );
};

export default ErrorView;
