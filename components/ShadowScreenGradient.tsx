import React from "react";
import { Dimensions, StatusBar, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ShadowScreenGradient = (props: any) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient from left to right
        start={{ x: 0, y: 0.1 }}
        end={{ x: 1, y: 0.4 }}
        colors={["rgba(165,154,200,0.4)", "transparent", "transparent"]}
        style={styles.background}
      />
      <LinearGradient
        // Background Linear Gradient from top to bottom
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0.9 }}
        colors={["rgba(165,154,200,0.4)", "transparent", "transparent"]}
        style={styles.background}
      />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
