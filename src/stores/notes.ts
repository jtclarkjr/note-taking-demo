import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { v4 as uuidv4 } from 'uuid'

// Define the structure of a single note
interface Note {
  id: string
  title: string
  content: string
  date: string
}

// Atom to hold the list of notes with persistence
export const notesAtom = atomWithStorage<Note[]>('notes', [])

// Atom to add a new note
export const addNoteAtom = atom(
  null,
  (get, set, { title, content }: { title: string; content: string }) => {
    const newNote: Note = {
      id: uuidv4(),
      title,
      content,
      date: new Date().toLocaleString()
    }
    set(notesAtom, [...get(notesAtom), newNote])
  }
)

// Atom to delete a note by ID
export const deleteNoteAtom = atom(null, (get, set, id: string) => {
  set(
    notesAtom,
    get(notesAtom).filter((note) => note.id !== id)
  )
})
