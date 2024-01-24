import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps } from 'react'

type ParagraphProps = ComponentProps<'p'> &
  VariantProps<typeof paragraphVariants>

const paragraphVariants = cva('max-w-[1008px]', {
  variants: {
    size: {
      default: 'text-lg',
      sm: 'text-sm leading-normal',
      lg: 'text-xl leading-normal',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export function P({ size, className, children, ...props }: ParagraphProps) {
  return (
    <p className={cn(paragraphVariants({ size, className }))} {...props}>
      {children}
    </p>
  )
}
