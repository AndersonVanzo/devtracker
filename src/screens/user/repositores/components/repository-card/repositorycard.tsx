import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { getLanguageColor } from '../../../../../utils/getLanguageColor';

interface RepositoryCardProps {
  data: UserRepositoryList[number];
  onSelect: (repository: UserRepositoryList[number]) => void;
}

const RepositoryCard = ({ data, onSelect }: RepositoryCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.75} style={styles.container} onPress={() => onSelect(data)}>
      <View style={[styles.icon, { backgroundColor: getLanguageColor(data.language) }]} />
      <View style={styles.content}>
        <Text style={styles.title}>{data.name}</Text>
        {data.description ? (
          <Text style={styles.description} numberOfLines={1}>
            {data.description}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default RepositoryCard;
