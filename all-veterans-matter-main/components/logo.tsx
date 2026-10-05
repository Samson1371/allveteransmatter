import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  withText?: boolean;
};

export function Logo({ withText = true }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[var(--color-gold)]/35 bg-white shadow-sm">
        <Image
          src="/avm-logo.png"
          alt="All Veterans Matter logo"
          width={48}
          height={48}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      {withText ? (
        <div>
          <p className="text-base font-semibold tracking-[0.16em] text-[var(--color-navy)] uppercase">
            All Veterans Matter
          </p>
          <p className="text-sm text-[var(--color-slate)]">No Veteran Left Behind</p>
        </div>
      ) : null}
    </Link>
  );
}
