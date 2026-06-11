import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Calendar", path: "/calendar" },
  { label: "Drivers", path: "/drivers" },
  { label: "Tracks", path: "/tracks" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav className="bg-f1-black border-b border-f1-border h-[52px] flex items-center sticky top-0 z-50">
      <div className="wrap section-padding flex items-center w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mr-10">
          <img
            src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/f1/default.svg"
            alt="F1"
            width="50"
            height="50"
          />
        </Link>

        {/* Desktop links */}
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

        {/* Live indicator */}
        <div className="hidden md:flex items-center gap-1.5 font-mono text-[11px] text-f1-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-f1-accent live-dot" />
          LIVE
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-[52px] left-0 right-0 bg-f1-card border-b border-f1-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-5 py-3 text-sm text-f1-muted hover:text-white hover:bg-f1-surface transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
