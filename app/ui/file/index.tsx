import { FunctionComponent } from 'react'

import styles from './styles.module.css'
import { FileProps } from './types'

const File: FunctionComponent<FileProps> = ({ children, ref, title }) => {
  return (
    <div className={styles.folder} ref={ref}>
      <div className={styles.window}>
        <div className={styles.scroller}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default File
