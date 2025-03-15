import { useThemeConfig } from '@/global/hooks/useThemeConfig.global';
import { Stack } from 'expo-router';

export default function Layout() {
  const theme = useThemeConfig();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.header,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="profile" />
    </Stack>
  );
}
