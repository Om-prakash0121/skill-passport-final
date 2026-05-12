import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <header
      className="sticky top-0 z-40 bg-white border-b-4 border-black"
      data-testid="site-nav"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          data-testid="nav-logo-link"
        >
          <div className="w-8 h-8 bg-[#FF331F] border-4 border-black" />
          <span className="font-display text-xl tracking-tighter">
            SKILL<span className="text-[#FF331F]">/</span>PROOF
          </span>
        </Link>
        <nav className="flex items-center gap-3">
          {pathname !== "/" && (
            <Link
              to="/"
              className="hidden sm:inline-block font-mono text-sm font-bold uppercase tracking-wider hover:underline"
              data-testid="nav-home-link"
            >
              ← Home
            </Link>
          )}
          <Link
            to="/apply"
            className="btn-brut btn-brut-black text-sm py-2 px-4"
            data-testid="nav-apply-button"
          >
            Get Reviewed →
          </Link>
        </nav>
      </div>
    </header>
  );
}
