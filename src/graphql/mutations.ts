/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createGoal = /* GraphQL */ `mutation CreateGoal(
  $input: CreateGoalInput!
  $condition: ModelGoalConditionInput
) {
  createGoal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGoalMutationVariables,
  APITypes.CreateGoalMutation
>;
export const updateGoal = /* GraphQL */ `mutation UpdateGoal(
  $input: UpdateGoalInput!
  $condition: ModelGoalConditionInput
) {
  updateGoal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGoalMutationVariables,
  APITypes.UpdateGoalMutation
>;
export const deleteGoal = /* GraphQL */ `mutation DeleteGoal(
  $input: DeleteGoalInput!
  $condition: ModelGoalConditionInput
) {
  deleteGoal(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGoalMutationVariables,
  APITypes.DeleteGoalMutation
>;
