import type { GetStudentsQuery } from './graphql/generated'
import type { GetWeeklyPlansQuery } from './graphql/generated'

export type LearningFocus =
  GetStudentsQuery['students'][0]['learningFocuses'][0]
export type Student = GetStudentsQuery['students'][0]

export type Book = GetWeeklyPlansQuery['weeklyPlan'][0]['books'][0]
export type Activity = GetWeeklyPlansQuery['weeklyPlan'][0]['activities'][0]
export type ResourcesNeeded =
  GetWeeklyPlansQuery['weeklyPlan'][0]['resourcesNeeded'][0]
export type WeeklyPlan = GetWeeklyPlansQuery['weeklyPlan'][0]
