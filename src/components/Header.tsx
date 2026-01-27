import './Header.scss'

import type { FC } from 'react'

interface Props {
  title: string
}

export const contacts = [
  'CareerOS Academy - Barcelona, Spain',
  'claudette.lening@cosacademy.edu',
  '+34 612 345 678',
  'linkedin.com/in/claudette-lening',
]

export const Header: FC<Props> = ({ title }) => {
  return (
    <div className="header">
      <h2 className="header__title">{title}</h2>
      <div className="header__contacts">
        {contacts.map((item, index) => (
          // eslint-disable-next-line @eslint-react/no-array-index-key
          <span key={index} className="header__contact">
            {item}
            {index < contacts.length - 1 && (
              <span className="header__contact__divider">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
