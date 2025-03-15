import { useColorScheme } from 'react-native';
import { colors } from '../themes/colors/colors.themes.global';

export function useThemeConfig() {
  const colorScheme = useColorScheme();

  if (colorScheme === 'dark') {
    return colors.dark;
  }
  return colors.light;
}
