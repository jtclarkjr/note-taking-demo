// Define the structure of a single note
interface Note {
  id: string
  title: string
  content: string
  date: string
}

// Define the state and actions for the note store
interface NoteState {
  notes: Note[]
  addNote: (title: string, content: string) => void
  deleteNote: (id: string) => void
}

// Create the note store using Zustand with persistence
const useNoteStore = create<NoteState>()(
  persist(
    (set) => ({
      // Initial state
      notes: [],

      // Action to add a new note
      addNote: (title, content) =>
        set((state) => ({
          notes: [...state.notes, { id: v4(), title, content, date: new Date().toLocaleString() }]
        })),

      // Action to delete a note by ID
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id)
        }))
    }),
    {
      // Configuration for persistence
      name: 'note-storage'
    }
  )
)

export default useNoteStore
