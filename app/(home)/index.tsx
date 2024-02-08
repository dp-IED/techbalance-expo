import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Svg, {
  Circle,
  Defs,
  Path,
  Stop,
  RadialGradient,
} from "react-native-svg";
import GoalCard from "@/components/GoalCard";
import {
  DrawerNavigationProp,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { useEffect, useReducer, useState } from "react";
import { Goal } from "@/types/Goal";
import NoGoalSet from "@/components/NoGoalSet";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import ButtonNormal from "@/components/ButtonNormal";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function Home() {
  const props: {
    goals: Goal[];
  } = {
    goals: [
      {
        id: "1",
        icon: "🚿",
        title: "Take a shower",
        description: "This is a test goal",
        type: "Body",
        completed: false,
      },
      {
        id: "2",
        icon: "❤️",
        title: "Put 5 items on vision board",
        description: "This is a test goal 2",
        type: "Mind",
        completed: false,
      },
      {
        id: "3",
        icon: "❤️",
        title: "Put 5 items on vision board",
        description: "This is a test goal 2",
        type: "People",
        completed: false,
      },
    ],
  };

  type State = {
    mindGoal: Goal | undefined;
    bodyGoal: Goal | undefined;
    peopleGoal: Goal | undefined;
  };

  type Action =
    | { type: "ADD_GOAL"; goal: Goal }
    | { type: "UPDATE_GOAL"; goal: Goal }
    | { type: "COMPLETE_GOAL"; goal: Goal };

  const initialState: State = {
    bodyGoal: props.goals.find((goal) => goal.type === "Body"),
    mindGoal: props.goals.find((goal) => goal.type === "Mind"),
    peopleGoal: props.goals.find((goal) => goal.type === "People"),
  };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "ADD_GOAL":
        switch (action.goal.type) {
          case "Body":
            return {
              ...state,
              bodyGoal: action.goal,
            };
          case "Mind":
            return {
              ...state,
              mindGoal: action.goal,
            };
          case "People":
            return {
              ...state,
              peopleGoal: action.goal,
            };
          default:
            return state;
        }
      case "UPDATE_GOAL":
        switch (action.goal.type) {
          case "Body":
            return {
              ...state,
              bodyGoal: action.goal,
            };
          case "Mind":
            return {
              ...state,
              mindGoal: action.goal,
            };
          case "People":
            return {
              ...state,
              peopleGoal: action.goal,
            };
          default:
            return state;
        }
      case "COMPLETE_GOAL":
        // set the completed property of the goal to true
        // and update the state
        switch (action.goal.type) {
          case "Body":
            if (state.bodyGoal) {
              return {
                ...state,
                bodyGoal: {
                  ...state.bodyGoal,
                  completed: !state.bodyGoal.completed,
                },
              };
            }
            break;
          case "Mind":
            if (state.mindGoal) {
              return {
                ...state,
                mindGoal: {
                  ...state.mindGoal,
                  completed: !state.mindGoal.completed,
                },
              };
            }
            break;
          case "People":
            if (state.peopleGoal) {
              return {
                ...state,
                peopleGoal: {
                  ...state.peopleGoal,
                  completed: !state.peopleGoal.completed,
                },
              };
            }
            break;
        }
        return state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    setCompletion(
      (state.bodyGoal?.completed ? 1 : 0) +
        (state.mindGoal?.completed ? 1 : 0) +
        (state.peopleGoal?.completed ? 1 : 0)
    );
  }, [state]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f7f7f7",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#f7f7f7",
          gap: 35,
          marginBottom: 35,
        }}
      >
        {/* Might want to add this to the layout as a TopBar */}
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 20,
          }}
        >
          <DrawerToggleButton tintColor="black" />
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Rubik_400Regular",
              textAlign: "center",
            }}
          >
            Good Evening, Emma
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 20,
              alignItems: "center",
            }}
          >
            <Text>S</Text>
            <Text>P</Text>
          </View>
        </View>

        <View
          style={{
            // padding only container
            flex: 1,
            paddingHorizontal: 20,
            gap: 12,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: 32,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <ButtonNormal
              title={"Yesterday"}
              onPress={() => {}}
              active={false}
            />
            <ButtonNormal title={"Today"} onPress={() => {}} active={true} />
            <ButtonNormal
              title={"Tomorrow"}
              onPress={() => {}}
              active={false}
            />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <AnimatedCircularProgress
              size={268.46}
              width={40}
              fill={(completion / 3) * 100 + 0.5}
              rotation={0}
              lineCap="round"
              tintColor="#eeecf3"
              backgroundColor="#fff"
              children={() => (
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Svg height="100%" width="100%" viewBox="0 0 268.46 268.46">
                    <Defs>
                      <RadialGradient
                        id="grad"
                        cx="50%"
                        cy="50%"
                        rx="50%"
                        ry="50%"
                        fx="50%"
                        fy="50%"
                        gradientUnits="userSpaceOnUse"
                      >
                        <Stop offset="0%" stopColor="#C9C4D9" stopOpacity="0" />
                        <Stop offset="100%" stopColor="#FFF" stopOpacity="1" />
                      </RadialGradient>
                    </Defs>
                    <Circle
                      cx="134.23"
                      cy="134.23"
                      r="134.23"
                      fill="url(#grad)"
                    />
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        // weird this doesn't work
                        zIndex: 100,
                      }}
                    >
                      <Image
                        source={require("../../assets/images/progress_poly.png")}
                        style={{
                          height: 135.665,
                          width: 135.665,
                        }}
                      />
                    </View>
                  </Svg>
                </View>

                /*<CircularText
                    width="300"
                    height="300"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    SELF BODY PEOPLE
                  </CircularText>*/
              )}
            />
            <View style={{ position: "absolute", bottom: 3 }}>
              <Feather name="sun" size={30} color="#000" />
            </View>
            <View style={{ position: "absolute", right: 5 }}>
              <Feather name="moon" size={30} color="#000" />
            </View>
            <View style={{ position: "absolute", left: 5 }}>
              <Feather name="sun" size={30} color="#000" />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 352,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                fontFamily: "Rubik_400Regular",
              }}
            >
              Today's Goals
            </Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                fontFamily: "Rubik_400Regular",
              }}
            >
              {`${completion} / 3 completed`}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              gap: 12,
              justifyContent: "space-evenly",
              alignItems: "flex-start",
            }}
          >
            {state.bodyGoal ? (
              <GoalCard
                goal={state.bodyGoal}
                onCompleted={(goal: Goal) => {
                  dispatch({ type: "COMPLETE_GOAL", goal: goal });
                }}
              />
            ) : (
              <NoGoalSet type={"Body"} />
            )}
            {state.mindGoal ? (
              <GoalCard
                goal={state.mindGoal}
                onCompleted={(goal: Goal) => {
                  dispatch({ type: "COMPLETE_GOAL", goal: goal });
                }}
              />
            ) : (
              <NoGoalSet type={"Mind"} />
            )}
            {state.peopleGoal ? (
              <GoalCard
                goal={state.peopleGoal}
                onCompleted={(goal: Goal) => {
                  dispatch({ type: "COMPLETE_GOAL", goal: goal });
                }}
              />
            ) : (
              <NoGoalSet type={"People"} />
            )}
          </View>
        </View>
      </SafeAreaView>
      <View
        style={{
          // TODO: not sure if this is the best way to do this
          // might need to think about this design more
          height: 83,
          width: "100%",
          backgroundColor: "#E0E0FF",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20.5,
        }}
      >
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Link
            href="/modal"
            style={{
              maxWidth: 150,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                paddingVertical: 20,
                textAlign: "center",
              }}
            >
              + Add Goals
            </Text>
          </Link>
        </View>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            borderRadius: 50,
            paddingVertical: 10,
            paddingLeft: 16,
            paddingRight: 24,
            gap: 8,
          }}
        >
          <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
            <Path
              d="M9.00001 20.7089H4.5C4.30109 20.7089 4.11033 20.6299 3.96967 20.4892C3.82902 20.3486 3.75 20.1578 3.75 19.9589V15.7683C3.74966 15.6709 3.76853 15.5744 3.80553 15.4843C3.84253 15.3942 3.89694 15.3123 3.96563 15.2433L15.2156 3.99328C15.2854 3.92241 15.3686 3.86614 15.4603 3.82773C15.5521 3.78931 15.6505 3.76953 15.75 3.76953C15.8495 3.76953 15.9479 3.78931 16.0397 3.82773C16.1314 3.86614 16.2146 3.92241 16.2844 3.99328L20.4656 8.17453C20.5365 8.24431 20.5928 8.3275 20.6312 8.41924C20.6696 8.51098 20.6894 8.60944 20.6894 8.7089C20.6894 8.80836 20.6696 8.90682 20.6312 8.99856C20.5928 9.09031 20.5365 9.17349 20.4656 9.24328L9.00001 20.7089Z"
              stroke="#5C5D72"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M20.25 20.709H9"
              stroke="#5C5D72"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M12.75 6.45898L18 11.709"
              stroke="#5C5D72"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Mood
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
