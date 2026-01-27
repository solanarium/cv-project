import type { FC } from 'react'

import { experience } from '../shared/consts'
import { ExperienceBlock } from './ExperienceBlock'

export const ResumeContent: FC = () => {
  return (
    <div>
      {experience.length > 0 ? <ExperienceBlock experience={experience} /> : ''}
    </div>
  )
}
