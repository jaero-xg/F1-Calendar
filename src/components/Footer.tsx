import { Link } from "react-router-dom";
import { Github, Twitter, Youtube } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Calendar", path: "/calendar" },
  { label: "Drivers", path: "/drivers" },
  { label: "Teams", path: "/teams" },
  { label: "Tracks", path: "/tracks" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-f1-border mt-20">
      {/* Top accent bar */}
      <div className="h-0.5 bg-f1-accent" />

      <div className="section-padding py-8 md:py-10">
        <div className="max-w-7xl mx-auto">
          {/* Main row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-8 md:gap-10 lg:gap-16 mb-8 md:mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 mb-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/f1/default.svg"
                  alt="F1"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <span className="font-display font-black uppercase text-white tracking-wide text-sm md:text-base">
                  Hub
                </span>
              </Link>
              <p className="text-[11px] md:text-[12px] text-f1-muted leading-relaxed max-w-xs">
                A modern Formula 1 experience built with React, TypeScript, and
                Framer Motion. All data is placeholder mock content.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-f1-muted mb-3 md:mb-4">
                Navigate
              </p>
              <ul className="flex flex-col gap-2 md:gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-[12px] md:text-[13px] text-f1-muted hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-4 md:pt-6 border-t border-f1-border/30 flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-3">
            <p className="font-mono text-[9px] md:text-[10px] text-f1-muted tracking-[0.06em] text-center sm:text-left">
              2026 Formula 1 Fan Project. Not affiliated with Formula 1 Group.
            </p>
            <p className="font-mono text-[9px] md:text-[10px] text-f1-muted tracking-[0.06em]">
              2026 Season
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
