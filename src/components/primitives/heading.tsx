import { ComponentProps } from 'react'

type HeadingProps = ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>

export function Heading({ children }: HeadingProps) {
  return <h1>{children}</h1>
}
