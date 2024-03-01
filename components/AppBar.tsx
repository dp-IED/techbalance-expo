import React from "react";
import { View, Text, Image } from "react-native";

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
