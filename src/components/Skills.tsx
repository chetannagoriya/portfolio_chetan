import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

type Skill = { name: string; level: number };

const GROUPS: { title: string; icon: string; skills: Skill[] }[] = [
  {
    title: "Programming Languages & Libraries",
    icon: "</>",
    skills: [
      { name: "C", level: 70 },
      { name: "C++", level: 80 },
      { name: "Python", level: 70 },
      { name: "JavaScript", level: 70 },
      { name: "NumPy", level: 82 },
      { name: "Pandas", level: 80 },
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "AI & Tools",
    icon: "🤖",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 82 },
      { name: "MySql", level: 85 },
      { name: "Machine Learning", level: 75 },
      { name: "Google Cloud", level: 80 },
      { name: "Claude Code", level: 80 },
    ],
  },
];

function SkillBar({ skill, animate }: { skill: Skill; animate: boolean }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-white/80">{skill.name}</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-400 transition-[width] duration-1000 ease-out"
          style={{ width: animate ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="theme-section-alt relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <SectionHeading
          eyebrow="What I Know"
          title="Skills & Technologies"
          subtitle="The languages, frameworks and tools I use to bring ideas to life."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <div
              key={g.title}
              className="reveal glass rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 text-2xl">
                  {g.icon}
                </span>
                <h3 className="text-lg font-bold">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <SkillBar key={s.name} skill={s} animate={animate} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
