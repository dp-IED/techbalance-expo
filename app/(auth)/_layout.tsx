import { Redirect, Slot, Tabs } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "@/ctx/AuthProvider";

export default function Layout() {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Redirect href="/(home)" />;
  }

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
        name="login"
        options={{
          tabBarLabel: "Log-in",
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
