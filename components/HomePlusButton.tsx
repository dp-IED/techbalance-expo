import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text } from "./Themed";
import { router } from "expo-router";

const HomePlusButton = (props: { width: number; height: number }) => {
	const { width: width, height } = props;

	return (
		<TouchableOpacity
			onPress={() => {
				router.push("/(home)/goalCtxMenu"); // change path to mood check-in
			}}
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
