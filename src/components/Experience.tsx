import SectionHeading from "./SectionHeading";

type Experience = {
  role: string;
  company: string;
  date: string;
  desc: string[];
};

const EXPERIENCES: Experience[] = [
 
  {
    role: "MERN Stack Intern",
    company: "DMVCore Tech",
    date: "Dec 2025 — Mar 2026",
    desc: [
      "Assisted in developing and maintaining web applications using the MERN stack.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Participated in code reviews and wrote unit tests to ensure code quality.",
    ],
  },

  {
    role: "Hackathon & Tech Event Organizer",
    company: "Arya College of Engineering & IT, Jaipur",
    date: "2023 — Present",
    desc: [
      "Beyond participating in hackathons, I have also contributed to the technical community by organizing events such as Geospatial Hackathon, Projectathon 1.0, and Projectathon 2.0. These experiences helped me develop leadership, teamwork, event management, and problem-solving skills while encouraging innovation among fellow students.",
      
    ],
  },

  // {
  //   role: "Internshala Student Partner",
  //   company: "Internshala",
  //   date: "Feb 2023 — Aug 2023",
  //   desc: [
  //     "Promoted Internshala's online training and internship programs on campus.",
  //     "Organized seminars and workshops to help students find relevant opportunities.",
  //     "Achieved high conversion rates and gained valuable marketing and leadership experience.",
  //   ],
  // },
];

export default function Experience() {
  return (
    <section id="experience" className="theme-section-alt relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Journey"
          title="Experience & Internships"
          subtitle="Real-world professional experience and leadership roles."
        />

        <div className="mx-auto max-w-4xl space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="reveal glass relative flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 md:flex-row md:items-start md:gap-8"
            >
              <div className="mb-4 shrink-0 md:mb-0 md:w-1/4">
                <span className="inline-block rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-500 dark:text-violet-300">
                  {exp.date}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-sm font-medium text-blue-500 dark:text-blue-300">{exp.company}</p>
                <ul className="mt-4 space-y-2">
                  {exp.desc.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-black/70 dark:text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-blue-400" />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
