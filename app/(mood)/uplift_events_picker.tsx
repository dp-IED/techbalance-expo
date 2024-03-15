import { StyleSheet, SafeAreaView, Pressable, Text, View } from "react-native";
import SafeViewAndroid from "@/components/SafeViewAndroid";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function EventsPicker() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable style={styles.pressable} onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
      <View style={styles.centeredView}>
        <Text style={styles.headerTextStyle}>
          What makes you feel great?
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    ...SafeViewAndroid.AndroidSafeArea,
  },
  pressable: {},
  centeredView: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingRight: 60,
    paddingHorizontal: 15,
  },
  headerTextStyle: {
    fontSize: 25,
    fontFamily: "Rubik_500Medium",
    color: "#4F455C",
  },
});
