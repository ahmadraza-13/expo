import { Stack } from "expo-router";
// Import your global CSS file
import "../global.css";
export default function RootLayout() {
  return (
  <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name="login" />
    <Stack.Screen name="signup" />
    <Stack.Screen name="welcomescreen" />
    <Stack.Screen name="index" />
    <Stack.Screen name="(tabs)" />
  </Stack>
  );
}
