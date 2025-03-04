import { useState, type FormEvent } from 'react'
import useNoteStore from '@/stores/notes'

const NoteForm: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const addNote = useNoteStore((state) => state.addNote)

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    if (title && content) {
      addNote(title, content)
      setTitle('')
      setContent('')
    }
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        className="note-form__input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        className="note-form__textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button className="note-form__button" type="submit">
        Add Note
      </button>
    </form>
  )
}

export default NoteForm
