import type { GetStudentsQuery } from './graphql/generated'

export type LearningFocus =
  GetStudentsQuery['students'][0]['learningFocuses'][0]
export type Student = GetStudentsQuery['students'][0]
