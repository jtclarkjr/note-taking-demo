interface Note {
  id: string
  title: string
  content: string
  date: string
}

interface NoteState {
  notes: Note[]
  addNote: (title: string, content: string) => void
  deleteNote: (id: string) => void
}

const useNoteStore = create<NoteState>()(
  persist(
    (set) => ({
      notes: [],
      addNote: (title, content) =>
        set((state) => ({
          notes: [...state.notes, { id: v4(), title, content, date: new Date().toLocaleString() }]
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id)
        }))
    }),
    {
      name: 'note-storage'
    }
  )
)

export default useNoteStore
