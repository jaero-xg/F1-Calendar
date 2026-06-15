import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Users, Trophy, Map } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "Calendar", path: "/calendar", icon: Calendar },
  { label: "Drivers", path: "/drivers", icon: Users },
  { label: "Teams", path: "/teams", icon: Trophy },
  { label: "Tracks", path: "/tracks", icon: Map },
];

/* ═══════════════════════════════════════════════════════════════
   DESKTOP NAV LINK
   ═══════════════════════════════════════════════════════════════ */
function DesktopNavLink({
  link,
  isActive,
}: {
  link: (typeof navLinks)[0];
  isActive: boolean;
}) {
  return (
    <Link
      to={link.path}
      className={`font-mono text-[11px] uppercase tracking-[0.1em] px-4 h-[52px] flex items-center border-b-2 transition-colors ${
        isActive
          ? "text-white border-f1-accent"
          : "text-f1-muted border-transparent hover:text-white"
      }`}
    >
      {link.label}
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE NAV LINK
   ═══════════════════════════════════════════════════════════════ */
function MobileNavLink({
  link,
  isActive,
}: {
  link: (typeof navLinks)[0];
  isActive: boolean;
}) {
  const Icon = link.icon;

  return (
    <Link
      to={link.path}
      className={`flex flex-col items-center justify-center gap-1 px-3 py-1 rounded-sm transition-colors min-w-[60px] ${
        isActive ? "text-f1-accent" : "text-f1-muted hover:text-white"
      }`}
    >
      <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
      <span className="font-mono text-[9px] uppercase tracking-[0.1em]">
        {link.label}
      </span>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════════ */
export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* ─── TOP NAVBAR ─── */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-f1-black border-b border-f1-border sticky top-0 z-50"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center h-[52px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mr-8 md:mr-10">
              <img
                src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/f1/default.svg"
                alt="F1"
                width="48"
                height="48"
                className="h-8 w-auto md:h-10"
              />
              <span className="font-display font-black uppercase text-white text-lg hidden sm:inline">
                Hub
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0 flex-1">
              {navLinks.map((link) => (
                <DesktopNavLink
                  key={link.path}
                  link={link}
                  isActive={location.pathname === link.path}
                />
              ))}
            </div>

            {/* Live indicator */}
            <div className="hidden md:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-f1-accent animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-f1-muted">
                Live
              </span>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ─── BOTTOM NAVBAR: Mobile only ─── */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 bg-f1-black border-t border-f1-border z-50"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-center justify-around h-[56px]">
          {navLinks.map((link) => (
            <MobileNavLink
              key={link.path}
              link={link}
              isActive={location.pathname === link.path}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
