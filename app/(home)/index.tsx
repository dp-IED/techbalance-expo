import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import GoalCard from "@/components/GoalCard";
import React, { useEffect, useReducer, useState } from "react";
import { Goal } from "@/types/Goal";
import NoGoalSet from "@/components/NoGoalSet";
import AppBar from "@/components/AppBar";
import CircularProgress from "@/components/CircularProgress";
import TotalGoalsRow from "@/components/TotalGoalsRow";
import SafeViewAndroid from "@/components/SafeViewAndroid";
import ShadowScreenGradient from "@/components/ShadowScreenGradient";
import HomeMoodBar from "@/components/HomeMoodBar";

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
        title: "Coffee with a friend",
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

  const [data, setData] = useState<Goal[]>([]);
  const [completion, setCompletion] = useState(0);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [isLoading, setLoading] = useState(true);

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
    bodyGoal: props.goals.find((goal) => goal.type === "Body"),
    selfGoal: props.goals.find((goal) => goal.type === "Self"),
    peopleGoal: props.goals.find((goal) => goal.type === "People"),
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
          case "Self":
            if (state.selfGoal) {
              return {
                ...state,
                selfGoal: {
                  ...state.selfGoal,
                  completed: !state.selfGoal.completed,
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
        }
        return state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // to split
  const getGoals = async () => {
    const url = "https://65e20096a8583365b317c6e1.mockapi.io/goals";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      // await new Promise((resolve) => setTimeout(resolve, 2000)); // sleep for 2s
      const listOfGoals = (await response.json()) as [Goal];
      //console.log(listOfGoals[0].icon);
      setData(listOfGoals);
    } catch (error) {
      // todo: handle error
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGoals();
  }, []);

  useEffect(() => {
    setCompletion(
      (state.bodyGoal?.completed ? 1 : 0) +
        (state.selfGoal?.completed ? 1 : 0) +
        (state.peopleGoal?.completed ? 1 : 0)
    );
  }, [state]);

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <ShadowScreenGradient />
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        {/* <ScrollView> */}
        <AppBar />
        <View
          style={{
            alignItems: "center",
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
            }}
          >
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <>
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
              </>
            )}
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Rubik_500Medium",
            }}
          >
            Today's Mood
          </Text>
          <HomeMoodBar />
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </View>
  );
}
