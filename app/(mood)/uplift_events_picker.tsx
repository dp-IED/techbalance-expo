import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import SafeViewAndroid from "@/components/SafeViewAndroid";
import { useRouter } from "expo-router";
import { AntDesign, Entypo } from "@expo/vector-icons";
import ShadowScreenGradient from "@/components/ShadowScreenGradient";
import MoodFeelingPicker from "@/components/MoodFeelingPicker";
import ButtonNormal from "@/components/ButtonNormal";
import MoodModal from "@/components/BottomModalEmoji";
import { useState, useEffect } from "react";

export default function EventsPicker() {
  const [feelingEmojiData, changeData] = useState<
    { id: number; text: string; emoji: string }[]
  >([]);

  useEffect(() => {
    changeData([
      { id: 1, text: "Study", emoji: "📚" },
      { id: 2, text: "Family", emoji: "🏠" },
      { id: 3, text: "TV", emoji: "📺" },
      { id: 4, text: "Shopping", emoji: "🛍" },
      { id: 5, text: "Sleep", emoji: "💤" },
      { id: 6, text: "Friends", emoji: "💙" },
      { id: 7, text: "Money", emoji: "💷" },
      { id: 8, text: "Gaming", emoji: "🎮" },
      { id: 9, text: "Exercise", emoji: "🏃" },
      { id: 10, text: "Partner", emoji: "💓" },
      { id: 11, text: "Weather", emoji: "☔️" },
      { id: 12, text: "Future plans", emoji: "🎯" },
      { id: 13, text: "Nutrition", emoji: "🍔" },
      { id: 14, text: "Life events", emoji: "😰" },
      { id: 15, text: "Work", emoji: "💼" },
      { id: 16, text: "Reading", emoji: "📖" },
      { id: 17, text: "Mental health", emoji: "🧠" },
      { id: 18, text: "Chores", emoji: "🧽" },
      { id: 19, text: "Relax", emoji: "🕯" },
      { id: 20, text: "Unsure", emoji: "🤔" },
      { id: 21, text: "Social media", emoji: "📱" },
      { id: 22, text: "Hobby", emoji: "🎲" },
      { id: 23, text: "Nightlife", emoji: "💃" },
      { id: 24, text: "Edit/New", emoji: "+" },
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
              What makes you feel great?
            </Text>
          </View>

          <MoodFeelingPicker
            numRows={4}
            buttonProps={{
              paddingVertical: 12,
              width: 100,
              borderRadius: 16,
              height: 90,
              notPressedBackgroundColor: "white",
              pressedBackgroundColor: "#9D95BC",
              fontSize: 14,
              fontFamily: "Rubik_500Medium",
              notPressedTextColor: "black",
              pressedTextColor: "white",
              toggleFunction: toggleModal,
            }}
            data={feelingEmojiData}
            style={{}}
          />
          <View style={styles.navButtonsContainer}>
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.backTextStyle}>Back</Text>
            </TouchableOpacity>

            <ButtonNormal
              title="Complete 🎉"
              onPress={() => {}}
              active={true}
              color={"#9F92C7"}
              height={50}
              width={310}
            />
          </View>
          <MoodModal
            toggleModal={toggleModal}
            isModalVisible={isModalVisible}
            data={feelingEmojiData}
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
    gap: 40,
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
