import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

interface PageTitleProps {
  title: string;
  effectTitle?: string;
}

const PageTitle = ({ title, effectTitle }: PageTitleProps) => {
  return (
    <Text style={styles.title}>
      {title}
      {effectTitle ? <Text style={styles.effect}> {effectTitle}</Text> : null}
    </Text>
  );
};

export default PageTitle;
