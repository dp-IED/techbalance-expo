import { View, Text, TouchableOpacity, Image } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Goal } from "../types/Goal";

const GoalCard = (props: {
  goal: Goal;
  onCompleted: (goal: Goal) => void;
  windowHeight: number;
  isLast: boolean;
}) => {
  const { id, icon, title, type, completed } = props.goal;

  return (
    <View
      style={{
        height: props.windowHeight / 10,
        paddingRight: 12,
        paddingLeft: 12,
        marginBottom: props.isLast ? 0 : props.windowHeight / 100,
        width: "100%",
        backgroundColor: "#DFDAEC",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        opacity: completed ? 0.5 : 1,
      }}
    >
      {/* img and the link */}
      <Image
        source={{
          uri: icon,
        }}
        style={{ width: 50, height: 50 }}
      />

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          padding: 12,
        }}
      >
        <Text
          style={{
            fontFamily: "Rubik_500Medium",
            fontSize: 16,
            padding: 4,
            maxWidth: 200,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "Rubik_400Regular",
            fontSize: 14,
            padding: 4,
          }}
        >
          {type}
        </Text>
      </View>
      <TouchableOpacity onPress={() => props.onCompleted(props.goal)}>
        <View style={{ opacity: completed ? 0.5 : 1 }}>
          {completed ? (
            <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
              <Circle
                cx="17.5"
                cy="17.459"
                r="16"
                fill="#9F92C7"
                stroke="white"
                stroke-width="2"
              />
              <Path
                d="M15.5002 21.6288L11.3302 17.4588L9.91016 18.8688L15.5002 24.4588L27.5002 12.4588L26.0902 11.0488L15.5002 21.6288Z"
                fill="white"
              />
            </Svg>
          ) : (
            <Svg width="35" height="35" viewBox="0 0 35 35" fill="none" id={id}>
              <Circle
                cx="17.5"
                cy="17.459"
                r="16"
                fill="white"
                stroke-width="2"
              />
            </Svg>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GoalCard;
