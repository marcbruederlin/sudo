import { Link } from "../primitives/link";

export function Footer() {
    return (
        <footer className="flex gap-10 justify-between pt-14 border-t mt-48 dark:border-white/5 pb-44">
            <div className="flex flex-col space-x-3">
                Got questions?
                <Link href="mailto:sudo@example.com">Feel free to reach out.</Link>
            </div>

            <nav>
                SOCIALS
            </nav>
        </footer>
    )
}