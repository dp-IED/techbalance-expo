import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Slider } from "react-native-elements";
import HomePlusButton from "./HomePlusButton";

const HomeMoodBar = () => {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={100}
        minimumValue={0}
        step={1}
        disabled={true}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        thumbTintColor="transparent"
        minimumTrackTintColor="#DFDAEC"
        maximumTrackTintColor="#F6F5FA"
      />
      <View style={styles.row}>
        <Image
          source={require("../assets/images/home_pb_smile_icon.png")}
          style={styles.icon}
        />
        <HomePlusButton width={36} height={36} />
        <Image
          source={require("../assets/images/home_pb_sad_icon.png")}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },
  track: {
    height: 40,
    borderRadius: 20,
  },
  thumb: {
    height: 0,
    width: 0,
    borderRadius: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    paddingHorizontal: 8,
    alignItems: "center",
  },
  icon: {
    height: 32,
    width: 32,
  },
});

export default HomeMoodBar;
