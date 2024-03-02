import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from "react-native";
import GoalCard from "@/components/GoalCard";
import React, { useEffect, useReducer, useState } from "react";
import { Goal } from "@/types/Goal";
import NoGoalSet from "@/components/NoGoalSet";
import AppBar from "@/components/AppBar";
import CircularProgress from "@/components/CircularProgress";
import TotalGoalsRow from "@/components/TotalGoalsRow";
import SafeViewAndroid from "@/components/SafeViewAndroid";

export default function Home() {
  const props: {
    goals: Goal[];
  } = {
    goals: [
      {
        id: "1",
        icon: "https://i.ibb.co/pKxKH9p/Cone.png",
        title: "Digital Detox",
        description: "This is a test goal",
        type: "Self",
        completed: false,
        time: "13:00 - 18:00",
      },
      {
        id: "2",
        icon: "https://i.ibb.co/M7cs1yk/Frame-2608646.png",
        title: "Grab a coffee",
        description: "This is a test goal 2",
        type: "People",
        completed: false,
        time: "12:00",
      },
      {
        id: "3",
        icon: "https://i.ibb.co/GRkvtgd/Cube.png",
        title: "Go for a walk",
        description: "This is a test goal 2",
        type: "Body",
        completed: false,
        time: "10:00",
      },
    ],
  };

  type State = {
    selfGoal: Goal | undefined;
    bodyGoal: Goal | undefined;
    peopleGoal: Goal | undefined;
  };

  type Action =
    | { type: "ADD_GOAL"; goal: Goal }
    | { type: "UPDATE_GOAL"; goal: Goal }
    | { type: "COMPLETE_GOAL"; goal: Goal };

  const initialState: State = {
    bodyGoal: goals ? goals.find((goal) => goal.type === "Body") : undefined,
    mindGoal: goals ? goals.find((goal) => goal.type === "Mind") : undefined,
    peopleGoal: goals
      ? goals.find((goal) => goal.type === "People")
      : undefined,
  };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "ADD_GOAL":
        switch (action.goal.type) {
          case "Self":
            return {
              ...state,
              selfGoal: action.goal,
            };
          case "People":
            return {
              ...state,
              peopleGoal: action.goal,
            };
          case "Body":
            return {
              ...state,
              bodyGoal: action.goal,
            };
          default:
            return state;
        }
      case "UPDATE_GOAL":
        switch (action.goal.type) {
          case "Self":
            return {
              ...state,
              selfGoal: action.goal,
            };
          case "People":
            return {
              ...state,
              peopleGoal: action.goal,
            };
          case "Body":
            return {
              ...state,
              bodyGoal: action.goal,
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
              AsyncStorage.removeItem("body");
              return {
                ...state,
                selfGoal: {
                  ...state.selfGoal,
                  completed: !state.selfGoal.completed,
                },
              };
            }
            break;
          case "Mind":
            if (state.mindGoal) {
              AsyncStorage.removeItem("mind");
              return {
                ...state,
                peopleGoal: {
                  ...state.peopleGoal,
                  completed: !state.peopleGoal.completed,
                },
              };
            }
            break;
          case "People":
            if (state.peopleGoal) {
              AsyncStorage.removeItem("people");
              return {
                ...state,
                bodyGoal: {
                  ...state.bodyGoal,
                  completed: !state.bodyGoal.completed,
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
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    setCompletion(
      (state.bodyGoal?.completed ? 1 : 0) +
        (state.selfGoal?.completed ? 1 : 0) +
        (state.peopleGoal?.completed ? 1 : 0)
    );
  }, [state]);

  return (

    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <AppBar />
      <View
        style={{
          alignItems: "center",
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
        <CircularProgress
          completion={completion}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
        />
      </View>

      <View
        style={{
          // padding only container
          // flex: 1,
          paddingHorizontal: 20,
          gap: windowHeight / 56,
          // alignItems: "center",
        }}
      >
        <TotalGoalsRow completion={completion} />

        <View
          style={{
            width: "100%",
            //   flex: 1,
          }}
        >
          {state.bodyGoal ? (
            <GoalCard
              goal={state.bodyGoal}
              windowHeight={windowHeight}
              isLast={false}
              onCompleted={(goal: Goal) => {
                dispatch({ type: "COMPLETE_GOAL", goal: goal });
              }}
            />
          ) : (
            <NoGoalSet type={"Body"} />
          )}
          {state.selfGoal ? (
            <GoalCard
              goal={state.selfGoal}
              windowHeight={windowHeight}
              isLast={false}
              onCompleted={(goal: Goal) => {
                dispatch({ type: "COMPLETE_GOAL", goal: goal });
              }}
            />
          ) : (
            <NoGoalSet type={"Self"} />
          )}
          {state.peopleGoal ? (
            <GoalCard
              goal={state.peopleGoal}
              windowHeight={windowHeight}
              isLast={true}
              onCompleted={(goal: Goal) => {
                dispatch({ type: "COMPLETE_GOAL", goal: goal });
              }}
            />
          ) : (
            <NoGoalSet type={"People"} />
          )}
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Rubik_500Medium",
          }}
        >
          Featured
        </Text>
        {/* <FeaturedCard /> */}
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
          <ButtonNormal title={"Yesterday"} onPress={() => {}} active={false} />
          <ButtonNormal title={"Today"} onPress={() => {}} active={true} />
          <ButtonNormal title={"Tomorrow"} onPress={() => {}} active={false} />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <AnimatedCircularProgress
            size={Dimensions.get("window").width * 0.7}
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
                  <View style={{}}>
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
            gap: 15,
            alignItems: "flex-start",
            justifyContent: "center",
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
        <TouchableOpacity
          style={{
            backgroundColor: "#A59AC8",
            borderStartStartRadius: 30,
            width: 80,
            height: 75,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
          onPress={() => {
            router.push("/modal");
          }}
        >
          <Feather name="plus" size={30} color="#1D1B20" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
