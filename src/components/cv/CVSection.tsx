import './CVSection.scss'

import type { FC, ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

export const CVSection: FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h3 className="block__title">{title}</h3>
      {children}
    </div>
  )
}
