import { supabase } from "@/scripts/initSupabase";
import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import HomeFireButton from "./HomeFireButton";
import HomeNotificatinButton from "./HomeNotificationButton";

const AppBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Rubik_400Regular",
          textAlign: "center",
        }}
      >
        Good Morning, Emma
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 15,
          alignItems: "center",
        }}
      >
        <HomeFireButton />
        <HomeNotificatinButton />
      </View>
    </View>
  );
};

export default AppBar;
