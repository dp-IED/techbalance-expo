import { Text, TouchableOpacity } from "react-native";

const FilterButton = (props: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) => {
  const { label, selected, onPress } = props;
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        height: 32,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: selected ? "#9F92C7" : "#DFDAEC",
        borderRadius: 24,
      }}
      onPress={() => onPress()}
    >
      <Text
        style={{
          color: selected ? "#FFF" : "#49454F",
          fontFamily: "Rubik",
          fontSize: 14,
          fontWeight: "700",
          lineHeight: 18,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
