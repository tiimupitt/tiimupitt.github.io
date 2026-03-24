import { ReactRef } from '@gsap/react'
import { ReactNode } from 'react'

export type FileProps = {
  children: ReactNode
  ref?: ReactRef
  title: string
}
