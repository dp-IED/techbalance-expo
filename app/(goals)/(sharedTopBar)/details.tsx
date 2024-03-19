import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native";
import { useEffect, useReducer, useRef } from "react";
import { Image } from "expo-image";
import FilterButton from "@/components/FilterButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoalType } from "@/types/GoalType";
import { KeyValuePair } from "@react-native-async-storage/async-storage/lib/typescript/types";

export default function GoalDetails() {
  const goal = useLocalSearchParams<{
    type: GoalType;
    label: string;
    frequency: string;
    time: string;
    reminder: string;
    reminderTime: string;
  }>();

  type State = {
    type: GoalType;
    title: string;
    date: Date;
    frequency: string;
    reminder: boolean;
    reminderTime: GoalTime;
  };

  type ActionType =
    | { type: "SET_TITLE"; payload: string }
    | { type: "SET_FREQUENCY"; payload: string }
    | { type: "SET_DATE"; payload: Date }
    | { type: "SET_REMINDER"; payload: boolean }
    | { type: "SET_REMINDER_TIME"; payload: GoalTime }
    | { type: "UNDO" };

  const initialState = {
    type: goal.type,
    title: goal.label || "",
    frequency: goal.frequency || "One-time",
    date: new Date(),
    reminder: goal.reminder === "true" || false,
    reminderTime: "Any" as GoalTime, // this will be tricky since the prev page doesn't know what a GoalTime is
  };

  const history = useRef<State[]>([initialState]);

  const reducer = (state: State, action: ActionType): State => {
    switch (action.type) {
      case "SET_TITLE":
        history.current.push(state);
        return { ...state, title: action.payload };
      case "SET_FREQUENCY":
        history.current.push(state);
        return { ...state, frequency: action.payload };
      case "SET_DATE":
        history.current.push(state);
        return { ...state, date: action.payload };
      case "SET_REMINDER":
        history.current.push(state); // this takes longer weirdly
        return { ...state, reminder: action.payload };
      case "SET_REMINDER_TIME":
        history.current.push(state);
        return { ...state, reminderTime: action.payload };
      case "UNDO":
        return history.current.length > 0 ? history.current.pop()! : state;
      default:
        return state;
    }
  };

  // export this
  type GoalFrequency = "One-time" | "Daily" | "Weekly" | "Monthly" | "Yearly";

  type GoalTime = "Any" | "Morning" | "Afternoon" | "Evening" | "Night";

  const freqs: GoalFrequency[] = [
    "One-time",
    "Daily",
    "Weekly",
    "Monthly",
    "Yearly",
  ];

  const times: GoalTime[] = ["Any", "Morning", "Afternoon", "Evening", "Night"];

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <View
        style={{
          width: 361,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: 20,
          paddingBottom: 29,
          paddingLeft: 16,
          paddingRight: 16,
          gap: 28,
          borderRadius: 24,
          backgroundColor: "#F8FBFA",
        }}
      >
        <TextInput
          placeholder="Enter a new goal..."
          placeholderTextColor={"#DFDAEC"}
          style={{
            display: "flex",
            height: 43,
            paddingLeft: 16,
            alignItems: "center",
            gap: 10,
            alignSelf: "stretch",
            backgroundColor: "#F6F5FA",
            borderRadius: 30,
            fontFamily: "Rubik_400Regular",
            fontSize: 18,
            color: "#9F92C7",
            fontWeight: state.title.length > 0 ? "600" : "bold",
          }}
          value={state.title}
          onChangeText={(_n) => {
            dispatch({ type: "SET_TITLE", payload: _n });
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 8,
            alignSelf: "stretch",
          }}
        >
          <Image
            source={require("../../../assets/images/frequency_icon.png")}
            style={{
              width: 16,
              height: 16,
            }}
          />
          <Text
            style={{
              color: "#49454F",
              textAlign: "right",
              fontFamily: "Rubik_400Regular",
              fontSize: 17,
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            Frequency
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {freqs.map((f) => {
            return (
              <FilterButton
                label={f}
                key={f}
                selected={state.frequency === f}
                onPress={() => {
                  dispatch({ type: "SET_FREQUENCY", payload: f });
                }}
              />
            );
          })}
        </ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 8,
            alignSelf: "stretch",
          }}
        >
          <Image
            source={require("../../../assets/images/clock_icon.png")}
            style={{
              width: 16,
              height: 16,
            }}
          />
          <Text
            style={{
              color: "#49454F",
              textAlign: "right",
              fontFamily: "Rubik_400Regular",
              fontSize: 17,
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            Time
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {times.map((t) => {
            return (
              <FilterButton
                label={t}
                key={t}
                selected={state.reminderTime === t}
                onPress={() => {
                  dispatch({ type: "SET_REMINDER_TIME", payload: t });
                }}
              />
            );
          })}
        </ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 8,
            alignSelf: "stretch",
          }}
        >
          <Image
            source={require("../../../assets/images/bell_icon.png")}
            style={{
              width: 16,
              height: 16,
            }}
          />
          <Text
            style={{
              color: "#49454F",
              textAlign: "left",
              fontFamily: "Rubik_400Regular",
              fontSize: 17,
              fontStyle: "normal",
              fontWeight: "700",
              flex: 1,
            }}
          >
            Reminder
          </Text>
          <Switch
            value={state.reminder}
            ios_backgroundColor={"#DFDAEC"}
            trackColor={{ false: "#DFDAEC", true: "#9F92C7" }}
            onValueChange={() => {
              dispatch({ type: "SET_REMINDER", payload: !state.reminder });
              dispatch({ type: "SET_REMINDER_TIME", payload: "Any" });
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
        }}
        onPress={() => {
          // undo the latest change
          dispatch({ type: "UNDO" });
        }}
      >
        <Image
          source={require("../../../assets/images/undo_arrow.png")}
          style={{
            width: 25,
            height: 25,
          }}
        />
        <Text
          style={{
            color: "#9F92C7",
            fontFamily: "Rubik_400Regular",
            fontSize: 18,
            fontWeight: "700",
            lineHeight: 35,
          }}
        >
          Undo
        </Text>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            width: 300,
            height: 50,
            paddingHorizontal: 36,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            backgroundColor: "#9F92C7",
            borderRadius: 30,
          }}
          onPress={() => {
            AsyncStorage.setItem(`goal-${goal.type}`, JSON.stringify(state))
              .then(() => {
                AsyncStorage.multiGet([
                  "goal-Body",
                  "goal-Self",
                  "goal-People",
                ]).then((res: readonly KeyValuePair[]) => {
                  if (res) {
                    const nextGoal = res.find((g) => {
                      return g[1] === null;
                    });
                    const nextGoalType = nextGoal
                      ? nextGoal[0].split("-")[1]
                      : "";
                    console.log("nextGoalType", nextGoalType);
                    if (nextGoalType) {
                      router.replace({
                        pathname: "/(goals)/(sharedTopBar)/",
                        params: { tab: nextGoalType as GoalType },
                      });
                      return;
                    } else {
                      // this is was last goal
                      router.replace("/(home)/");
                      return;
                    }
                  }
                  router.replace("/(goals)/(sharedTopBar)");
                  return;
                });
              })
              .catch((e) => {
                console.error(e);
              });
          }}
        >
          <Text
            style={{
              color: "#FFF",
              textAlign: "right",
              fontFamily: "Rubik_400Regular",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Continue to next goal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            router.push("/(home)/");
          }}
        >
          <Text
            style={{
              fontFamily: "Rubik_400Regular",
              fontSize: 18,
              lineHeight: 35,
              color: "#9F92C7",
            }}
          >
            Finish setting up your goal
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
