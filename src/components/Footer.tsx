import { Link } from "react-router-dom";
import { HashLink } from "./HashLink";

export function Footer() {
  const navLinkClass =
    "text-[16px] font-light text-ink-muted transition-colors hover:text-black sm:text-[18px] lg:text-[20px]";

  return (
    <footer
      className="border-t border-black/15 px-6 pb-8 pt-6 sm:px-10 sm:pt-7 lg:px-[83px] lg:pb-[40px] lg:pt-[28px]"
      data-section="footer"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
        <Link
          to="/"
          aria-label="Go to home"
          className="text-[28px] font-semibold leading-none transition-opacity hover:opacity-80 sm:text-[32px] lg:text-[40px]"
        >
          Portfolio
        </Link>

        <nav
          className="flex items-center gap-6 sm:gap-9"
          aria-label="Footer navigation"
        >
          <HashLink to="/#work" className={navLinkClass}>
            Work
          </HashLink>
          <HashLink to="/contact" className={navLinkClass}>
            Contact
          </HashLink>
        </nav>
      </div>

      <p className="mt-12 text-center text-[14px] font-light text-ink-muted sm:mt-16 sm:text-[16px] lg:mt-[78px]">
        Thanks for the support
      </p>
    </footer>
  );
}
