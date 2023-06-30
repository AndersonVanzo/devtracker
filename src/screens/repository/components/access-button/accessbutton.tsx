import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Button from '../../../../components/button/button';
import { colors } from '../../../../common/colors';

interface AccessButtonProps {
  onPress: () => void;
}

const AccessButton = ({ onPress }: AccessButtonProps) => {
  return (
    <View style={styles.container}>
      <Button label={'See on GitHub'} onPress={onPress} customColor={colors.secondary} />
    </View>
  );
};

export default AccessButton;
