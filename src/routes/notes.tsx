import NoteForm from '@/components/notes/NoteForm'
import NotesList from '@/components/notes/NotesList'
import '@/styles/Notes.css'

export const Route = createFileRoute('/notes')({
  component: NotesComponent
})

function NotesComponent() {
  return (
    <div className="notes-component">
      <h1 className="notes-component__header">Note Taking App</h1>
      <NoteForm />
      <NotesList />
    </div>
  )
}

export default NotesComponent
