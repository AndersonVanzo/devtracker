import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../../../common/colors';
import LanguageColor from './language-color/languagecolor';

const RepositoryCard = () => {
  const onOpenButtonPress = () => {
    console.log();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>devtracker</Text>
      <Text style={styles.description}>description</Text>
      <View style={styles.footer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoCell}>
            <LanguageColor language={'TypeScript'} />
            <Text style={styles.infoText}>TypeScript</Text>
          </View>
          <View style={styles.infoCell}>
            <Icon name={'star-outline'} size={16} color={colors.title} />
            <Text style={styles.infoText}>123</Text>
          </View>
          <View style={styles.infoCell}>
            <View />
            <Text style={styles.infoText}>0</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.75} style={styles.button} hitSlop={{ top: 24 }} onPress={onOpenButtonPress}>
          <Text style={styles.buttonText}>Open</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RepositoryCard;
