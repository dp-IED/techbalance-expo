import { View, StyleSheet, ScrollView } from "react-native";
import ToggleButton from "./ToggleButton";

interface DataItem {
  id: number;
  text: string;
}
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
  data: DataItem[];
}

const MoodFeelingPicker = ({
  style,
  numRows,
  buttonProps,
  data,
}: MoodFeelingPickerProps) => {
  return (
    <ScrollView horizontal={true} style={style}>
      <View style={{ flexDirection: "column" }}>
        {Array.from({ length: numRows }, (_, i) => i).map((remainder) => (
          <View style={{ flexDirection: "row" }} key={remainder}>
            {data
              .filter((item) => item.id % numRows === remainder)
              .map((item) => (
                <View style={styles.buttonContainer} key={item.id}>
                  <ToggleButton title={item.text} {...buttonProps} />
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
