import { StyleSheet } from 'react-native';
import { colors } from '../../../../common/colors';

export const styles = StyleSheet.create({
  content: {
    gap: 24,
    padding: 24,
  },
  title: {
    color: colors.title,
    fontSize: 24,
    fontWeight: '700',
  },
  description: {
    color: colors.text,
    fontSize: 16,
  },
  infosContainer: {
    flexDirection: 'row',
  },
  infoWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  infoTitle: {
    color: colors.title,
    fontSize: 16,
    fontWeight: '600',
  },
  languageColorWrapper: {
    alignItems: 'center',
    height: 24,
    justifyContent: 'center',
    width: 24,
  },
  languageColor: {
    borderRadius: 7,
    height: 14,
    width: 14,
  },
});
