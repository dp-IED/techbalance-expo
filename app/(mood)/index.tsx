import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ShadowScreenGradient from "@/components/ShadowScreenGradient";
import { SafeAreaView } from "react-native";
import SafeViewAndroid from "@/components/SafeViewAndroid";
import ButtonNormal from "@/components/ButtonNormal";
import { Slider } from "react-native-elements";

const index = () => {
  const [sliderValue, setSliderValue] = useState(0);


	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
			<ShadowScreenGradient />
			<View style={styles.container}>
				<Text>How do you feel?</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          value={sliderValue}
          onValueChange={setSliderValue}
          minimumTrackTintColor="#D2D0DC"
          maximumTrackTintColor="#E3E8EF"
          thumbTintColor="#D2D0DC"
          thumbStyle={styles.thumbStyle}
        />
				<ButtonNormal
					title="Add details"
					style={styles.button}
					onPress={() => {}}
					active={true}
				/>
				<TouchableOpacity>
					<Text>Save without Details</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		// flex: 0,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		marginHorizontal: "30%",
	},
  slider: {
    width: '60%',
  },
  thumbStyle: {
    width: 20, 
    height: 20, 
    borderRadius: 10, 
  },
});
