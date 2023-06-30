import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../../common/colors';
import { getLanguageColor } from '../../../../utils/getLanguageColor';

interface ContentProps {
  data: UserRepository;
}

const Content = ({ data }: ContentProps) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{data.name}</Text>
      {data.description ? <Text style={styles.description}>{data.description}</Text> : null}
      <View style={styles.infosContainer}>
        {data.language ? (
          <View style={styles.infoWrapper}>
            <View style={styles.languageColorWrapper}>
              <View style={[styles.languageColor, { backgroundColor: getLanguageColor(data.language) }]} />
            </View>
            <Text style={styles.infoTitle}>{data.language}</Text>
          </View>
        ) : null}
        <View style={styles.infoWrapper}>
          <Icon name={'star-outline'} size={24} color={colors.title} />
          <Text style={styles.infoTitle}>{data.stargazers_count}</Text>
        </View>
      </View>
    </View>
  );
};

export default Content;
