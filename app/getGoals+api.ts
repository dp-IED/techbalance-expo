import { ExpoRequest, ExpoResponse } from "expo-router/server";
import { Goal } from "@/types/Goal";

export function GET(request: ExpoRequest) {
  const goals: Goal[] = [
    {
      id: "1",
      icon: "🏋️‍♂️",
      title: "Lift weights",
      type: "Body",
      completed: false,
    },
    {
      id: "2",
      icon: "🍎",
      title: "Eat healthy",
      type: "Mind",
      completed: false,
    },
  ];
  return ExpoResponse.json({ goals: goals });
}
