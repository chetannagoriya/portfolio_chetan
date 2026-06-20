import SectionHeading from "./SectionHeading";
import { MapPinIcon } from "./Icons";

const PERSONAL = [
  { label: "Name", value: "Chetan Nagoriya" },
  { label: "Branch", value: "Electronics & Communication Engineering" },
  { label: "College", value: "Arya College of Engineering & IT, Jaipur" },
  { label: "Location", value: "Rajasthan, India" },
];

const TIMELINE = [
  {
    year: "Undergraduate (2023 — 2027)",
    title: "B.Tech in Electronics & Communication Engineering",
    place: "Arya College of Engineering & IT, Jaipur",
    desc: "Pursuing my bachelor's degree with a strong focus on software development, AI, and embedded systems alongside core ECE subjects.",
  },
  // {
  //   year: "Coursework",
  //   title: "Relevant Coursework",
  //   place: "Core & Electives",
  //   desc: "Data Structures & Algorithms, Digital Electronics, Signals & Systems, Microprocessors, Communication Systems, OOP, DBMS and Web Technologies.",
  // },
  {
    year: "Senior Secondary",
    title: "Higher Secondary Education (PCM)",
    place: "Board of Secondary Education, Rajasthan",
    desc: "Completed schooling with Physics, Chemistry and Mathematics, building the foundation for an engineering career.",
  },
];

export default function About() {
  return (
    <section id="about" className="theme-section relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get To Know"
          title="About Me"
          subtitle="A quick look at who I am, my background and my academic journey."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Personal info + intro */}
          <div className="reveal space-y-6">
            <div className="glass rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold">Personal Information</h3>
              <p className="mt-3 leading-relaxed text-white/60">
                I'm an Electronics & Communication Engineering student who loves
                blending hardware knowledge with modern software development. From
                building full-stack MERN apps to experimenting with AI, I enjoy turning
                ideas into impactful products.
              </p>

              <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {PERSONAL.map((p) => (
                  <div
                    key={p.label}
                    className="rounded-2xl border border-white/5 bg-white/5 p-4"
                  >
                    <dt className="text-xs uppercase tracking-wider text-violet-300">
                      {p.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{p.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600/20 to-blue-600/20 px-4 py-2 text-sm text-white/80">
                <MapPinIcon className="h-4 w-4 text-violet-300" />
                Based in Rajasthan, India
              </div>
            </div>
          </div>

          {/* Education timeline */}
          <div className="reveal">
            <h3 className="mb-6 text-xl font-bold">Education Timeline</h3>
            <div className="relative space-y-6 border-l-2 border-white/10 pl-8">
              {TIMELINE.map((t) => (
                <div key={t.title} className="relative">
                  {/* dot */}
                  <span className="absolute -left-[42px] top-1 flex h-5 w-5 items-center justify-center">
                    <span className="absolute h-5 w-5 rounded-full bg-violet-500/30" />
                    <span className="h-3 w-3 rounded-full bg-gradient-to-br from-violet-500 to-blue-500" />
                  </span>
                  <div className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                    <span className="inline-block rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-300">
                      {t.year}
                    </span>
                    <h4 className="mt-3 font-bold">{t.title}</h4>
                    <p className="text-sm text-blue-300">{t.place}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
