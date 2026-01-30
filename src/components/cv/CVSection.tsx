import type { FC, ReactNode } from 'react'

import styles from './CVSection.module.scss'

interface Props {
  title: string
  children: ReactNode
}

export const CVSection: FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h3 className={styles.block__title}>{title}</h3>
      {children}
    </div>
  )
}
