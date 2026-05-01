import { forwardRef, type AnchorHTMLAttributes, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type HashLinkProps = {
  /** Target route, may include a hash, e.g. "/", "/contact", "/#work". */
  to: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/**
 * Smooth scrolls to the hash target when the link is on the same route, and
 * navigates + scrolls when it isn't. Falls back to `react-router-dom`'s `Link`
 * for plain (no-hash) routes so the basename is honored automatically.
 */
export const HashLink = forwardRef<HTMLAnchorElement, HashLinkProps>(
  function HashLink({ to, onClick, children, ...rest }, ref) {
    const navigate = useNavigate();
    const location = useLocation();

    const [pathnameOnly, hash] = splitHash(to);

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      if (!hash) return; // let <Link> handle it normally below

      e.preventDefault();
      const isSamePath =
        pathnameOnly === "" || pathnameOnly === location.pathname;

      if (isSamePath) {
        scrollToHash(hash);
        // Reflect the new hash in the URL without a route change.
        window.history.replaceState(null, "", to);
      } else {
        navigate(to);
        // After navigation, ScrollToTop will scroll to the hash.
      }
    };

    if (!hash) {
      return (
        <Link to={to} onClick={onClick} ref={ref} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a href={to} onClick={handleClick} ref={ref} {...rest}>
        {children}
      </a>
    );
  }
);

function splitHash(to: string): [string, string | null] {
  const idx = to.indexOf("#");
  if (idx === -1) return [to, null];
  return [to.slice(0, idx), to.slice(idx + 1)];
}

function scrollToHash(hash: string) {
  const target = document.getElementById(hash);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
