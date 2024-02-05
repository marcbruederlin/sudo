import { cva, type VariantProps } from 'class-variance-authority'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { type ComponentPropsWithRef } from 'react'

import { cn } from '@/lib/utils'

type LinkProps = NextLinkProps &
  ComponentPropsWithRef<'a'> &
  VariantProps<typeof linkVariants>

const linkVariants = cva(
  'font-semibold underline underline-offset-8 hover:opacity-50 transition-all',
  {
    variants: {
      size: {
        default: 'text-lg',
        sm: 'h-9 px-3 rounded-md',
        lg: 'text-xl leading-normal',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

export function Link({ size, children, className, ...props }: LinkProps) {
  return (
    <NextLink className={cn(linkVariants({ size, className }))} {...props}>
      {children}
    </NextLink>
  )
}
