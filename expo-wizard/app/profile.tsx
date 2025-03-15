import { useThemeConfig } from '@/global/hooks/useThemeConfig.global';
import { Text, View } from 'react-native';

export default function Profile() {
  const theme = useThemeConfig();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.background,
      }}
    >
      <Text style={{ color: theme.text }}>Welcome to profile</Text>
    </View>
  );
}
