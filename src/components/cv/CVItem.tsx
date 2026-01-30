import type { FC } from 'react'

import styles from './CVItem.module.scss'

interface Props {
  content: {
    title: string
    date: string
    description: string
    location: string
    summary: string[]
  }
}

export const CVItem: FC<Props> = ({ content }) => {
  const { title, date, description, location, summary } = content

  return (
    <div className={styles['cv-section']}>
      <div className={styles['cv-section__date']}>{date}</div>
      <div>
        <div className={styles['cv-section__header']}>
          <h4 className={styles['cv-section__title']}>{title}</h4>
          <div className={styles['cv-section__location']}>{location}</div>
        </div>
        <div className={styles['cv-section__description']}>{description}</div>
        <ul className={styles['cv-section__list']}>
          {summary.map((item) => (
            <li className={styles['cv-section__list-item']} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
