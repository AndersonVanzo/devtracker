import { colors } from '../common/colors';

export const getLanguageColor = (language: string | null | undefined) => {
  const jsonColors = require('../common/language_color.json');
  return jsonColors[language ?? ''] ?? colors.text_light;
};
