import { StyleSheet } from 'react-native';
import { colors } from '../../../common/colors';

export const styles = StyleSheet.create({
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 24,
  },
  sortText: {
    color: colors.text,
  },
  sortType: {
    color: colors.primary,
  },
  listContent: {
    gap: 12,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  listSeparator: {
    height: 12,
  },
});
