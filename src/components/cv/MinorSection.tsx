import './MinorSection.scss'

import type { FC } from 'react'

import type { MinorSection as MinorSectionType } from '../../types'
import { CVSection } from './CVSection'

interface Props {
  title: string
  content: MinorSectionType['data']
}

export const MinorSection: FC<Props> = ({ title, content }) => {
  return (
    <CVSection title={title}>
      {content.map((item) => (
        <div key={item.title} className="simple-block__section">
          <div className="simple-block__section-key">{item.title}</div>
          <div className="simple-block__section-value">{item.text}</div>
        </div>
      ))}
    </CVSection>
  )
}
