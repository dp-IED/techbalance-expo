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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const getGoals = async () => {
    setLoading(true);
    try {
      const goals = await AsyncStorage.multiGet([
        "goal-Body",
        "goal-Self",
        "goal-People",
      ]);

      goals.map((goal) => {
        if (goal[1]) {
          console.log(JSON.parse(goal[1]));
          dispatch({ type: "ADD_GOAL", goal: JSON.parse(goal[1]) });
          return JSON.parse(goal[1]);
        }
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

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
    bodyGoal: undefined,
    selfGoal: undefined,
    peopleGoal: undefined,
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
                  <NoGoalSet
                    type={"Body"}
                    iconUrl="https://i.ibb.co/GRkvtgd/Cube.png"
                    windowHeight={windowHeight}
                    isLast={false}
                  />
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
                  <NoGoalSet
                    type={"Self"}
                    iconUrl="https://i.ibb.co/pKxKH9p/Cone.png"
                    windowHeight={windowHeight}
                    isLast={false}
                  />
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
                  <NoGoalSet
                    type={"People"}
                    iconUrl="https://i.ibb.co/M7cs1yk/Frame-2608646.png"
                    windowHeight={windowHeight}
                    isLast={true}
                  />
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
