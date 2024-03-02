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
        name="modal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          headerShown: false,
          contentStyle: { backgroundColor: "transparent", opacity: 0.99 },
        }}
      />
    </Stack>
  );
}
