export function Footer() {
  return (
    <footer className="border-t border-[var(--color-navy)]/10 bg-[var(--color-black)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
        <div>
          <p className="text-lg font-semibold">All Veterans Matter</p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
            Connecting Veterans, Service Members, Military Families, Caregivers,
            and Surviving Spouses with trusted resources nationwide.
          </p>
          <p className="mt-3 text-sm font-semibold text-white">No Veteran Left Behind.</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
            All Veterans Matter is an independent veteran resource platform.
            Organizations are listed for informational and referral purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
