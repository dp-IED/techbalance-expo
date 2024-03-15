import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ToggleButtonProps {
  title: {
    text: string;
    emoji: string;
  };
  paddingVertical: number;
  paddingHorizontal?: number;
  borderRadius: number;
  height: number;
  notPressedBackgroundColor: string;
  pressedBackgroundColor: string;
  fontSize: number;
  fontFamily: string;
  notPressedTextColor: string;
  pressedTextColor: string;
  width?: number;
  toggleFunction: () => void;
}

const ToggleButton = ({
  title,
  paddingVertical,
  paddingHorizontal = 0,
  borderRadius,
  height,
  notPressedBackgroundColor,
  pressedBackgroundColor,
  fontSize,
  fontFamily,
  notPressedTextColor,
  pressedTextColor,
  width,
  toggleFunction,
}: ToggleButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    if (title.text === "+ Other" || title.text === "Edit/New") {
      toggleFunction();
    } else {
      setIsPressed(!isPressed);
    }
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
          width,
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
        {title.emoji && `${title.emoji}\n`}
        {title.text}
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
