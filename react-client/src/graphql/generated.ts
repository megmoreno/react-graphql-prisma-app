import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type DailySchedule = {
  __typename?: 'DailySchedule';
  dailyScheduleItems: Array<DailyScheduleItem>;
  date: Scalars['Date'];
  id: Scalars['ID'];
};

export type DailyScheduleItem = {
  __typename?: 'DailyScheduleItem';
  id: Scalars['ID'];
  planDescription: Scalars['String'];
  time: Scalars['Date'];
};

export type LearningFocus = {
  __typename?: 'LearningFocus';
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  students: Array<Student>;
  weeklyPlan?: Maybe<WeeklyPlan>;
};

export type Student = {
  __typename?: 'Student';
  id: Scalars['ID'];
  learningFocuses: Array<LearningFocus>;
  name: Scalars['String'];
};

export type WeeklyPlan = {
  __typename?: 'WeeklyPlan';
  activities: Array<Scalars['String']>;
  books: Array<Book>;
  dailySchedules: Array<DailySchedule>;
  endDate: Scalars['Date'];
  id: Scalars['ID'];
  resourcesNeeded: Array<Scalars['String']>;
  startDate: Scalars['Date'];
};

export type GetStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { __typename?: 'Query', students: Array<{ __typename?: 'Student', name: string, learningFocuses: Array<{ __typename?: 'LearningFocus', name: string, description: string }> }> };

export type GetWeeklyPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWeeklyPlansQuery = { __typename?: 'Query', weeklyPlan?: { __typename?: 'WeeklyPlan', activities: Array<string>, endDate: any, id: string, resourcesNeeded: Array<string>, startDate: any, books: Array<{ __typename?: 'Book', author: string, title: string, id: string }>, dailySchedules: Array<{ __typename?: 'DailySchedule', date: any, id: string, dailyScheduleItems: Array<{ __typename?: 'DailyScheduleItem', id: string, planDescription: string, time: any }> }> } | null };


export const GetStudentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"students"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"learningFocuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetStudentsQuery, GetStudentsQueryVariables>;
export const GetWeeklyPlansDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWeeklyPlans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weeklyPlan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activities"}},{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dailySchedules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyScheduleItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"planDescription"}},{"kind":"Field","name":{"kind":"Name","value":"time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"resourcesNeeded"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}}]}}]}}]} as unknown as DocumentNode<GetWeeklyPlansQuery, GetWeeklyPlansQueryVariables>;