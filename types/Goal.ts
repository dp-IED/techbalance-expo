import { GoalType } from "./GoalType";

export type Goal = {
  icon: string;
  title: string;
  description?: string;
  repeat: string;
  reminderTime?: Date;
  notify?: boolean;
  type: GoalType;
  completed: boolean;
};
