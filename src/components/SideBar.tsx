'use client'
import { Button } from '@mui/material'
import { type FC } from 'react'

import { useCommentsStore } from '../stores/comments'
import { AddCommentModal } from './AddCommentModal'
import { CommentsList } from './comments/CommentsList'
import styles from './SideBar.module.scss'

export const SideBar: FC = () => {
  const open = useCommentsStore((state) => state.openAddCommentModal)

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__comments}>
        <div className={styles.sidebar__title}>Comments:</div>
        <CommentsList />
      </div>
      <Button onClick={open} variant="contained">
        Review
      </Button>
      <AddCommentModal />
    </div>
  )
}
