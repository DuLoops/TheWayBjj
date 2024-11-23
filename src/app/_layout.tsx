import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import '../styles/global.css';

export default function RootLayout() {
  return(
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)"  options={{ headerShown: false, title: 'Home' }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </SafeAreaProvider>
  )
    ;
}
