import { GoalType } from "./GoalType";

export type Goal = {
  id: string;
  icon: string;
  title: string;
  description?: string;
  repeat?: string;
  reminderTime?: Date;
  notify?: boolean;
  type: GoalType;
  completed: boolean;
  time: string;
};
