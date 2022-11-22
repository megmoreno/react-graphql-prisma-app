import StudentDisplay from './components/StudentDisplay'
import { useQuery } from 'urql'
import { GetStudentsDocument } from './graphql/generated'

function App() {
  const [results] = useQuery({
    query: GetStudentsDocument,
  })

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {results.data?.students.map((student, i) => (
        <StudentDisplay student={student} key={i} />
      ))}
    </div>
  )
}

export default App
