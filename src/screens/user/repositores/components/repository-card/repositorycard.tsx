import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { getLanguageColor } from '../../../../../utils/getLanguageColor';

interface RepositoryCardProps {
  data: UserRepository;
}

const RepositoryCard = ({ data }: RepositoryCardProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, { backgroundColor: getLanguageColor(data.language) }]} />
      <View style={styles.content}>
        <Text style={styles.title}>{data.name}</Text>
        {data.description ? (
          <Text style={styles.description} numberOfLines={1}>
            {data.description}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default RepositoryCard;
