'use client'

import { useState } from 'react'
import { useAtom } from 'jotai'
import { addNoteAtom } from '@/stores/notes'

const NoteForm: React.FC = () => {
  const [, addNote] = useAtom(addNoteAtom)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addNote({ title, content })
    setTitle('')
    setContent('')
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        className="note-form__input"
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="note-form__textarea"
        name="content"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button className="note-form__button" type="submit">
        Add Note
      </button>
    </form>
  )
}

export default NoteForm
