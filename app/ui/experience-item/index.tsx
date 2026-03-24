import { FunctionComponent } from 'react'

import { ExperienceItemProps } from '@/app/ui/experience-item/types'

import styles from './styles.module.css'

const ExperienceItem: FunctionComponent<ExperienceItemProps> = ({ date, description, pills, subtitle, title }) => {
  return (
    <li className={styles.container}>
      <h3 className={styles.heading}>
        <strong>{title}</strong>
        {' '}
        —
        {' '}
        <i>{subtitle}</i>
      </h3>
      {date && (
        <span className={styles.date}>
          {date}
        </span>
      )}
      {description && (
        <div className={styles.description}>
          {description.title && <span>{description.title}</span>}
          {description.points && (
            <ul>
              {description.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      {pills && (
        <ul className={styles.pills}>
          {pills.map((pills, index) => (
            <li key={index}>{pills}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default ExperienceItem
