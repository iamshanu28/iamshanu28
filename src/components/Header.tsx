export function Header() {
  return (
    <header className="px-[83px] pt-7 pb-7" data-section="header">
      <div className="relative flex items-start justify-between">
        <div className="flex items-start gap-3">
          <h1 className="text-[96px] font-semibold leading-none tracking-tight">
            Portfolio
          </h1>
          <span
            className="mt-[18px] inline-flex items-center rounded-[10px] bg-black px-[10px] py-[2px] text-[12px] font-normal text-white"
            aria-label="Role"
          >
            Editor
          </span>
        </div>

        <nav
          className="mt-[18px] flex items-center gap-[36px]"
          aria-label="Primary"
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
    </header>
  );
}
