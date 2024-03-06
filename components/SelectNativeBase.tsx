import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Image } from "react-native";

const SelectNativeBase = () => {
  const [selected, setSelected] = React.useState("Today");
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { label: "Yesterday", value: "Yesterday" },
    { label: "Today", value: "Today" },
    { label: "Tomorrow", value: "Tomorrow" },
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
      Icon={Icon}
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
          borderColor: "transparent",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: 40,
        },
      }}
    />
  );
};

export default SelectNativeBase;
