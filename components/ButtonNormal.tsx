import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ButtonNormal = ({
  title,
  onPress,
  style,
  active,
}: {
  title: string;
  onPress: () => void;
  style?: object;
  active: boolean;
}) => {
  const buttonStyle = StyleSheet.create({
    button: {
      backgroundColor: active ? "#E0E0FF" : "#fff",

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 1,
      elevation: 1,

      padding: 10,
      borderRadius: 30,

      borderColor: "#5C5D72",
      borderWidth: active ? 0 : 1,

      display: "flex",
      width: 120,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[style, buttonStyle.button]}>
        <Text
          style={{
            color: "#5C5D72",
            fontFamily: "Rubik_500Medium",
            fontSize: 16,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonNormal;
