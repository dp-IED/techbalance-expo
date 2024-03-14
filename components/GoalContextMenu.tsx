import ButtonWithIcon from "@/components/ButtonWithIcon";
import {
	View,
	Text,
	Modal,
	Image,
	TouchableOpacity,
	StyleSheet,
} from "react-native";

interface IconObject {
	iconPath: any;
	iconTitle: string;
}

const EditIcon = require("../assets/images/EditIcon.png");
const SnoozeIcon = require("../assets/images/SnoozeIcon.png");
const SkipIcon = require("../assets/images/SkipIcon.png");
const BinIcon = require("../assets/images/BinIcon.png");

const IconArray: IconObject[] = [
	{
		iconPath: EditIcon,
		iconTitle: "Edit",
	},
	{
		iconPath: SnoozeIcon,
		iconTitle: "Snooze",
	},
	{
		iconPath: SkipIcon,
		iconTitle: "Skip",
	},
	{
		iconPath: BinIcon,
		iconTitle: "Delete",
	},
];

const GoalContextMenu = (props: {
	modalVisibility: boolean;
	onClose: () => void;
	title: string;
	icon: string;
	type: string;
	onComplete: () => void;
}) => (
	<Modal
		visible={props.modalVisibility}
		animationType="slide"
		transparent={true}
	>
		<View style={styles.modalContainer}>
			<View style={styles.goalCard}>
				<Image
					source={{ uri: props.icon }}
					width={60}
					height={60}
				/>
				<Text
					style={{
						fontSize: 18,
						fontWeight: "600",
						marginVertical: 5,
					}}
				>
					{props.title}
				</Text>
				<View style={styles.streakContainer}>
					<Text style={styles.streakText}>{props.type}</Text>
					<Image source={require("../assets/images/FireIcon.png")} />
					<Text style={{ ...styles.streakText, marginLeft: 10 }}>
						1
					</Text>
				</View>
			</View>
			<ButtonWithIcon
				title="Complete"
				onPress={props.onComplete}
				active={true}
				color="#DFDAEC"
				icon={require("../assets/images/tick.png")}
			/>
			<View style={styles.iconContainer}>
				{IconArray.map((icon, index) => (
					<TouchableOpacity key={index} style={styles.iconBlock}>
						<Image source={icon.iconPath} style={styles.icon} />
						<Text
							style={{
								fontSize: 14,
								fontWeight: "600",
								marginVertical: 5,
							}}
						>
							{icon.iconTitle}
						</Text>
					</TouchableOpacity>
				))}
			</View>
			<TouchableOpacity
				style={styles.closeBtnContainer}
				onPress={props.onClose}
			>
				<Text style={styles.closeBtn}>X</Text>
			</TouchableOpacity>
		</View>
	</Modal>
);

const styles = StyleSheet.create({
	modalContainer: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: "5%",
		marginTop: "75%",
	},
	goalCard: {
		backgroundColor: "white",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 20,
		paddingBottom: 20,
	},
	streakContainer: {
		flexDirection: "row",
	},
	streakText: {
		color: "#9F92C7",
		marginRight: 10,
		fontFamily: "Rubik_500Medium",
		fontSize: 14,
		alignSelf: "center",
	},
	iconContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
		backgroundColor: "white",
		marginVertical: 15,
		borderRadius: 10,
	},
	iconBlock: {
		alignItems: "center",
		marginVertical: 10,
	},
	icon: {
		width: 24,
		height: 24,
	},
	closeBtnContainer: {
		backgroundColor: "#DFDAEC",
		width: 40,
		height: 40,
		borderRadius: 16,
		paddingHorizontal: 13,
		paddingVertical: 6,
	},
	closeBtn: {
		color: "#4F455C",
		fontSize: 20,
		fontWeight: "600",
	},
});

export default GoalContextMenu;
