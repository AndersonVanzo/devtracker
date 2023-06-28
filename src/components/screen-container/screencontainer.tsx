import React, { JSX } from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';

interface ScreenContainerProps {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode | Array<React.ReactNode>;
  padding?: boolean;
}

const ScreenContainer = ({ children, padding = true }: ScreenContainerProps) => {
  return (
    <SafeAreaView>
      <View style={[styles.container, !padding && styles.noPadding]}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenContainer;
