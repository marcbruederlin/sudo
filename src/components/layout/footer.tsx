import { Heading } from '../primitives/heading'
import { Link } from '../primitives/link'
import { P } from '../primitives/paragraph'
import { SocialNav } from './social-nav'

export function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-16 border-t pb-12 pt-14 md:mt-48 md:gap-32 md:pb-44 dark:border-white/10">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div className="flex flex-col space-y-3">
          <Heading as="h2">Got questions?</Heading>
          <Link href="mailto:sudo@example.com">Feel free to reach out.</Link>
        </div>

        <SocialNav />
      </div>
      <P size="sm">
        All rights reserved. © {new Date().getFullYear()} SUDO. Studio
      </P>
    </footer>
  )
}
