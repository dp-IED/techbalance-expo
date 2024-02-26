/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGoal = /* GraphQL */ `query GetGoal($id: ID!) {
  getGoal(id: $id) {
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
` as GeneratedQuery<APITypes.GetGoalQueryVariables, APITypes.GetGoalQuery>;
export const listGoals = /* GraphQL */ `query ListGoals(
  $filter: ModelGoalFilterInput
  $limit: Int
  $nextToken: String
) {
  listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGoalsQueryVariables, APITypes.ListGoalsQuery>;
