import { useEffect, useState } from "react";
import { DownloadIcon, MailIcon } from "./Icons";

const ROLES = [
  "MERN Stack Developer",
  "ECE Student",
  "AI & Hackathon Enthusiast",
  "Problem Solver",
];

/* Typewriter effect hook */
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 50 : 110;

    const timer = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      );

      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="theme-section relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-violet-600/30 blur-[120px] animate-float" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-600/25 blur-[130px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/20 blur-[120px] animate-float" />
        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm <br className="hidden sm:block" />
            <span className="gradient-text animate-gradient">Chetan Nagoriya</span>
          </h1>

          <div className="mt-4 flex h-9 items-center justify-center text-xl font-semibold text-white/80 lg:justify-start sm:text-2xl">
            <span>I'm a&nbsp;</span>
            <span className="gradient-text">{typed}</span>
            <span className="cursor-blink ml-0.5 text-violet-400">|</span>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 lg:mx-0">
            Passionate ECE student with experience in web development, AI-powered
            solutions, hackathons, and innovative technology projects. Enthusiastic
            about problem-solving, software development, and building impactful digital
            products.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="/resume.pdf"
              download
              className="keep-white group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-violet-600/30 transition-transform hover:scale-105"
            >
              <DownloadIcon className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur transition-colors hover:border-violet-400/50 hover:bg-white/10"
            >
              <MailIcon className="h-5 w-5" />
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex justify-center gap-8 lg:justify-start">
            {[
              { n: "10+", l: "Hackathons" },
              { n: "3+", l: "Projects" },
              { n: "10+", l: "Certifications" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold gradient-text sm:text-3xl">{s.n}</div>
                <div className="text-xs text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-tr from-violet-600/40 to-blue-600/40 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl sm:h-80 sm:w-80">
              <img
                src="/images/profile.jpg"
                alt="Chetan Nagoriya"
                className="h-full w-full object-cover"
              />
            </div>
            {/* floating badges */}
            <div className="absolute -right-2 top-8 rounded-2xl glass px-4 py-2 text-sm font-semibold text-white animate-float">
              ⚛️ MERN Stack
            </div>
            <div className="absolute -left-4 bottom-12 rounded-2xl glass px-4 py-2 text-sm font-semibold text-white animate-float-slow">
              🤖 AI / ML
            </div>
            <div className="absolute bottom-0 right-6 rounded-2xl glass px-4 py-2 text-sm font-semibold text-white animate-float">
              🏆 Hackathons
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
