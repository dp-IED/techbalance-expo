import { router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const HomeFireButton = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          router.push("/(notification)");
        }}
      >
        <Image
          source={require("../assets/images/fire_btn.png")}
          style={{
            height: 30,
            width: 30,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          top: 4,
          right: -2,
          backgroundColor: "#DAD7E2",
          borderRadius: 10,
          width: 14,
          height: 14,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Rubik_400Regular",
            textAlign: "center",
            padding: 2,
          }}
        >
          5
        </Text>
      </View>
    </View>
  );
};

export default HomeFireButton;
