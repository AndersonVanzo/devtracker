import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../../../../common/colors';
import { styles } from './styles';

interface LanguageColorProps {
  language: string;
}

const jsonColors = require('./language_color.json');

const LanguageColor = ({ language }: LanguageColorProps) => {
  const color = jsonColors[language] ?? colors.title_light;

  return <View style={[styles.circle, { backgroundColor: color }]} />;
};

export default LanguageColor;
