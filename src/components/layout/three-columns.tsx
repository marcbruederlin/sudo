import { cn } from '@/lib/utils'
import type { ComponentProps, ReactNode } from 'react'

type ThreeColumnsProps = ComponentProps<'div'> & {
  left: ReactNode
  middle: ReactNode
  right: ReactNode
}

export function ThreeColumns({
  left,
  middle,
  right,
  className,
}: ThreeColumnsProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-12',
        className,
      )}
    >
      {left && left}
      {middle && middle}
      {right && right}
    </div>
  )
}
