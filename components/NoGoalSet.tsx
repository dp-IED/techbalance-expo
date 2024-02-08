import { View, Text, TouchableOpacity } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { GoalType } from "../types/GoalType";

const NoGoalSet = (props: { type: GoalType }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 11,
        width: 352,
      }}
    >
      <TouchableOpacity onPress={() => {}}>
        <Svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          id={props.type}
        >
          <Circle
            cx="17"
            cy="17"
            r="16"
            fill="white"
            stroke="#A59AC8"
            stroke-width="2"
          />
        </Svg>
      </TouchableOpacity>
      <View
        style={{
          padding: 5,
          width: 320,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 15,
          gap: 3,
          borderColor: "#E3E1EC",
          borderWidth: 4,
          borderStyle: "dashed",
        }}
      >
        <View
          style={{
            display: "flex",
            width: 50,
            height: 74,
            alignItems: "center",
          }}
        />
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
            Nothing to see here yet
          </Text>
          <Text
            style={{
              fontSize: 14,
              padding: 8,
            }}
          >
            {":)"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NoGoalSet;
