import { Grid, Paper } from '@mui/material'
import type { FC } from 'react'

import { useCommentsStore } from '../../stores/comments'
import styles from './CommentsList.module.scss'

export const CommentsList: FC = () => {
  const comments = useCommentsStore((state) => state.comments)

  return (
    <ul className={styles.comments__list}>
      {comments.length > 0 &&
        comments.map((comment, i) => (
          // eslint-disable-next-line @eslint-react/no-array-index-key
          <Paper key={i} className={styles.comments__item}>
            <Grid container wrap="nowrap" spacing={4}>
              <Grid>
                <div className={styles['comments__item-icon']}>
                  {comment.author.slice(0, 2).toUpperCase()}
                </div>
              </Grid>
              <Grid justifyContent="left">
                <h4>{comment.author}</h4>
                <p>{comment.comment}</p>
              </Grid>
            </Grid>
          </Paper>
        ))}
    </ul>
  )
}
