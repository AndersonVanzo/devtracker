import React, { JSX } from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';

interface ScreenContainerProps {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode | Array<React.ReactNode>;
}

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenContainer;
