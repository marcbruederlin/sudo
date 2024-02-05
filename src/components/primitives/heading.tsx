import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { type ComponentProps } from 'react'

type HeadingProps = ComponentProps<'h1' | 'h2'> & {
  as: 'h1' | 'h2'
}

const headingVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl leading-tight',
      h2: 'text-3xl leading-tight',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
})

export function Heading({ as: Cmp, className, children }: HeadingProps) {
  // const variant = Cmp as

  return (
    <Cmp className={cn(headingVariants({ variant: Cmp, className }))}>
      {children}
    </Cmp>
  )
}
