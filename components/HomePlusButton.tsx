import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { router, Href } from "expo-router";
import { GoalType } from "@/types/GoalType";


const HomePlusButton = (props: { width: number; height: number, onPress: () => void }) => {
	const { width: width, height } = props;

	return (
		<TouchableOpacity
			onPress={props.onPress}
		>
			<View style={[styles.container, { height, width: width }]}>
				<Text style={[styles.text, { lineHeight: height }]}>+</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#DFDAEC",
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		textAlign: "center",
		fontSize: 30,
		fontFamily: "Rubik_300Light",
	},
});

export default HomePlusButton;
