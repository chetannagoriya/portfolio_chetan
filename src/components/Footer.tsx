import {
  LinkedInColorIcon,
  GitHubColorIcon,
  InstagramColorIcon,
  XColorIcon,
} from "./Icons";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: LinkedInColorIcon, href: "https://www.linkedin.com/in/chetannagoriya", label: "LinkedIn" },
  { icon: GitHubColorIcon, href: "https://github.com/chetannagoriya", label: "GitHub" },
  { icon: InstagramColorIcon, href: "https://www.instagram.com/chetannagoriya", label: "Instagram" },
  { icon: XColorIcon, href: "https://twitter.com/chetannagoriya", label: "X" },
];

export default function Footer() {
  return (
    <footer className="theme-footer relative pt-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="keep-white flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-lg font-extrabold">
                CN
              </span>
              <span className="text-lg font-bold">Chetan Nagoriya</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              ECE Student & MERN Stack Developer passionate about building impactful
              digital products with AI.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold">Quick Links</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/55 transition-colors hover:text-violet-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold">Follow Me</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center text-sm text-white/45 sm:flex-row sm:text-left">
          <p>© 2026 Chetan Nagoriya. All Rights Reserved.</p>
          <p>Built with HTML, CSS, JavaScript and MERN Technologies.</p>
        </div>
      </div>
    </footer>
  );
}
