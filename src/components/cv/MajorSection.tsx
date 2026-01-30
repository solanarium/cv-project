import type { FC } from 'react'

import type { MajorSection as MajorSectionType } from '../../types'
import { CVItem } from './CVItem'
import { CVSection } from './CVSection'

interface Props {
  title: string
  content: MajorSectionType['data']
}

export const MajorSection: FC<Props> = ({ title, content }) => {
  return (
    <CVSection title={title}>
      {content.map((item) => (
        <CVItem key={item.id} content={item} />
      ))}
    </CVSection>
  )
}
