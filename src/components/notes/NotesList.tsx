'use client'

import { useAtom } from 'jotai'
import { notesAtom, deleteNoteAtom } from '@/stores/notes'

const NoteList: React.FC = () => {
  const [notes] = useAtom(notesAtom)
  const [, deleteNote] = useAtom(deleteNoteAtom)

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div className="note-list__item" key={note.id}>
          <h2 className="note-list__title">{note.title}</h2>
          <p className="note-list__content">{note.content}</p>
          <p className="note-list__date">{note.date}</p>
          <button
            className="note-list__button"
            onClick={() => {
              deleteNote(note.id)
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default NoteList
