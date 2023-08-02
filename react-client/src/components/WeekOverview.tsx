import { WeeklyPlan } from '../graphql/generated'
import BooksDisplay from './BooksDisplay'

type Props = {
  weeklyPlan?: WeeklyPlan
}

function WeekOverview({ weeklyPlan }: Props) {
  const books = weeklyPlan?.books

  return (
    <div>
      <h1 className="text-rose-500 ml-4 font-semibold text-xl tracking-tight">
        This week at a glance
      </h1>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
        {books && <BooksDisplay books={books} />}
      </div>
    </div>
  )
}

export default WeekOverview
