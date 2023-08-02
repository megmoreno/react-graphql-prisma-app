import type { GetStudentsQuery } from './graphql/generated'
import type { GetWeeklyPlansQuery } from './graphql/generated'

export type LearningFocus =
  GetStudentsQuery['students'][0]['learningFocuses'][0]
export type Student = GetStudentsQuery['students'][0]
