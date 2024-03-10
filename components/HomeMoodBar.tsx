import React, { useState } from "react";
import { View, Image } from "react-native";
import { Slider } from "react-native-elements";
import HomePlusButton from "./HomePlusButton";

const HomeMoodBar = () => {
  const [value, setValue] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        //  alignItems: "stretch",
        justifyContent: "center",
        // padding: 20,
        paddingVertical: 20,
      }}
    >
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={100}
        minimumValue={0}
        step={1}
        disabled={true}
        // thumbStyle={{ height: 0 }}
        trackStyle={{
          height: 40,
          borderRadius: 20,
        }}
        thumbStyle={{
          height: 0,
          width: 0,
          borderRadius: 0,
        }}
        thumbTintColor="transparent"
        minimumTrackTintColor="#DFDAEC"
        maximumTrackTintColor="#F6F5FA"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          width: "100%",
          paddingHorizontal: 8,
        }}
      >
        <Image
          source={require("../assets/images/home_pb_smile_icon.png")}
          style={{
            height: 32,
            width: 32,
          }}
        />
        <HomePlusButton widht={36} height={36} />
        <Image
          source={require("../assets/images/home_pb_sad_icon.png")}
          style={{
            height: 32,
            width: 32,
          }}
        />
      </View>
    </View>
  );
};

export default HomeMoodBar;
