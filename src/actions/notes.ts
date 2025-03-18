'use server'

import useNoteStore from '@/stores/notes'

export function addNoteAction(formData: FormData) {
  const title = formData.get('title') as string | null
  const content = formData.get('content') as string | null
  const addNote = useNoteStore.getState().addNote
  addNote(title || '', content || '')
}
