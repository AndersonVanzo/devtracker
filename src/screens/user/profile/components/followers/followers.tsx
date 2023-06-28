import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Followers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Following</Text>
        <Text style={styles.info}>123</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.title}>Followers</Text>
        <Text style={styles.info}>123</Text>
      </View>
    </View>
  );
};

export default Followers;
