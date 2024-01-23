import { ComponentProps } from 'react'

type ParagraphProps = ComponentProps<'p'> & {

}

export function P({ children, ...props}: ParagraphProps) {
    return <p {...props}>{children}</p>
}