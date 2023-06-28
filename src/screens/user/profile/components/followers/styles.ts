import { StyleSheet } from 'react-native';
import { colors } from '../../../../../common/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  section: {
    alignItems: 'center',
    flex: 1,
    gap: 8,
    justifyContent: 'center',
  },
  title: {
    color: colors.title,
    fontSize: 16,
  },
  info: {
    color: colors.primary,
    fontSize: 24,
  },
  divider: {
    backgroundColor: colors.text,
    height: '100%',
    width: 1,
  },
});
