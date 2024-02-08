import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

import { useState } from "react";
import { MoodChartProps } from "../types/MoodChartProps";

export const MoodChart = (props: MoodChartProps) => {
  const { data } = props;

  const views = ["Weekly", "Monthly", "Yearly"];

  const [view, setView] = useState(views[0]);

  return (
    <View>
      <View
        style={{
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 20,
            marginBottom: 10,
            //fontFamily: "DMSansBold",
          }}
        >
          Mood analysis
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          borderColor: "#E7E5E4",
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 30,
          backgroundColor: "rgb(251 251 251)",
          // shadow
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1,
          elevation: 5,
        }}
      >
        <LineChart
          data={data}
          width={330}
          curved
          xAxisColor={"rgba(30, 30, 30, 0.2)"}
          yAxisColor={"rgba(0,0,0,0)"}
          hideYAxisText
          color="#18A0FB"
          xAxisLabelTexts={["M", "T", "W", "T", "F", "S", "S"]}
          maxValue={4}
          noOfSections={4}
          yAxisOffset={1}
          isAnimated
          rulesColor={"rgba(30, 30, 30, 0.2)"}
          rulesType="solid"
          disableScroll
        />
      </View>
    </View>
  );
};
