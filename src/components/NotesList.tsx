import React from 'react'
import useNoteStore from '../stores/notesStore'

const NoteList: React.FC = () => {
  const notes = useNoteStore((state) => state.notes)
  const deleteNote = useNoteStore((state) => state.deleteNote)

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div className="note-list__item" key={note.id}>
          <h2 className="note-list__title">{note.title}</h2>
          <p className="note-list__content">{note.content}</p>
          <p className="note-list__date">{note.date}</p>
          <button className="note-list__button" onClick={() => deleteNote(note.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default NoteList
