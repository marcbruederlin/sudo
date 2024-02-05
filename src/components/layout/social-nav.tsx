import { cn } from '@/lib/utils'

export function SocialNav() {
  return (
    <nav className="space-x-4">
      <SocialNavLink href="#">X</SocialNavLink>
      <SocialNavLink href="#">Facebook</SocialNavLink>
      <SocialNavLink href="#">Instagram</SocialNavLink>
    </nav>
  )
}

function SocialNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      key={`social-${href}`}
      href={href}
      className={cn('text-xl font-semibold transition-all hover:opacity-50')}
    >
      {children}
    </a>
  )
}
