/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGoalInput = {
  id?: string | null,
  icon: string,
  title: string,
  description?: string | null,
  repeat: string,
  reminderTime?: string | null,
  notify?: boolean | null,
  type: string,
  completed: boolean,
};

export type ModelGoalConditionInput = {
  icon?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  repeat?: ModelStringInput | null,
  reminderTime?: ModelStringInput | null,
  notify?: ModelBooleanInput | null,
  type?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelGoalConditionInput | null > | null,
  or?: Array< ModelGoalConditionInput | null > | null,
  not?: ModelGoalConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Goal = {
  __typename: "Goal",
  id: string,
  icon: string,
  title: string,
  description?: string | null,
  repeat: string,
  reminderTime?: string | null,
  notify?: boolean | null,
  type: string,
  completed: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGoalInput = {
  id: string,
  icon?: string | null,
  title?: string | null,
  description?: string | null,
  repeat?: string | null,
  reminderTime?: string | null,
  notify?: boolean | null,
  type?: string | null,
  completed?: boolean | null,
};

export type DeleteGoalInput = {
  id: string,
};

export type ModelGoalFilterInput = {
  id?: ModelIDInput | null,
  icon?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  repeat?: ModelStringInput | null,
  reminderTime?: ModelStringInput | null,
  notify?: ModelBooleanInput | null,
  type?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelGoalFilterInput | null > | null,
  or?: Array< ModelGoalFilterInput | null > | null,
  not?: ModelGoalFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelGoalConnection = {
  __typename: "ModelGoalConnection",
  items:  Array<Goal | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionGoalFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  icon?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  repeat?: ModelSubscriptionStringInput | null,
  reminderTime?: ModelSubscriptionStringInput | null,
  notify?: ModelSubscriptionBooleanInput | null,
  type?: ModelSubscriptionStringInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionGoalFilterInput | null > | null,
  or?: Array< ModelSubscriptionGoalFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateGoalMutationVariables = {
  input: CreateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type CreateGoalMutation = {
  createGoal?:  {
    __typename: "Goal",
    id: string,
    icon: string,
    title: string,
    description?: string | null,
    repeat: string,
    reminderTime?: string | null,
    notify?: boolean | null,
    type: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGoalMutationVariables = {
  input: UpdateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type UpdateGoalMutation = {
  updateGoal?:  {
    __typename: "Goal",
    id: string,
    icon: string,
    title: string,
    description?: string | null,
    repeat: string,
    reminderTime?: string | null,
    notify?: boolean | null,
    type: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGoalMutationVariables = {
  input: DeleteGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type DeleteGoalMutation = {
  deleteGoal?:  {
    __typename: "Goal",
    id: string,
    icon: string,
    title: string,
    description?: string | null,
    repeat: string,
    reminderTime?: string | null,
    notify?: boolean | null,
    type: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGoalQueryVariables = {
  id: string,
};

export type GetGoalQuery = {
  getGoal?:  {
    __typename: "Goal",
    id: string,
    icon: string,
    title: string,
    description?: string | null,
    repeat: string,
    reminderTime?: string | null,
    notify?: boolean | null,
    type: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGoalsQueryVariables = {
  filter?: ModelGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGoalsQuery = {
  listGoals?:  {
    __typename: "ModelGoalConnection",
    items:  Array< {
      __typename: "Goal",
      id: string,
      icon: string,
      title: string,
      description?: string | null,
      repeat: string,
      reminderTime?: string | null,
      notify?: boolean | null,
      type: string,
      completed: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGoalSubscriptionVariables = {
  filter?: ModelSubscriptionGoalFilterInput | null,
};

export type OnCreateGoalSubscription = {
  onCreateGoal?:  {
    __typename: "Goal",
    id: string,
    icon: string,
    title: string,
    description?: string | null,
    repeat: string,
    reminderTime?: string | null,
    notify?: boolean | null,
    type: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGoalSubscriptionVariables = {
  filter?: ModelSubscriptionGoalFilterInput | null,
};

export type OnUpdateGoalSubscription = {
  onUpdateGoal?:  {
    __typename: "Goal",
    id: string,
    icon: string,
    title: string,
    description?: string | null,
    repeat: string,
    reminderTime?: string | null,
    notify?: boolean | null,
    type: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGoalSubscriptionVariables = {
  filter?: ModelSubscriptionGoalFilterInput | null,
};

export type OnDeleteGoalSubscription = {
  onDeleteGoal?:  {
    __typename: "Goal",
    id: string,
    icon: string,
    title: string,
    description?: string | null,
    repeat: string,
    reminderTime?: string | null,
    notify?: boolean | null,
    type: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
