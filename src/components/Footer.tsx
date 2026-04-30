export function Footer() {
  return (
    <footer
      className="border-t border-black/15 px-[83px] pt-[28px] pb-[40px]"
      data-section="footer"
    >
      <div className="flex items-center justify-between">
        <p className="text-[40px] font-semibold leading-none">Portfolio</p>

        <nav
          className="flex items-center gap-[36px]"
          aria-label="Footer navigation"
        >
          <a
            href="#work"
            className="text-[20px] font-light text-ink-muted transition-colors hover:text-black"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-[20px] font-light text-ink-muted transition-colors hover:text-black"
          >
            Contact
          </a>
        </nav>
      </div>

      <p className="mt-[78px] text-center text-[16px] font-light text-ink-muted">
        Thanks for the support
      </p>
    </footer>
  );
}
