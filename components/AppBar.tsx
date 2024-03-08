import { supabase } from "@/scripts/initSupabase";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";

const AppBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 30,
        paddingRight: 44,
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
          gap: 5,
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={async () => {
            const user = await supabase.auth.getUser();
            const token = await supabase
              .from("Users")
              .select("expo_push_token")
              .eq("id", user.data.user?.id);

            if (token.data == null) {
              alert("No push token found");
              return;
            }

            const res = await fetch("https://exp.host/--/api/v2/push/send", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.EXPO_PUBLIC_ACCESS_TOKEN}`,
              },
              body: JSON.stringify({
                to: token.data[0].expo_push_token,
                sound: "default",
                body: "Test notification",
              }),
            }).then((res) => res);
          }}
        />
        <Image
          source={require("../assets/images/fire_icon.png")}
          style={{
            height: 30,
            width: 30,
          }}
        />
      </View>
    </View>
  );
};

export default AppBar;
