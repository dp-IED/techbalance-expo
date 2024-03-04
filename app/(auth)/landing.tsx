import {
	StyleSheet,
	Text,
	TouchableOpacity,
	Animated,
	SafeAreaView,
	View,
} from "react-native";
import React, { Dispatch, SetStateAction, useRef, useEffect } from "react";

// props type
interface LandingProps {
	setShowTabs: Dispatch<SetStateAction<boolean>>;
	headerText: string;
	actionText: string;
	imageURL: any;
	onPressAction: () => void;
}

// Landing component
const Landing: React.FC<LandingProps> = ({
	headerText,
	actionText,
	onPressAction,
	imageURL,
}) => {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	// animation effect
	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	}, [fadeAnim]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.headerText}>{headerText}</Text>
			{/* rendering image or placeholder based on props */}
			{imageURL !== "" ? (
				<Animated.Image
					source={imageURL}
					style={[styles.img, { opacity: fadeAnim }]}
				/>
			) : (
				<View style={styles.placeholder}></View>
			)}
			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={onPressAction}
			>
				<Text style={styles.button}>{actionText}</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Landing;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	headerText: {
		fontSize: 24,
		marginBottom: 20,
		fontWeight: "bold",
	},
	img: {
		marginBottom: 20,
		width: 200,
		height: 200,
	},
	buttonContainer: {
		marginTop: 20,
	},
	button: {
		fontSize: 18,
		color: "white",
		backgroundColor: "#9370db",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
	},
	placeholder: {
		width: 200,
		height: 200,
		backgroundColor: "#ccc",
		marginBottom: 20,
	},
});
