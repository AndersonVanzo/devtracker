import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PageTitle from '../../../../../components/page-title/pagetitle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../../../common/colors';
import { styles } from './styles';

interface HeaderProps {
  onBackButtonPress: () => void;
}

const Header = ({ onBackButtonPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.75} onPress={onBackButtonPress} style={styles.button}>
        <Icon name={'keyboard-arrow-left'} size={36} color={colors.title} />
      </TouchableOpacity>
      <PageTitle title={'Repositories'} />
    </View>
  );
};

export default Header;
