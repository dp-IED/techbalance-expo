import { Stack, Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Sign Up",
          headerShown: false,
          tabBarLabelPosition: "beside-icon",
          // hide the icon for the tab
          tabBarIconStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="second"
        options={{
          tabBarLabel: "Second",
          headerShown: false,
          tabBarLabelPosition: "beside-icon",
          // hide the icon for the tab
          tabBarIconStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="third"
        options={{
          tabBarLabel: "Third",
          headerShown: false,
          tabBarLabelPosition: "beside-icon",
          // hide the icon for the tab
          tabBarIconStyle: {
            display: "none",
          },
        }}
      />
    </Tabs>
  );
}

{
  /* <Stack>
  <Stack.Screen
    name="index"
    options={{
      headerShown: false,
    }}
  />
</Stack>; */
}
