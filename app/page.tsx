import Image from 'next/image'

import WoodImage from '@/app/image/wood.jpg'
import styles from '@/app/styles.module.css'
import CurriculumVitae from '@/app/ui/curriculum-vitae'
import Sidebar from '@/app/ui/sidebar'

export default function Page() {
  return (
    <div className={styles.page}>
      <main>
        <Sidebar />
        <div className={styles.wrapper}>
          <Image alt="wood background" className={styles.wood} src={WoodImage} />
          <div className={styles.content}>
            <CurriculumVitae />
          </div>
        </div>
      </main>
    </div>
  )
}
