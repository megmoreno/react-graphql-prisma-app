export type LearningFocus = {
    name: string
    description: string
}

export type Student = {
    name: string
    learningFocuses: LearningFocus[]
}