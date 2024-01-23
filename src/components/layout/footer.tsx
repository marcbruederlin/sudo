import { Link } from '../primitives/link'

export function Footer() {
  return (
    <footer className="mt-48 flex justify-between gap-10 border-t pb-44 pt-14 dark:border-white/5">
      <div className="flex flex-col space-x-3">
        Got questions?
        <Link href="mailto:sudo@example.com">Feel free to reach out.</Link>
      </div>

      <nav>SOCIALS</nav>
    </footer>
  )
}
