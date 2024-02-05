import { cn } from '@/lib/utils'
import type { ComponentProps, ReactNode } from 'react'

type TwoColumnsProps = ComponentProps<'div'> & {
  left: ReactNode
  right: ReactNode
}

export function TwoColumns({ left, right, className }: TwoColumnsProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12',
        className,
      )}
    >
      {left && left}
      {right && right}
    </div>
  )
}
