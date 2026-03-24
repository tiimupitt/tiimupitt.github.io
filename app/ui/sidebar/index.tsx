import Image from 'next/image'

import GithubIcon from '@/app/icon/github'
import LinkedinIcon from '@/app/icon/linkedin'
import MeImage from '@/app/image/me.jpg'

import styles from './styles.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1>Tiimu Pitt</h1>
        <span>Software Engineer</span>
      </div>
      <div className={styles.contact}>
        <strong>tiimupitt@gmail.com</strong>
        <span>Brighton, East Sussex</span>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/tiimupitt" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/tiimu-pitt/" target="_blank">
          <LinkedinIcon />
        </a>
      </div>
      <div className={styles.polaroid}>
        <div>
          <Image alt="picture of me" src={MeImage} />
        </div>
      </div>
    </div>
  )
}
