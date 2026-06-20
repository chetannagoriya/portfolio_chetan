import SectionHeading from "./SectionHeading";
import { GitHubIcon, ExternalLinkIcon } from "./Icons";

import ImageSlider from "./ImageSlider";

type Project = {
  title: string;
  tagline: string;
  desc: string;
  images: string[];
  github: string;
  live: string;
  tech: string[];
  features: string[];
};

const PROJECTS: Project[] = [
  {
    title: "CalmNest",
    tagline: "AI-Powered Mental Wellness Platform",
    desc: "AI-powered mental wellness platform that provides mood tracking, personalized mental health insights, stress management tools, and an AI chatbot to support users' emotional well-being.",
    images: [
      "/images/calmnest1.png",
      "/images/calmnest2.png",
      "/images/calmnest3.png"
    ],
    github: "https://github.com/chetannagoriya",
    live: "https://calmnest-main.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB", "AI/ML", "Tailwind"],
    features: [
      "Emotion detection",
      "Personalized recommendations",
      "Stress management support",
    ],
  },
  {
    title: "Swasthya Sampark",
    tagline: "Smart Health Record System",
    desc: "A digital healthcare platform that simplifies doctor appointment booking, patient management, and healthcare accessibility, enabling users to connect with medical professionals efficiently.",
    images: [
      "/images/health1.png",
      "/images/health2.png",
      "/images/health3.png",
      "/images/health4.png",
    ],
    github: "https://github.com/chetannagoriya",
    live: "https://swasthya-sampark-0tds.onrender.com/",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Smart health records",
      "Emergency response management",
      "Secure patient data",
    ],
  },
  {
    title: "Climate Project",
    tagline: "AI-Based Climate Monitoring",
    desc: "An AI and IoT-based smart water management system that monitors water quality and levels in real time, detects contamination risks, and provides data-driven insights for sustainable water resource management.",
    images: [
      "/images/climate1.png",
      "/images/climate2.png"
    ],
    github: "https://github.com/chetannagoriya",
    live: "https://climate-project-demo.vercel.app",
    tech: ["React", "Python", "AI/ML", "Charts", "MongoDB"],
    features: [
      "Environmental analytics",
      "Sustainability technology",
      "Data visualization dashboard",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="theme-section relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          subtitle="A selection of projects where I combined development skills with AI to solve real problems."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="reveal group flex flex-col overflow-hidden rounded-3xl glass transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/40"
            >
              {/* image */}
              <div className="relative">
                <ImageSlider images={p.images} alt={p.title} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-violet-600/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur shadow-lg shadow-violet-600/30">
                  {p.tagline}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.desc}</p>

                {/* features */}
                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-blue-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* buttons */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="keep-white inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-sm font-semibold shadow-lg shadow-violet-600/20 transition-transform hover:scale-105"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
