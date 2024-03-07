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
	const gradientColors = ["#80BFFF", "#FFFFFF"];
	const gradientOpacity = [1, 0];
	const minRadius = 0.2;

	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
			<LinearGradient
				style={styles.gradient}
				colors={[
					"rgba(167,199,231,0.7)",
					"transparent",
					"transparent",
					"#FFFFFF",
				]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
			>
				{/* Top most button, still need work */}
				<TouchableOpacity>
					<Text>Now</Text>
				</TouchableOpacity>
				<Text style={styles.headerText}>How do you feel?</Text>
				<View>
					<Svg height={deviceWidth + 50} width={deviceWidth}>
						<Defs>
							<RadialGradient
								id="grad"
								cx="50%"
								cy="50%"
								rx="50%"
								ry="50%"
								fx="50%"
								fy="50%"
							>
								<Stop
									offset="0"
									stopColor={gradientColors[0]}
									stopOpacity={gradientOpacity[0]}
								/>
								<Stop
									offset="1"
									stopColor={gradientColors[1]}
									stopOpacity={gradientOpacity[1]}
								/>
							</RadialGradient>
						</Defs>
						{/* Outer circle to add a white border */}
						<Circle
							cx={deviceWidth / 2}
							cy={deviceWidth / 2 + 25}
							r={Math.max(circleRadius * 18 + 20, minRadius)}
							fill="#FFFFFF"
						/>
						{/* inner circle */}
						<Circle
							cx={deviceWidth / 2}
							cy={deviceWidth / 2 + 25}
							r={Math.max(circleRadius * 18, minRadius)}
							fill="url(#grad)"
						/>
					</Svg>
				</View>
				{/* slider */}
				<Slider
					style={styles.slider}
					minimumValue={1}
					maximumValue={10}
					value={circleRadius}
					onValueChange={(value) => setCircleRadius(value)}
					minimumTrackTintColor="#A7C7E7"
					maximumTrackTintColor="#D2D0DC"
					thumbTintColor="#A7C7E7"
					thumbStyle={styles.thumbStyle}
				/>
				<View style={styles.emojiContainer}>
					<Entypo name="emoji-sad" size={20} color="grey" />
					<Entypo name="emoji-happy" size={20} color="grey" />
				</View>
				<ButtonNormal
					title="Add details"
					onPress={() => {}}
					active={true}
					color="#91b8ff"
				/>
				<TouchableOpacity>
					<Text>Save without Details</Text>
				</TouchableOpacity>
			</LinearGradient>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({
  headerText: {
		fontSize: 24,
		fontWeight: "700",
		letterSpacing: 0.3,
		marginVertical: 10,
	},
	gradient: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
	},
	slider: {
		width: "60%",
	},
	thumbStyle: {
		width: 20,
		height: 20,
		borderRadius: 10,
	},
	emojiContainer: {
		width: "70%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 10,
	},
	
});
