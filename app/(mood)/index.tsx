import React, { useState } from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	SafeAreaView,
} from "react-native";
import { Svg, RadialGradient, Defs, Stop, Circle } from "react-native-svg";
import { Slider } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import SafeViewAndroid from "@/components/SafeViewAndroid";
import ButtonNormal from "@/components/ButtonNormal";

// to get the circle width
const deviceWidth = Dimensions.get("window").width;

const index = () => {
	const [circleRadius, setCircleRadius] = useState(1);
	const minRadius = 0.2;

	const redStart = 118;
	const greenStart = 161;
	const blueStart = 247;
	const redEnd = 141; // R component of #8DD5B3
	const greenEnd = 213; // G component of #8DD5B3
	const blueEnd = 179; // B component of #8DD5B3

	const redComponent = redStart + (redEnd - redStart) * (circleRadius / 10);
	const greenComponent =
		greenStart + (greenEnd - greenStart) * (circleRadius / 10);
	const blueComponent =
		blueStart + (blueEnd - blueStart) * (circleRadius / 10);

	// change color based on slider value
	const animatedColor = `rgb(${Math.floor(redComponent)}, 
													${Math.floor(greenComponent)}, 
													${Math.floor(blueComponent)}
												)`;

	// Calculate the interpolated color based on the slider value for linear gradient
	const interpolatedColor = `rgba(${Math.floor(
		118 + (circleRadius * (141 - 118)) / 10
	)}, ${Math.floor(161 + (circleRadius * (213 - 161)) / 10)}, ${Math.floor(
		247 + (circleRadius * (179 - 247)) / 10
	)}, 0.3)`;

	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
			<LinearGradient
				style={styles.gradient}
				colors={[interpolatedColor, "transparent"]}
				// dynamically change positions of linear gradient
				start={{ x: circleRadius / 10, y: circleRadius / 10 }}
				end={{ x: 1 - circleRadius / 10, y: 1 - circleRadius / 10 }}
			>
				{/* Top most button, still need work */}
				<TouchableOpacity>
					<Text>Now</Text>
				</TouchableOpacity>
				<View>
					<Svg height={deviceWidth + 50} width={deviceWidth}>
						{/* Color gradient */}
						<Defs>
							<RadialGradient
								id="grad"
								cx="50%"
								cy="50%"
								r="50%"
								fx="50%"
								fy="50%"
							>
								<Stop
									offset="0%"
									stopColor="#FFFFFF"
									stopOpacity="1"
								/>
								<Stop
									offset="100%"
									stopColor={animatedColor}
									stopOpacity="1"
								/>
							</RadialGradient>
						</Defs>

						<Circle
							cx={deviceWidth / 2}
							cy={deviceWidth / 2 + 25}
							r={Math.max(circleRadius * 18 + 25, minRadius)}
							fill="url(#grad)"
							fillOpacity="0.2"
						/>
						{/* circles of animation */}
						<Circle
							cx={deviceWidth / 2}
							cy={deviceWidth / 2 + 25}
							r={Math.max(circleRadius * 18, minRadius)}
							fill="url(#grad)"
							fillOpacity="0.4"
						/>
						<Circle
							cx={deviceWidth / 2}
							cy={deviceWidth / 2 + 25}
							r={Math.max(
								(circleRadius * 18) / 1.5 + 15,
								minRadius
							)}
							fill="url(#grad)"
							fillOpacity="0.6"
						/>
						{/* inner circle */}
						<Circle
							cx={deviceWidth / 2}
							cy={deviceWidth / 2 + 25}
							r={Math.max((circleRadius * 18) / 2, minRadius)}
							fill="url(#grad)"
							fillOpacity="0.8"
						/>
					</Svg>
					<Text style={styles.headerText}>How do you feel?</Text>
				</View>
				{/* slider */}
				<Slider
					style={styles.slider}
					minimumValue={1}
					maximumValue={10}
					value={circleRadius}
					onValueChange={(value) => setCircleRadius(value)}
					minimumTrackTintColor={animatedColor}
					maximumTrackTintColor="transparent"
					thumbTintColor={animatedColor}
					thumbStyle={styles.thumbStyle}
					trackStyle={{ height: 10, borderRadius: 5 }}
				/>
				<View style={styles.emojiContainer}>
					<Entypo name="emoji-sad" size={24} color="grey" />
					<Entypo name="emoji-happy" size={24} color="grey" />
				</View>
				<ButtonNormal
					title="Add details"
					onPress={() => {}}
					active={true}
					color={animatedColor}
				/>
				<TouchableOpacity style={{ marginVertical: 10 }}>
					<Text>Save without Details</Text>
				</TouchableOpacity>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({
	gradient: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
	},
	thumbStyle: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	emojiContainer: {
		width: "80%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 10,
	},
	slider: {
		height: 40,
		width: "80%",
	},
	headerText: {
		position: "absolute",
		top: "20%",
		left: "30%",
		transform: [{ translateX: -50 }, { translateY: -50 }],
		zIndex: 1,
		fontSize: 32,
		fontWeight: "600",
		letterSpacing: 0.3,
	},
});
