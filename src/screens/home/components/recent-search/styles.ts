import { StyleSheet } from 'react-native';
import { colors } from '../../../../common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    paddingBottom: 12,
  },
  title: {
    color: colors.text,
    fontSize: 14,
  },
  content: {
    gap: 12,
    paddingBottom: 24,
  },
});
