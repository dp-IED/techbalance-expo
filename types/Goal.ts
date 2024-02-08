import { GoalType } from "./GoalType";

export type Goal = {
  id: string;
  icon: string;
  title: string;
  description?: string;
  type: GoalType;
  completed: boolean;
};
