import type { ReactNode } from 'react'
import { Button, type ButtonProps } from '../ui/button'

type Props = ButtonProps & { children?: ReactNode }

const SharedButton = ({ className, type, children }: Props) => {
  return (
    <Button
      type={type}
      className={`font-medium bg-gradient-to-r from-[#F95EBB] from-0% via-[#A354F8] via-50.35% to-[#6775FF] to-100% shadow-gradient transition-all hover:shadow-hover-gradient hover:opacity-[.92] ${
        className || ''
      }`}
    >
      {children}
    </Button>
  )
}

export default SharedButton
