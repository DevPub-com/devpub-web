import Link from "next/link";
import LogoMark from "@/components/shared/LogoMark";
import { COMPANY } from "@/constants/company";

const NAV_ITEMS = [
  { label: "자체 서비스", href: "#products" },
  { label: "개발 분야", href: "#services" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <LogoMark className="h-8 w-8 [--mark-cut:var(--primary)]" />
          <span className="text-base font-bold tracking-tight">
            {COMPANY.name}
          </span>
        </Link>

        <div className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden text-sm text-on-primary underline-offset-4 hover:underline md:block"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg border border-white/50 px-5 py-2 text-sm font-bold transition-colors hover:bg-white hover:text-primary"
          >
            프로젝트 문의
          </a>
        </div>
      </nav>
    </header>
  );
}
