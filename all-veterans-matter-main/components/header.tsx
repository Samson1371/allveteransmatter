import Link from "next/link";
import { navigationItems } from "@/lib/site-data";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-navy)]/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <Logo />
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-3 text-sm font-medium text-[var(--color-slate)] sm:gap-5">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-[var(--color-navy)] hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
