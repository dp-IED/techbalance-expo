/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateGoal = /* GraphQL */ `subscription OnCreateGoal($filter: ModelSubscriptionGoalFilterInput) {
  onCreateGoal(filter: $filter) {
    id
    icon
    title
    description
    repeat
    reminderTime
    notify
    type
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGoalSubscriptionVariables,
  APITypes.OnCreateGoalSubscription
>;
export const onUpdateGoal = /* GraphQL */ `subscription OnUpdateGoal($filter: ModelSubscriptionGoalFilterInput) {
  onUpdateGoal(filter: $filter) {
    id
    icon
    title
    description
    repeat
    reminderTime
    notify
    type
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGoalSubscriptionVariables,
  APITypes.OnUpdateGoalSubscription
>;
export const onDeleteGoal = /* GraphQL */ `subscription OnDeleteGoal($filter: ModelSubscriptionGoalFilterInput) {
  onDeleteGoal(filter: $filter) {
    id
    icon
    title
    description
    repeat
    reminderTime
    notify
    type
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGoalSubscriptionVariables,
  APITypes.OnDeleteGoalSubscription
>;
