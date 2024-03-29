import { LearningFocus } from '../types'
import Branch from './Branch'

type Props = {
  learningFocus: LearningFocus
  index: number
}

function LearningFocusDisplay({ learningFocus, index }: Props) {
  return (
    <div className="group mb-2 shrink-0 rounded-lg flex items-center drop-shadow-md bg-white w-48 h-20 relative">
      <Branch trunk={index === 0} />
      <p className="text-sm text-zinc-700 font-bold px-4">
        {learningFocus.description}
      </p>
    </div>
  )
}

export default LearningFocusDisplay
