export function Footer() {
  return (
    <footer
      className="border-t border-black/15 px-6 pb-8 pt-6 sm:px-10 sm:pt-7 lg:px-[83px] lg:pb-[40px] lg:pt-[28px]"
      data-section="footer"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
        <p className="text-[28px] font-semibold leading-none sm:text-[32px] lg:text-[40px]">
          Portfolio
        </p>

        <nav
          className="flex items-center gap-6 sm:gap-9"
          aria-label="Footer navigation"
        >
          <a
            href="#work"
            className="text-[16px] font-light text-ink-muted transition-colors hover:text-black sm:text-[18px] lg:text-[20px]"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-[16px] font-light text-ink-muted transition-colors hover:text-black sm:text-[18px] lg:text-[20px]"
          >
            Contact
          </a>
        </nav>
      </div>

      <p className="mt-12 text-center text-[14px] font-light text-ink-muted sm:mt-16 sm:text-[16px] lg:mt-[78px]">
        Thanks for the support
      </p>
    </footer>
  );
}
