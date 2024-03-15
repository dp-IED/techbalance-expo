import { Stack, router } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="feeling_picker"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="uplift_events_picker"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
