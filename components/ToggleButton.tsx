import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface MoodToggleButtonProps {
  title: string;
  paddingVertical: number;
  paddingHorizontal: number;
  borderRadius: number;
  height: number;
  notPressedBackgroundColor: string;
  pressedBackgroundColor: string;
  fontSize: number;
  fontFamily: string;
  notPressedTextColor: string;
  pressedTextColor: string;
}

const ToggleButton = ({
  title,
  paddingVertical,
  paddingHorizontal,
  borderRadius,
  height,
  notPressedBackgroundColor,
  pressedBackgroundColor,
  fontSize,
  fontFamily,
  notPressedTextColor,
  pressedTextColor,
}: MoodToggleButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.button,
        {
          paddingVertical,
          paddingHorizontal,
          borderRadius,
          height,
          backgroundColor: isPressed
            ? pressedBackgroundColor
            : notPressedBackgroundColor,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            fontSize,
            fontFamily,
            color: isPressed ? pressedTextColor : notPressedTextColor,
          },
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
  },
  text: {
    textAlign: "center",
  },
});

export default ToggleButton;
