import { WeeklyPlan } from '../types'
import BooksDisplay from './BooksDisplay'

type Props = {
  weeklyPlan?: WeeklyPlan
}

function WeekOverview({ weeklyPlan }: Props) {
  return (
    <div>
      <h1 className="text-rose-500 ml-4 font-semibold text-xl tracking-tight">
        This week at a glance
      </h1>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
        <div>
          <BooksDisplay books={weeklyPlan?.books} />
        </div>
      </div>
    </div>
  )
}

export default WeekOverview
