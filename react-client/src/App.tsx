import StudentDisplay from './components/StudentDisplay'
import { useQuery } from 'urql'
import { GetStudentsDocument } from './graphql/generated'
import NavBar from './components/NavBar'

function App() {
  const [results] = useQuery({
    query: GetStudentsDocument,
  })

  return (
    <div>
      <NavBar />
      <div className="bg-white flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
        {results.data?.students.map((student, i) => (
          <StudentDisplay student={student} key={i} />
        ))}
      </div>
    </div>
  )
}

export default App
