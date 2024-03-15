import { View, StyleSheet, ScrollView } from "react-native";
import MoodToggleButton from "./MoodToggleButton";

interface MoodToggleButtonProps {
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

interface MoodFeelingPickerProps {
  style?: object;
  numRows: number;
  buttonProps: MoodToggleButtonProps;
}

const MoodFeelingPicker = ({ style, numRows, buttonProps }: MoodFeelingPickerProps) => {
  const data = [
    { id: 1, text: "Brave" },
    { id: 2, text: "Confident" },
    { id: 3, text: "Creative" },
    { id: 4, text: "Excited" },
    { id: 5, text: "Free" },
    { id: 6, text: "Happy" },
    { id: 7, text: "Loved" },
    { id: 8, text: "Proud" },
    { id: 9, text: "Respected" },
    // { id: 10, text: "+ Other" },
    // { id: 11, text: "Strong" },
    // { id: 12, text: "Thankful" },
    // { id: 13, text: "Valued" },
    // { id: 14, text: "Worthy" },
    // { id: 15, text: "Adventurous" },
    // { id: 16, text: "Amazed" },
    // { id: 17, text: "Eager" },
    // { id: 18, text: "Energetic" },
    // { id: 19, text: "Joyful" },
    // { id: 20, text: "Lively" },
    // { id: 21, text: "Optimistic" },
    // { id: 22, text: "Playful" },
    // { id: 23, text: "Relaxed" },
  ];

  return (
    <ScrollView horizontal={true} style={style}>
      <View style={{ flexDirection: "column" }}>
        {Array.from({ length: numRows }, (_, i) => i).map((remainder) => (
          <View style={{ flexDirection: "row" }} key={remainder}>
            {data
              .filter((item) => item.id % numRows === remainder)
              .map((item) => (
                <View style={styles.buttonContainer} key={item.id}>
                  <MoodToggleButton
                    title={item.text}
                    {...buttonProps}
                  />
                </View>
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
});

export default MoodFeelingPicker;