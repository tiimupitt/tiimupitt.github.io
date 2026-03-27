import Image from 'next/image'
import { FunctionComponent } from 'react'

import CardboardImage from '@/app/image/cardboard.jpg'
import FileTabCurve from '@/app/svg/file-tab-curve'

import styles from './styles.module.css'
import { FileProps } from './types'

const File: FunctionComponent<FileProps> = ({ children, ref, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <FileTabCurve />
        <button>{title}</button>
        <FileTabCurve />
      </div>
      <div className={styles.folder} ref={ref}>
        <Image alt="cardboard background" className={styles.cardboard} src={CardboardImage} />
        <div className={styles.window}>
          <div className={styles.scroller}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default File
