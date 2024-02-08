import { Stack, router } from "expo-router";
import { Button } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
        initialParams={{
          initialRouter: true,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          headerRight: () => (
            <Button title="Done" onPress={() => router.back()} />
          ),
        }}
      />
    </Stack>
  );
}
