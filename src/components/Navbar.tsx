import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

type NavbarProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // highlight active section
      const sections = NAV_LINKS.map((l) => document.querySelector(l.href));
      const pos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i] as HTMLElement | null;
        if (sec && sec.offsetTop <= pos) {
          setActive(NAV_LINKS[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "theme-nav theme-nav-scrolled" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <span className="keep-white flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-lg font-extrabold shadow-lg shadow-violet-600/30 transition-transform group-hover:scale-110">
            CN
          </span>
          <span className="hidden text-lg font-bold sm:block">
            Chetan<span className="gradient-text">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-blue-400" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="keep-white hidden rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2 text-sm font-semibold shadow-lg shadow-violet-600/30 transition-transform hover:scale-105 md:inline-block"
        >
          Hire Me
        </a>

        <button
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={toggleTheme}
          className="group ml-3 hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-white/10 md:inline-flex"
        >
          <span className="relative flex h-8 w-14 items-center rounded-full bg-white/10 px-1 transition-colors group-hover:bg-white/15">
            <span
              className={`keep-white flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-600/30 transition-transform duration-300 ${
                theme === "dark" ? "translate-x-0" : "translate-x-6"
              }`}
            >
              {theme === "dark" ? (
                <MoonIcon className="h-3.5 w-3.5" />
              ) : (
                <SunIcon className="h-3.5 w-3.5" />
              )}
            </span>
          </span>
          <span className="hidden text-xs uppercase tracking-[0.2em] lg:inline">
            {theme === "dark" ? "Dark" : "Light"}
          </span>
        </button>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 rounded-full bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`theme-mobile overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  active === link.href
                    ? "bg-white/5 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between border-t border-white/5 px-5 py-4 md:hidden">
          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggleTheme}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10"
          >
            <span className="keep-white flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500">
              {theme === "dark" ? (
                <MoonIcon className="h-4 w-4" />
              ) : (
                <SunIcon className="h-4 w-4" />
              )}
            </span>
            {theme === "dark" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
