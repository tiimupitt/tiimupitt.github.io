import Image from 'next/image'

import EmbossingCenter from '@/app/image/embossing-center.png'
import EmbossingCorner from '@/app/image/embossing-corner.png'
import EmbossingEdgeBottom from '@/app/image/embossing-edge-bottom.png'
import EmbossingEdgeLeft from '@/app/image/embossing-edge-left.png'
import EmbossingEdgeRight from '@/app/image/embossing-edge-right.png'
import EmbossingEdgeTop from '@/app/image/embossing-edge-top.png'
import LeatherImage from '@/app/image/leather.jpg'

import styles from './styles.module.css'

export default function EmbossedLeather() {
  return (
    <div className={styles.container}>
      <Image alt="leather background" className={styles.leather} src={LeatherImage} />
      <div className={styles.embossing}>
        <Image alt="" className={styles['top-left-corner']} src={EmbossingCorner} />
        <Image alt="" className={styles['top-right-corner']} src={EmbossingCorner} />
        <Image alt="" className={styles['bottom-left-corner']} src={EmbossingCorner} />
        <Image alt="" className={styles['bottom-right-corner']} src={EmbossingCorner} />
        <Image alt="" className={styles['top-center']} src={EmbossingCenter} />
        <Image alt="" className={styles['left-center']} src={EmbossingCenter} />
        <Image alt="" className={styles['right-center']} src={EmbossingCenter} />
        <Image alt="" className={styles['bottom-center']} src={EmbossingCenter} />
        <Image alt="" className={styles['top-left-edge']} src={EmbossingEdgeTop} />
        <Image alt="" className={styles['top-right-edge']} src={EmbossingEdgeTop} />
        <Image alt="" className={styles['right-top-edge']} src={EmbossingEdgeRight} />
        <Image alt="" className={styles['right-bottom-edge']} src={EmbossingEdgeRight} />
        <Image alt="" className={styles['bottom-left-edge']} src={EmbossingEdgeBottom} />
        <Image alt="" className={styles['bottom-right-edge']} src={EmbossingEdgeBottom} />
        <Image alt="" className={styles['left-top-edge']} src={EmbossingEdgeLeft} />
        <Image alt="" className={styles['left-bottom-edge']} src={EmbossingEdgeLeft} />
      </div>
    </div>
  )
}
