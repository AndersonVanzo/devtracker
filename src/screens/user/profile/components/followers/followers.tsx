import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { useAppSelector } from '../../../../../redux/hooks';
import { getSelectedUser } from '../../../../../redux/features/users/usersSlice';

const Followers = () => {
  const userData = useAppSelector(getSelectedUser);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Following</Text>
        <Text style={styles.info}>{userData?.following}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.title}>Followers</Text>
        <Text style={styles.info}>{userData?.followers}</Text>
      </View>
    </View>
  );
};

export default Followers;
