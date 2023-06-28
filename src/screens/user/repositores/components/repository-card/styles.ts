import { StyleSheet } from 'react-native';
import { colors } from '../../../../../common/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
  },
  icon: {
    borderRadius: 8,
    height: 64,
    width: 64,
  },
  content: {
    justifyContent: 'center',
    flex: 1,
    overflow: 'hidden',
  },
  title: {
    color: colors.title,
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '500',
  },
});
