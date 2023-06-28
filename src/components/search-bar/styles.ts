import { StyleSheet } from 'react-native';
import { colors } from '../../common/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    backgroundColor: colors.input_background,
    borderRadius: 8,
    color: colors.input_text,
    height: 48,
    paddingLeft: 16,
    paddingRight: 56,
    width: '100%',
  },
  icon: {
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
  },
});
