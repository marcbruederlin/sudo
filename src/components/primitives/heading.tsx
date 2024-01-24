import { type ComponentProps, type ElementType } from 'react'

type HeadingProps = ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> & {
  as: ElementType
}

export function Heading({ as: Cmp, children }: HeadingProps) {
  return <Cmp>{children}</Cmp>
}
