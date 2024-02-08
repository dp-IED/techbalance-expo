import { View, Text, TouchableOpacity } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Goal } from "../types/Goal";

const GoalCard = (props: { goal: Goal; onCompleted: (goal: Goal) => void }) => {
  const { id, icon, title, type, completed } = props.goal;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 352,
        gap: 10,
      }}
    >
      <TouchableOpacity onPress={() => props.onCompleted(props.goal)}>
        {completed ? (
          <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
            <Circle
              cx="17.5"
              cy="17.459"
              r="16"
              fill="#A59AC8"
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
              stroke="#A59AC8"
              stroke-width="2"
            />
          </Svg>
        )}
      </TouchableOpacity>
      <View
        style={{
          width: 320,
          backgroundColor: "#DAD7E2",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 12,
          gap: 3,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            paddingVertical: 27,
            paddingHorizontal: 9,
          }}
        >
          {icon}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            padding: 8,
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              padding: 8,
              maxWidth: 200,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              padding: 8,
            }}
          >
            {type}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GoalCard;
