import { addNoteAction } from '@/actions/notes'

const NoteForm: React.FC = () => {
  return (
    <form className="note-form" action={addNoteAction}>
      <input className="note-form__input" type="text" name="title" placeholder="Title" required />
      <textarea className="note-form__textarea" name="content" placeholder="Content" required />
      <button className="note-form__button" type="submit">
        Add Note
      </button>
    </form>
  )
}

export default NoteForm
