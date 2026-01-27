import './ExperienceBlock.scss'

import type { FC } from 'react'

import type { ExperienceType } from '../shared/types'
import { BlockItem } from './ui/BlockItem'
import { Separator } from './ui/Separator'

interface Props {
  experience: ExperienceType
}

export const ExperienceBlock: FC<Props> = ({ experience }) => {
  return (
    <div className="experience">
      <h3 className="experience__title">RELEVANT EXPERIENCE</h3>
      <Separator />
      {experience.map((item) => (
        <BlockItem
          key={item.id}
          title={item.title}
          description={item.position}
          date={item.date}
          location={item.location}
          content={item.data}
        />
      ))}
    </div>
  )
}
