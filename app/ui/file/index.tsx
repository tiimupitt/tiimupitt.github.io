import Image from 'next/image'
import { FunctionComponent } from 'react'

import CardboardImage from '@/app/image/cardboard.jpg'

import styles from './styles.module.css'
import { FileProps } from './types'

const File: FunctionComponent<FileProps> = ({ children, ref, title }) => {
  return (
    <div className={styles.folder} ref={ref}>
      <Image alt="cardboard background" className={styles.cardboard} src={CardboardImage} />
      <div className={styles.window}>
        <div className={styles.scroller}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default File
