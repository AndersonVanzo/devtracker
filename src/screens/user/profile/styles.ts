import { StyleSheet } from 'react-native';
import { colors } from '../../../common/colors';

export const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    objectFit: 'cover',
    width: '100%',
  },
  content: {
    flex: 1,
    gap: 16,
    padding: 24,
  },
  username: {
    color: colors.title,
    fontSize: 24,
    fontWeight: '700',
  },
  email: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '400',
  },
  biography: {
    color: colors.text_light,
    fontSize: 16,
    fontWeight: '400',
  },
});
