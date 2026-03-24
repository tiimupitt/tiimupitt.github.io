import styles from '@/app/styles.module.css'
import Sidebar from '@/app/ui/sidebar'

export default function Page() {
  return (
    <div className={styles.page}>
      <main>
        <Sidebar />
      </main>
    </div>
  )
}
