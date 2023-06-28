import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface UserCardProps {
  data: UserData;
  onSelect: (user: UserData) => void;
}

const UserCard = ({ data, onSelect }: UserCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.75} style={styles.container} onPress={() => onSelect(data)}>
      <Image style={styles.image} source={{ uri: data.avatar_url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{data.name ?? data.login}</Text>
        {data.bio ? (
          <Text style={styles.biography} numberOfLines={2}>
            {data.bio}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
