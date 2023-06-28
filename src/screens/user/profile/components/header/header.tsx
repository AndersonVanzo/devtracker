import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../../../common/colors';

interface HeaderProps {
  onBackButtonPress: () => void;
}

const Header = ({ onBackButtonPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.75} style={styles.button} onPress={onBackButtonPress}>
        <Icon name={'keyboard-arrow-left'} color={colors.title} size={36} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
