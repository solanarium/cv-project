import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CommentsStore {
  comments: Array<{ author: string; comment: string }>
  addComment: () => void
  isOpen: boolean
  openAddCommentModal: () => void
  closeAddCommentModal: () => void
  form: {
    name: string
    text: string
  }
  updateForm: (key: 'name' | 'text', value: string) => void
}

export const useCommentsStore = create<CommentsStore>()(
  persist(
    (set) => ({
      comments: [],
      form: {
        name: '',
        text: '',
      },
      isOpen: false,
      closeAddCommentModal: () => {
        set({
          isOpen: false,
          form: {
            name: '',
            text: '',
          },
        })
      },
      openAddCommentModal: () => {
        set({
          isOpen: true,
        })
      },
      updateForm: (key, value) => {
        set((state) => ({
          form: {
            ...state.form,
            [key]: value,
          },
        }))
      },
      addComment: () => {
        set((state) => ({
          comments: [
            ...state.comments,
            {
              author: state.form.name,
              comment: state.form.text,
            },
          ],
          form: { name: '', text: '' },
          isOpen: false,
        }))
      },
    }),
    {
      name: 'comments',
    },
  ),
)
