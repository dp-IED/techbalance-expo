import { Image } from "expo-image";
import { ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import { GoalType } from "@/types/GoalType";

const TabButton = (props: {
  icon: ImageSourcePropType;
  selected: boolean;
  label: GoalType;
  onPress: () => void;
}) => {
  const { icon, selected, label, onPress } = props;
  return (
    <TouchableOpacity
      style={{
        height: 40,
        borderRadius: 16,
        backgroundColor: selected ? "#F4F3F8" : "#DFDAEC",
        padding: 0,
        paddingLeft: 22,
        paddingRight: 30,
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
      onPress={() => onPress()}
    >
      <Image
        source={icon}
        style={{
          width: 16,
          height: 16,
        }}
      />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabButton;
