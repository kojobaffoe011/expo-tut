import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return <Stack >
    <Stack.Screen  name="(tabs)" options={{
     headerShown: false,
      headerLeft: () => <></>,
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
    }}/>
    <Stack.Screen  name="+not-found" options={{
      headerShown: false
    }}/>
  <StatusBar style="light" />

  </Stack>;
}
