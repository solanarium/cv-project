import './BlockItem.scss'

import type { FC } from 'react'

interface Props {
  title: string
  date: string
  description: string
  location: string
  content: string[]
}

export const BlockItem: FC<Props> = ({
  title,
  date,
  description,
  location,
  content,
}) => {
  return (
    <div className="block-item">
      <div className="block-item__date">{date}</div>
      <div>
        <div className="block-item__header">
          <h5 className="block-item__title">{title}</h5>
          <div className="block-item__location">{location}</div>
        </div>
        <div className="block-item__description">{description}</div>
        <ul className="block-item__list">
          {content.map((item) => (
            <li className="block-item__list-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
