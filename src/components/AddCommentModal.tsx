import { Button, Modal, TextField } from '@mui/material'
import { type FC } from 'react'

import { useCommentsStore } from '../stores/comments'
import styles from './AddCommentModal.module.scss'

export const AddCommentModal: FC = () => {
  const isOpen = useCommentsStore((state) => state.isOpen)
  const close = useCommentsStore((state) => state.closeAddCommentModal)
  const { name, text } = useCommentsStore((state) => state.form)
  const updateForm = useCommentsStore((state) => state.updateForm)
  const addComment = useCommentsStore((state) => state.addComment)

  return (
    <Modal open={isOpen}>
      <div className={styles.modal}>
        <p className={styles['modal-title']}>New comment</p>
        <div className={styles['modal-inputs']}>
          <TextField
            name="name"
            type="text"
            value={name}
            onChange={(event) => updateForm('name', event.target.value)}
            placeholder={'John Smith'}
          />
          <TextField
            multiline
            maxRows={4}
            rows={2}
            name="comment"
            value={text}
            onChange={(event) => updateForm('text', event.target.value)}
            placeholder="Comment..."
          />
        </div>
        <div className={styles['modal-buttons']}>
          <Button onClick={close} variant="outlined">
            CANCEL
          </Button>
          <Button
            disabled={!name || !text}
            variant="contained"
            onClick={addComment}
          >
            SAVE
          </Button>
        </div>
      </div>
    </Modal>
  )
}
