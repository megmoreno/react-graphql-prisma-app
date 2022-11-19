import { Student } from './types'
import StudentDisplay from './components/StudentDisplay'

function App() {
  const students: Student[] = [
    {
      name: 'Sofia Moreno',
      learningFocuses: [
        {
          name: 'Tumbling',
          description: 'Working on improving her cartwheel',
        },
        {
          name: 'Geography',
          description:
            'Getting a basic understanding of the earth, maps, and landscapes',
        },
      ],
    },
  ]

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {students.map((student, i) => (
        <StudentDisplay student={student} key={i} />
      ))}
    </div>
  )
}

export default App
