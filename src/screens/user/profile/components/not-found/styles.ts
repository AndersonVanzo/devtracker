import { StyleSheet } from 'react-native';
import { colors } from '../../../../../common/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  animation: {
    aspectRatio: 1,
    width: '80%',
  },
  text: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '300',
  },
});
