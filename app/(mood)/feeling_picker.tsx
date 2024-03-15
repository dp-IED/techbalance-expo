import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from "react-native";
import SafeViewAndroid from "@/components/SafeViewAndroid";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import ShadowScreenGradient from "@/components/ShadowScreenGradient";
import ButtonNormal from "@/components/ButtonNormal";
import MoodFeelingPicker from "@/components/MoodFeelingPicker";

export default function FeelingPicker() {
  const router = useRouter();
  const windowWidth = Dimensions.get("window").width;

  // useEffect(() => {
  //   console.log({ windowWidth });
  // }, []);

  return (
    <View style={styles.viewContainer}>
      <ShadowScreenGradient
        color={"#B3ADCD"}
        size={windowWidth + 500}
        opacity={1}
        left={-windowWidth / 1.5}
        top={-180}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.pressable}
            onPress={() => router.replace("/(home)")}
          >
            <View style={styles.closeContainer}>
              <AntDesign name="close" size={25} color="black" />
            </View>
          </TouchableOpacity>
          <View style={styles.centeredView}>
            <Text style={styles.headerTextStyle}>
              Can you describe how you're feeling?
            </Text>
          </View>

          <MoodFeelingPicker />
          <View style={styles.navButtonsContainer}>
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.backTextStyle}>Back</Text>
            </TouchableOpacity>

            <ButtonNormal
              title="Continue"
              onPress={() => {}}
              active={true}
              color={"#9F92C7"}
              height={50}
              width={300}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "white",
    height: "100%",
  },
  safeArea: {
    ...SafeViewAndroid.AndroidSafeArea,
  },
  container: {
    paddingHorizontal: 15,
    gap: 40,
  },
  pressable: {},
  centeredView: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingRight: 60,
  },
  headerTextStyle: {
    fontSize: 28,
    fontFamily: "Rubik_500Medium",
    color: "#4F455C",
  },
  closeContainer: {
    paddingVertical: 10,
    // marginBottom: 40,
  },
  backTextStyle: {
    fontSize: 16,
    paddingRight: 15,
  },
  navButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "green",
    justifyContent: "space-between",
  },
  continueTextStyle: {},
  transitionButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 40,
    height: 50,
  },
});
