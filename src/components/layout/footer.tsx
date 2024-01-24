import { Link } from '../primitives/link'
import { P } from '../primitives/paragraph'

export function Footer() {
  return (
    <footer className="mt-48 flex flex-col gap-32 border-t pb-44 pt-14 dark:border-white/10">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col space-x-3">
          Got questions?
          <Link href="mailto:sudo@example.com">Feel free to reach out.</Link>
        </div>

        <nav>SOCIALS</nav>
      </div>
      <P size="sm">
        All rights reserved. © {new Date().getFullYear()} SUDO. Studio
      </P>
    </footer>
  )
}
