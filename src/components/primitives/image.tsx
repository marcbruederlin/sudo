import { cn } from '@/lib/utils'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'

export function Image({ className, ...props }: NextImageProps) {
  return <NextImage className={cn('w-full', className)} {...props} />
}
