'use client'
import './SideBar.scss'

import { Button } from '@mui/material'
import { type FC } from 'react'

import { useCommentsStore } from '../stores/comments'
import { AddCommentModal } from './AddCommentModal'
import { CommentsList } from './comments/CommentsList'

export const SideBar: FC = () => {
  const open = useCommentsStore((state) => state.openAddCommentModal)

  return (
    <div className="sidebar">
      <div className="sidebar__comments">
        <div className="sidebar__title">Comments:</div>
        <CommentsList />
      </div>
      <Button onClick={open} variant="contained">
        Review
      </Button>
      <AddCommentModal />
    </div>
  )
}
