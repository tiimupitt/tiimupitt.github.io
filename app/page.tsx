import styles from '@/app/styles.module.css'
import Experience from '@/app/ui/experience'
import Sidebar from '@/app/ui/sidebar'

export default function Page() {
  return (
    <div className={styles.page}>
      <main>
        <Sidebar />
        <div className={styles.content}>
          <Experience />
        </div>
      </main>
    </div>
  )
}
