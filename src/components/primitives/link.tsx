import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { type ComponentPropsWithRef } from 'react'

import { cn } from '@/lib/utils'

type LinkProps = NextLinkProps & ComponentPropsWithRef<'a'>

export function Link({ children, className, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn('font-semibold underline underline-offset-8', className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}
