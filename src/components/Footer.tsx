import Link from "next/link";

export default function Footer() {
  return <footer className="flex flex-row h-[var(--footer-size)] items-center justify-center bg-background/100 text-[0.55rem] gap-1">
				<Link href="/terms">
					Termos de uso
				</Link>
				<span>|</span>
				<Link href="/policy">
				Política de Privacidade
				</Link>
				</footer>
}