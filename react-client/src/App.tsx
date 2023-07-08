import StudentDisplay from './components/StudentDisplay'
import { useQuery } from 'urql'
import {
  GetStudentsDocument,
  GetWeeklyPlansDocument,
} from './graphql/generated'
import NavBar from './components/NavBar'
import WeekOverview from './components/WeekOverview'

function App() {
  const [studentsQueryResults] = useQuery({
    query: GetStudentsDocument,
  })
  const [weeklyPlansQueryResults] = useQuery({
    query: GetWeeklyPlansDocument,
  })

  return (
    <div>
      <NavBar />
      <div className="columns-2 p-10">
        <div className="w-full">
          <WeekOverview
            weeklyPlan={weeklyPlansQueryResults.data?.weeklyPlan[0]}
          />
        </div>
        <div className="gap-y-12 overflow-scroll">
          <h1 className="text-rose-500 ml-4 font-semibold text-xl tracking-tight">
            Learning Focuses
          </h1>
          {studentsQueryResults.data?.students.map((student, i) => (
            <StudentDisplay student={student} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
