import React from "react";
import { Dimensions, StatusBar, StyleSheet, View } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Circle } from "react-native-svg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ShadowScreenGradient = (props: {color: string, size: number, opacity: number, left: number, top: number}) => {
  return (
    <View style={{ position: "absolute", left: props.left, top: props.top }}>
      <Svg
        height={props.size}
        width={props.size}
        viewBox="0 0 240 240"
        style={{ position: "absolute" }}
      >
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="50%"
            rx="50%"
            ry="50%"
            fx="50%"
            fy="50%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0%" stopColor={props.color} stopOpacity={props.opacity} />
            <Stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Circle cx="120" cy="120" r="120" fill="url(#grad)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: -100,
    bottom: 0,
    height: windowHeight + 100,
  },
});

export default ShadowScreenGradient;
