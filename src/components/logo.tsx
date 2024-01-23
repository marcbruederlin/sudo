import { cn } from '@/lib/utils'
import { type ComponentProps } from 'react'

type LogoProps = Readonly<ComponentProps<'svg'>>

export function Logo({className, ...props}: LogoProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 20" className={cn('h-4 fill-foreground dark:fill-white', className)} {...props}><path d="M78.654 19.336c-.71 0-1.307-.243-1.792-.728-.467-.504-.7-1.12-.7-1.848 0-.747.233-1.363.7-1.848a2.39 2.39 0 0 1 1.792-.756c.709 0 1.297.252 1.764.756.485.485.728 1.101.728 1.848 0 .728-.243 1.344-.728 1.848-.467.485-1.055.728-1.764.728ZM64.05 19.336c-1.233 0-2.362-.214-3.389-.644a7.521 7.521 0 0 1-2.604-1.904c-.728-.821-1.297-1.82-1.708-2.996-.392-1.176-.588-2.51-.588-4.004 0-1.493.196-2.818.588-3.976.41-1.176.98-2.156 1.708-2.94a7.075 7.075 0 0 1 2.604-1.82c1.027-.43 2.156-.644 3.388-.644 1.232 0 2.352.215 3.36.644a7.025 7.025 0 0 1 2.632 1.82c.728.803 1.288 1.792 1.68 2.968.41 1.158.616 2.474.616 3.948 0 1.493-.205 2.828-.616 4.004-.392 1.176-.952 2.175-1.68 2.996a7.455 7.455 0 0 1-2.632 1.904c-1.008.43-2.128.644-3.36.644Zm0-3.556c1.25 0 2.24-.532 2.967-1.596.728-1.082 1.092-2.548 1.092-4.396 0-1.83-.364-3.257-1.092-4.284-.728-1.026-1.717-1.54-2.968-1.54-1.25 0-2.24.514-2.968 1.54-.728 1.027-1.092 2.455-1.092 4.284 0 1.848.364 3.313 1.092 4.396.728 1.064 1.718 1.596 2.968 1.596ZM38.016 19V.744h5.152c1.4 0 2.66.177 3.78.532 1.12.355 2.081.905 2.884 1.652.802.728 1.418 1.661 1.848 2.8.429 1.139.644 2.492.644 4.06 0 1.568-.215 2.93-.644 4.088-.43 1.158-1.036 2.119-1.82 2.884-.784.747-1.727 1.307-2.828 1.68-1.083.373-2.296.56-3.64.56h-5.376Zm4.116-3.332h.784c.784 0 1.493-.102 2.128-.308a3.998 3.998 0 0 0 1.624-.98c.448-.466.793-1.073 1.036-1.82.261-.747.392-1.67.392-2.772 0-1.083-.131-1.988-.392-2.716-.243-.747-.588-1.335-1.036-1.764a3.752 3.752 0 0 0-1.624-.952c-.635-.187-1.344-.28-2.128-.28h-.784v11.592ZM25.75 19.336c-2.37 0-4.181-.7-5.432-2.1-1.25-1.4-1.876-3.63-1.876-6.692v-9.8h4.144v10.22c0 1.792.271 3.043.812 3.752.542.71 1.326 1.064 2.352 1.064 1.027 0 1.82-.354 2.38-1.064.56-.71.84-1.96.84-3.752V.744h3.976v9.8c0 3.061-.616 5.292-1.848 6.692-1.213 1.4-2.996 2.1-5.348 2.1ZM7.728 19.336c-1.195 0-2.39-.214-3.584-.644A9.54 9.54 0 0 1 .98 16.704l2.352-2.828a8.99 8.99 0 0 0 2.156 1.372c.803.355 1.587.532 2.352.532.859 0 1.493-.159 1.904-.476.43-.317.644-.747.644-1.288 0-.28-.065-.523-.196-.728a1.45 1.45 0 0 0-.532-.532 3.53 3.53 0 0 0-.84-.448c-.317-.15-.672-.308-1.064-.476l-2.38-1.008a7.485 7.485 0 0 1-1.372-.728A6.88 6.88 0 0 1 2.828 9.06a5.19 5.19 0 0 1-.812-1.4c-.205-.541-.308-1.148-.308-1.82 0-.746.159-1.446.476-2.1a5.067 5.067 0 0 1 1.344-1.736A6.303 6.303 0 0 1 5.572.828c.803-.28 1.68-.42 2.632-.42 1.064 0 2.11.206 3.136.616a7.946 7.946 0 0 1 2.744 1.792l-2.1 2.604a7.543 7.543 0 0 0-1.792-1.064 4.908 4.908 0 0 0-1.988-.392c-.71 0-1.279.15-1.708.448-.41.28-.616.682-.616 1.204 0 .28.065.523.196.728.15.187.345.364.588.532.261.15.56.299.896.448.336.13.7.28 1.092.448l2.352.952c1.12.448 1.997 1.064 2.632 1.848.653.784.98 1.82.98 3.108 0 .765-.159 1.494-.476 2.184a5.152 5.152 0 0 1-1.344 1.792c-.579.504-1.297.915-2.156 1.232-.859.299-1.83.448-2.912.448Z"/></svg>
    )
}