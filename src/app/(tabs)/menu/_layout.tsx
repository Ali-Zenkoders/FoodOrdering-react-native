import { Stack } from "expo-router";

export default function MenuStack() {
  // to group more than one routes in folder
  return (
    <Stack>
      {/* this is one way to change header title and other configuration */}
      <Stack.Screen name="index" options={{ title: "Menu" }} />
    </Stack>
  );
}
