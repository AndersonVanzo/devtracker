import { Text, View } from 'react-native';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import React from 'react';

const EmptyView = () => {
  const animation = require('../../../../../animations/empty.json');

  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieView source={animation} autoPlay={true} loop={true} />
      </View>
      <Text style={styles.text}>Nothing to see here</Text>
    </View>
  );
};

export default EmptyView;
