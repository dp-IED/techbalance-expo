import ButtonWithIcon from "@/components/ButtonWithIcon";
import HomeFireButton from "@/components/HomeFireButton";
import { useState } from "react";
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

const EditIcon = require("../../assets/images/EditIcon.png");
const SnoozeIcon = require("../../assets/images/SnoozeIcon.png");
const SkipIcon = require("../../assets/images/SkipIcon.png");
const BinIcon = require("../../assets/images/BinIcon.png");

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

const GoalContextMenu = (props: { visible: boolean; onClose: () => void }) => (
	<Modal visible={props.visible} animationType="slide" transparent={true}>
		<View style={styles.modalContainer}>
        <View>
          <Text>Goal Card</Text>
          <HomeFireButton/>
        </View>
        <ButtonWithIcon
          title="Complete"
          onPress={() => {}}
          active={true}
          color="#8DD5B3"
          icon={require("../../assets/images/tick.png")}
        />
        <View style={styles.iconContainer}>
          {IconArray.map((icon, index) => (
            <View key={index} style={styles.iconBlock}>
              <Image source={icon.iconPath} style={styles.icon} />
              <Text style={{ fontSize: 14, fontWeight: "600", marginVertical: 5 }}>
                {icon.iconTitle}
              </Text>
            </View>
          ))}
        </View>
      </View>
	</Modal>
);

const Second = (props: { visibility: boolean }) => {
	const [modalVisibility, setModalVisibility] = useState(false);
	return (
		<View>
			<Text>Hello</Text>
			<TouchableOpacity onPress={() => setModalVisibility(true)}>
				<Text>Press to open modal</Text>
			</TouchableOpacity>
			<GoalContextMenu
				visible={modalVisibility}
				onClose={() => setModalVisibility(false)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: "5%",
    marginTop: "100%",
	},
	iconContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
    width: "100%",
		backgroundColor: "white",
    marginVertical: 15,
    borderRadius: 10
	},
	iconBlock: {
		alignItems: "center",
		marginVertical: 10,
	},
	icon: {
		width: 24,
		height: 24,
	},
});

export default Second;
