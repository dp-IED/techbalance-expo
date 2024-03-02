import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface ToastProps {
  main: string;
  secondary?: string;
  icon?: string;
  position?: "top" | "bottom";
}

const Toast: React.FC<ToastProps> = ({
  main,
  secondary,
  icon,
  position = "bottom",
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(dismissToast, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const dismissToast = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <View
      style={{
        position: "absolute",
        [position]: 0,
        backgroundColor: "#777",
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 8,
        }}
      >
        {icon && <Text>{icon}</Text>}
        <Text style={{ marginLeft: 8, color: "white" }}>{main}</Text>
        {secondary && <Text style={{ marginLeft: 8 }}>{secondary}</Text>}
        <TouchableOpacity onPress={dismissToast}>
          <Text style={{ color: "blue" }}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Toast;
