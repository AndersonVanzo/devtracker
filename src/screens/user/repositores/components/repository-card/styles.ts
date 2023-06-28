import { StyleSheet } from 'react-native';
import { colors } from '../../../../../common/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    minHeight: 80,
    width: '100%',
  },
  title: {
    color: colors.title,
    fontSize: 22,
    fontWeight: '600',
  },
  description: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
  },
  infoCell: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  infoText: {
    color: colors.title,
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.secondary_light,
    borderRadius: 4,
    height: 24,
    justifyContent: 'center',
    width: 56,
  },
  buttonText: {
    color: colors.secondary,
  },
});
