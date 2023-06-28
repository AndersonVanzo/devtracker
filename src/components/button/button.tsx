import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  label: string;
  onPress: () => void;
  customColor?: string;
}

const Button = ({ label, onPress, customColor }: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.75} style={[styles.button, customColor ? { backgroundColor: customColor } : {}]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
export default Button;
