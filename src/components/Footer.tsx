import { Link } from "react-router-dom";
import { Github, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-f1-border/50 mt-20">
      <div className="section-padding py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/f1/default.svg"
                alt="F1"
                width="50"
                height="50"
              />
              <span className="font-bold text-lg">2026 Season</span>
            </div>
            <p className="text-sm text-f1-muted max-w-md">
              A modern Formula 1 experience built with React, TypeScript, and
              Framer Motion. All data is placeholder mock content for
              demonstration purposes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-f1-muted">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/calendar"
                  className="hover:text-white transition-colors"
                >
                  Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-f1-surface hover:bg-f1-border transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-f1-surface hover:bg-f1-border transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-f1-surface hover:bg-f1-border transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-f1-border/30 text-center text-xs text-f1-muted">
          <p>
            2026 Formula 1 Fan Project. Not affiliated with Formula 1 Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
