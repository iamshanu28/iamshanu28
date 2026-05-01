import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "./HashLink";

type NavLink = {
  to: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { to: "/#work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <header
      className="px-6 pt-5 pb-4 sm:px-10 sm:pt-6 sm:pb-6 lg:px-[83px] lg:pt-7 lg:pb-7"
      data-section="header"
    >
      <div className="relative flex items-start justify-between gap-4">
        <Link
          to="/"
          aria-label="Go to home"
          className="flex items-start gap-2 sm:gap-3"
        >
          <h1 className="text-[44px] font-semibold leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[64px] lg:text-[96px]">
            Portfolio
          </h1>
          <span
            className="mt-2 inline-flex shrink-0 items-center rounded-[10px] bg-black px-[10px] py-[2px] text-[11px] font-normal text-white sm:mt-3 sm:text-[12px] lg:mt-[18px]"
            aria-label="Role"
          >
            Editor
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="mt-3 hidden items-center gap-9 sm:mt-4 lg:mt-[18px] lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <NavItem key={link.to} link={link} />
          ))}
        </nav>

        {/* Mobile/tablet menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative z-30 mt-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-black transition-colors hover:bg-black/5 sm:mt-3 lg:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile/tablet drop-down nav */}
      <nav
        id="mobile-nav"
        aria-label="Mobile primary"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mt-4 flex flex-col gap-1 border-t border-black/15 pt-4">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavItem
                link={link}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-2 py-2 text-[18px] font-light text-ink-muted transition-colors hover:bg-black/5 hover:text-black"
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

type NavItemProps = {
  link: NavLink;
  className?: string;
  onClick?: () => void;
};

function NavItem({ link, className, onClick }: NavItemProps) {
  const baseClass =
    className ??
    "text-[18px] font-light text-ink-muted transition-colors hover:text-black lg:text-[20px]";
  return (
    <HashLink to={link.to} onClick={onClick} className={baseClass}>
      {link.label}
    </HashLink>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
