import { StyleSheet } from 'react-native';
import { colors } from '../../../../common/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    height: 80,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 40,
    height: 80,
    width: 80,
  },
  infoContainer: {
    justifyContent: 'center',
    flex: 1,
    gap: 8,
    paddingVertical: 4,
  },
  username: {
    color: colors.title,
    fontSize: 18,
  },
  biography: {
    fontSize: 12,
    color: colors.text,
  },
});
