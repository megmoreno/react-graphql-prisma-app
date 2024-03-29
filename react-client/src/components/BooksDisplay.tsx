import { Book } from '../graphql/generated'

type Props = {
  books: Book[]
}

function BooksDisplay({ books }: Props) {
  return (
    <div className="m-2 shrink-0 rounded-lg items-center drop-shadow-md bg-white">
      <h1 className="text-med text-zinc-700 font-bold px-4">
        Books we're reading
      </h1>
      {books.map((book, i) => (
        <li key={i}>{book.title}</li>
      ))}
    </div>
  )
}

export default BooksDisplay
