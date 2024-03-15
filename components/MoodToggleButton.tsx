import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MoodToggleButton = ({ title }: { title: string }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, isPressed ? styles.pressed : styles.notPressed]}
    >
      <Text
        style={[
          styles.text,
          isPressed ? styles.pressedText : styles.notPressedText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    height: 50,
  },
  notPressed: {
    backgroundColor: "white",
  },
  pressed: {
    backgroundColor: "#9D95BC",
  },
  text: {
    fontSize: 18,
    fontFamily: "Rubik_500Medium",
  },
  notPressedText: {
    color: "black",
  },
  pressedText: {
    color: "white",
  },
});

export default MoodToggleButton;
