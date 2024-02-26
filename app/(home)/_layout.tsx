import { Stack, router } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
        initialParams={{
          goals: [
            {
              id: "1",
              icon: "🚿",
              title: "Take a shower",
              description: "This is a test goal",
              type: "Body",
              completed: false,
            },
            {
              id: "2",
              icon: "❤️",
              title: "Put 5 items on vision board",
              description: "This is a test goal 2",
              type: "Mind",
              completed: false,
            },
            {
              id: "3",
              icon: "❤️",
              title: "Put 5 items on vision board",
              description: "This is a test goal 2",
              type: "People",
              completed: false,
            },
          ],
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
