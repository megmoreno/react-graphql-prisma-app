import { Student } from '../types'
import LearningFocusDisplay from './LearningFocusDisplay'

type Props = {
  student: Student
}

function StudentDisplay({ student }: Props) {
  return (
    <div className="flex gap-x-24 justify-center">
      <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
        <p className="text-xl text-gray-200 font-bold">{student.name}</p>
      </div>
      <div>
        {student.learningFocuses.map((learningFocus, i) => (
          <LearningFocusDisplay
            key={i}
            index={i}
            learningFocus={learningFocus}
          />
        ))}
      </div>
    </div>
  )
}

export default StudentDisplay
