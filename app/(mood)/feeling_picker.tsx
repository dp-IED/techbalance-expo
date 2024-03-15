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
import ModalTester from "@/components/BottomModalText";
import { useEffect, useState } from "react";

export default function FeelingPicker() {
  const [feelingTextData, changeData] = useState<
    { id: number; text: string }[]
  >([]);

  useEffect(() => {
    changeData([
      { id: 1, text: "Brave" },
      { id: 2, text: "Confident" },
      { id: 3, text: "Creative" },
      { id: 4, text: "Excited" },
      { id: 5, text: "Free" },
      { id: 6, text: "Happy" },
      { id: 7, text: "Loved" },
      { id: 8, text: "Proud" },
      { id: 9, text: "Respected" },
      { id: 10, text: "+ Other" },
    ]);
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const router = useRouter();
  const windowWidth = Dimensions.get("window").width;

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

          <MoodFeelingPicker
            numRows={5}
            buttonProps={{
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 30,
              height: 50,
              notPressedBackgroundColor: "white",
              pressedBackgroundColor: "#9D95BC",
              fontSize: 18,
              fontFamily: "Rubik_500Medium",
              notPressedTextColor: "black",
              pressedTextColor: "white",
              toggleFunction: toggleModal,
            }}
            data={feelingTextData}
          />
          <View style={styles.navButtonsContainer}>
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.backTextStyle}>Back</Text>
            </TouchableOpacity>

            <ButtonNormal
              title="Continue"
              onPress={() => {
                router.push("/(mood)/uplift_events_picker");
              }}
              active={true}
              color={"#9F92C7"}
              height={50}
              width={310}
            />
          </View>
          <ModalTester
            toggleModal={toggleModal}
            isModalVisible={isModalVisible}
            data={feelingTextData}
            changeData={changeData}
          />
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
    gap: 60,
  },
  pressable: {},
  centeredView: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerTextStyle: {
    fontSize: 28,
    fontFamily: "Rubik_500Medium",
    color: "#4F455C",
  },
  closeContainer: {
    paddingVertical: 10,
  },
  backTextStyle: {
    fontSize: 16,
  },
  navButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  continueTextStyle: {},
  transitionButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
});
