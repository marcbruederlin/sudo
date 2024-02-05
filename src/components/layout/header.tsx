import { Logo } from './logo'

export function Header() {
  return (
    <header className="flex items-center justify-between pb-24 pt-16 md:pb-48 md:pt-40">
      <Logo />
    </header>
  )
}
