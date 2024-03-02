import {
  Button,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, router, useRouter } from "expo-router";
import { useReducer } from "react";
import { Text } from "@/components/Themed";
import { Goal } from "@/types/Goal";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "@/scripts/initSupabase";

function saveToStorage(goal: Goal) {
  switch (goal.type) {
    case "Body":
      AsyncStorage.setItem("body", JSON.stringify(goal));
      break;
    case "Mind":
      AsyncStorage.setItem("mind", JSON.stringify(goal));
      break;
    case "People":
      AsyncStorage.setItem("people", JSON.stringify(goal));
      break;
    default:
      break;
  }
}

function saveToDB(goal: Goal) {
  const input = {
    ...goal,
    reminderTime: goal.reminderTime ? goal.reminderTime.toISOString() : null,
  };
  supabase.from("users").update({ goals: input }).eq("id", 1);
}

export default function Modal() {
  type NewGoal = {
    name: string;
    icon: string;
    description: string;
    repeat: "Never" | "Daily" | "Weekly" | "Monthly" | "Custom";
    time: "Any" | "Morning" | "Afternoon" | "Evening" | "Custom";
    type: "Body" | "Mind" | "People";
    notify: boolean;
  };

  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.

  const repetitions = ["Never", "Daily", "Weekly", "Custom"];
  const times = ["Any", "Morning", "Afternoon", "Evening", "Custom"];
  const types = ["Body", "Mind", "People"];

  const initialState: NewGoal = {
    name: "",
    icon: "",
    description: "",
    repeat: "Never",
    type: "Body", // here we'd be checking the missing ones and disabling the ones that are already set
    time: "Any",
    notify: false,
  };

  const reducer = (state: NewGoal, action: any) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "description":
        return { ...state, description: action.payload };
      case "repeat":
        return { ...state, repeat: action.payload };
      case "time":
        return { ...state, time: action.payload };
      case "type":
        return { ...state, type: action.payload };
      case "notify":
        return { ...state, notify: !state.notify };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          paddingVertical: 18,
          paddingBottom: 30,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
          gap: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Rubik_500Medium",
            }}
          >
            New Goal
          </Text>
          <Link
            href={{
              pathname: "./",
              params: {
                reload: 1,
              },
            }}
            asChild
          >
            <Button
              title="Save"
              onPress={() => {
                const goal: Goal = {
                  title: state.name,
                  icon: state.icon,
                  type: state.type,
                  description: state.description,
                  repeat: state.repeat,
                  reminderTime: new Date(), // TODO: rework this
                  notify: state.notify,
                  completed: false,
                };
                saveToDB(goal);
              }}
            />
          </Link>
        </View>
        <TextInput
          value={state.name}
          placeholder="Enter a new goal..."
          placeholderTextColor={"#BFC9C2"}
          onChangeText={(_new) =>
            dispatch({
              type: "name",
              payload: _new,
            })
          }
          style={{
            fontFamily: "Rubik_500Medium",
            fontSize: 18,
            backgroundColor: "#F6F5FA",
            borderRadius: 30,
            paddingLeft: 15,
            paddingRight: 9,
            height: 50,
          }}
        />
        <View
          style={{
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Rubik_500Medium",
            }}
          >
            Repeat
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
            }}
          >
            {repetitions.map((repetition, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor:
                    state.repeat === repetition ? "#9F92C7" : "transparent",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 30,
                  borderColor:
                    state.repeat === repetition ? "transparent" : "#6750A4",
                  borderWidth: 1,
                }}
                onPress={() => {
                  dispatch({
                    type: "repeat",
                    payload: repetition,
                  });
                }}
              >
                <Text
                  style={{
                    color: state.repeat === repetition ? "#fff" : "#000",
                    fontFamily:
                      state.repeat === repetition
                        ? "Rubik_500Medium"
                        : "Rubik_400Regular",
                    fontSize: 15,
                  }}
                >
                  {repetition}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={{
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Rubik_500Medium",
            }}
          >
            Time
          </Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: "row",
              gap: 10,
            }}
          >
            {times.map((time, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor:
                    state.time === time ? "#9F92C7" : "transparent",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 30,
                  borderColor: state.time === time ? "transparent" : "#6750A4",
                  borderWidth: 1,
                }}
                onPress={() => {
                  dispatch({
                    type: "time",
                    payload: time,
                  });
                }}
              >
                <Text
                  style={{
                    color: state.time === time ? "#fff" : "#000",
                    fontFamily:
                      state.time === time
                        ? "Rubik_500Medium"
                        : "Rubik_400Regular",

                    fontSize: 15,
                  }}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Rubik_500Medium",
            }}
          >
            Type
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 15,
            }}
          >
            {types.map((type, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor:
                    state.type === type ? "#9F92C7" : "transparent",
                  paddingVertical: 10,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                  borderColor: state.type === type ? "transparent" : "#6750A4",
                  borderWidth: 1,
                }}
                onPress={() => {
                  dispatch({
                    type: "type",
                    payload: type,
                  });
                }}
              >
                <Text
                  style={{
                    color: state.type === type ? "#fff" : "#000",
                    fontFamily:
                      state.type === type
                        ? "Rubik_500Medium"
                        : "Rubik_400Regular",
                    fontSize: 15,
                  }}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Rubik_500Medium",
            }}
          >
            Notify me
          </Text>
          <Switch
            value={state.notify}
            onValueChange={() => {
              dispatch({
                type: "notify",
                payload: null,
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}
