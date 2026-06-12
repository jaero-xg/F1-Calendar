import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Users, Trophy, Map } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "Calendar", path: "/calendar", icon: Calendar },
  { label: "Drivers", path: "/drivers", icon: Users },
  { label: "Teams", path: "/teams", icon: Trophy },
  { label: "Tracks", path: "/tracks", icon: Map },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* ─── TOP NAVBAR: All screen sizes ─── */}
      <nav className="bg-f1-black border-b border-f1-border flex items-center sticky top-0 z-50 safe-area-top h-[calc(52px+env(safe-area-inset-top))]">
        <div className="wrap section-padding flex items-center w-full">
          {/* Logo — visible on all screens */}
          <Link to="/" className="flex items-center gap-2 mr-10">
            <img
              src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/f1/default.svg"
              alt="F1"
              width="50"
              height="50"
            />
            <span className="font-display font-black uppercase text-white hidden sm:inline">
              Calendar
            </span>
          </Link>

          {/* Desktop links: md and up */}
          <div className="hidden md:flex items-center gap-0 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[12px] font-medium uppercase tracking-[0.08em] px-4 h-[52px] flex items-center border-b-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-white border-f1-accent"
                    : "text-f1-muted border-transparent hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Live indicator: md and up */}
          <div className="hidden md:flex items-center gap-1.5 font-mono text-[11px] text-f1-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-f1-accent live-dot" />
            LIVE
          </div>
        </div>
      </nav>

      {/* ─── BOTTOM NAVBAR: Mobile only (below md) ─── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-f1-black border-t border-f1-border z-50 h-[64px]">
        <div className="flex items-center justify-around h-full px-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-1 rounded-lg transition-colors min-w-[60px] ${
                  isActive ? "text-f1-accent" : "text-f1-muted hover:text-white"
                }`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium uppercase tracking-wider">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Spacer for mobile to prevent content from being hidden behind bottom nav */}
      <div className="md:hidden h-[64px]" />
    </>
  );
}
