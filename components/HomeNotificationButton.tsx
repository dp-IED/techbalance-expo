import { router } from "expo-router";
import React from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";

const HomeNotificatinButton = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          router.push("/(mood)");
        }}
      >
        <Image
          source={require("../assets/images/bell_btn.png")}
          style={{
            height: 30,
            width: 30,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          top: 3,
          right: 4,
          backgroundColor: "#E85656",
          borderRadius: 10,
          width: 8,
          height: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    </View>
  );
};

export default HomeNotificatinButton;
