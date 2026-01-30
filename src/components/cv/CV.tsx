import './CV.scss'

import type { FC } from 'react'

import { cv } from '../../mock-data/cv'
import { MajorSection } from './MajorSection'
import { MinorSection } from './MinorSection'

export const CV: FC = () => {
  return (
    <div className="content">
      <header className="header">
        <h2 className="header__title">{cv.fullName}</h2>
        <div className="header__description">
          <span className="header__description-item">{cv.university}</span>
          <span className="header__description-item">{cv.email}</span>
          <span className="header__description-item">{cv.phoneNumber}</span>
          <span className="header__description-item">{cv.linkedInURL}</span>
        </div>
      </header>
      <div>
        {cv.sections.map((section) => {
          if (section.type === 'major') {
            return (
              <MajorSection
                key={section.title}
                title={section.title}
                content={section.data}
              />
            )
          }

          return (
            <MinorSection
              key={section.title}
              title={section.title}
              content={section.data}
            />
          )
        })}
      </div>
    </div>
  )
}
