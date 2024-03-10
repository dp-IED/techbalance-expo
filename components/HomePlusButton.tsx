import { TouchableOpacity } from "react-native";
import { View, Text } from "./Themed";
import { router } from "expo-router";

const HomePlusButton = (props: { widht: number; height: number }) => {
  return (
    <TouchableOpacity
    onPress={() => {
      router.push("/(notification)"); // change path to mood check-in
    }}
    >
    <View
      style={{
        height: props.height,
        width: props.widht,
        backgroundColor: "#DFDAEC",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          fontFamily: "Rubik_400Regular",
        }}
      >
        +
      </Text>
    </View>
    </TouchableOpacity>
  );
};

export default HomePlusButton;
