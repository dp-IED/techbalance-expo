import { Stack, Tabs } from "expo-router";
import { View, Image } from "react-native";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../assets/images/globe_nav_icon.png")}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="second"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../assets/images/statistics_nav_icon.png")}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="third"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../assets/images/profile_nav_icon.png")}
              />
            );
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
