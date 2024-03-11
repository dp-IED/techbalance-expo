import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Image, Platform } from "react-native";

const SelectNativeBase = () => {
  const [selected, setSelected] = useState("today");
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { label: "Yesterday", value: "yesterday" },
    { label: "Today", value: "today" },
    { label: "Tomorrow", value: "tomorrow" },
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const Icon = () => {
    return (
      <View
        style={{
          transform: [{ translateY: 5 }],
        }}
      >
        <Image
          source={
            isOpen
              ? require("../assets/images/home_up_arrow.png")
              : require("../assets/images/home_down_arrow.png")
          }
          style={{ width: 10, height: 5 }}
        />
      </View>
    );
  };

  return (
    <RNPickerSelect
      onValueChange={(value) => setSelected(value)}
      items={data}
      value={selected}
      placeholder={{}}
      onOpen={toggleOpen}
      onClose={toggleOpen}
      Icon={Platform.OS === "ios" ? Icon : undefined}
      style={{
        inputIOS: {
          borderColor: "transparent",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: 20,
          fontFamily: "Rubik_500Medium",
        },
        inputAndroid: {
          width: 155,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Rubik_500Medium",
          fontWeight: "bold",
        },
      }}
    />
  );
};

export default SelectNativeBase;
