import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    gap: 23,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
