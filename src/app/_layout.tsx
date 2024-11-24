// src/_layout.tsx
import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PostFormProvider, usePostForm } from '@/src/context/PostContext';
import { Button } from 'react-native';

function HeaderRight() {
  const { handleSubmit } = usePostForm();
  return <Button onPress={handleSubmit} title="Done" />;
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
        <PostFormProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, title: 'Home' }} />
          <Stack.Screen
            name="create/competition"
            options={{
              title: "Competition",
              headerRight: HeaderRight
            }}
          />
          <Stack.Screen
            name="create/post"
            options={{
              title: "Post",
              headerRight: HeaderRight
            }}
          />
          <Stack.Screen
            name="create/training"
            options={{
              title: "Training",
              headerRight: HeaderRight
            }}
          />
        <Stack.Screen name="+not-found" />
      </Stack>
        </PostFormProvider>
    </SafeAreaProvider>
  );
}