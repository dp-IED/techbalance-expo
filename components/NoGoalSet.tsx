import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { GoalType } from "../types/GoalType";
import HomePlusButton from "./HomePlusButton";
import { Href, HrefObject, router } from "expo-router";

const NoGoalSet = (props: {
	type: GoalType;
	iconUrl: string;
	windowHeight: number;
	isLast: boolean;
}) => {
	return (
		<View
			style={[
				styles.container,
				{
					height: props.windowHeight / 10,
					marginBottom: props.isLast ? 0 : props.windowHeight / 100,
				},
			]}
		>
			<Image
				source={{ uri: props.iconUrl }}
				style={[styles.image, styles.opacity]}
			/>

			<View style={[styles.textContainer, styles.opacity]}>
				<Text style={styles.text}>{props.type}</Text>
			</View>
			<HomePlusButton width={45} height={45} onPress={() => {router.push("/(goals)/(sharedTopBar)")}}/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingRight: 12,
		paddingLeft: 12,
		width: "100%",
		backgroundColor: "#F6F5FA",
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 12,
	},
	image: {
		width: 50,
		height: 50,
	},
	textContainer: {
		flex: 1,
		flexDirection: "column",
		paddingLeft: 15,
		paddingTop: 20,
	},
	text: {
		fontFamily: "Rubik_400Regular",
		color: "#4F455C",
		fontSize: 15,
		padding: 10,
	},
	opacity: {
		opacity: 0.5,
	},
});

export default NoGoalSet;
