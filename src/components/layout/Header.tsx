import Link from "next/link";
import { COMPANY } from "@/constants/company";

const NAV_ITEMS = [
  { label: "서비스", href: "#services" },
  { label: "문의", href: "#contact" },
] as const;

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/30">
            <span className="text-sm font-black text-white">D</span>
          </div>
          <span className="text-base font-bold tracking-tight text-foreground">
            {COMPANY.name}
          </span>
        </Link>

        <div className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground md:block"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:devpub.dev@gmail.com"
            className="rounded-full border border-primary/40 px-5 py-2 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/20"
          >
            프로젝트 문의
          </a>
        </div>
      </nav>
    </header>
  );
}
