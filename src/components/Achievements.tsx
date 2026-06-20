import SectionHeading from "./SectionHeading";
import { ExternalLinkIcon } from "./Icons";
import ImageSlider from "./ImageSlider";

type Achievement = {
  title: string;
  desc: string;
  date: string;
  images: string[];
  Url?: string;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    // title: "National-Level Hackathons",
    title: "Rajasthan Digifest X TiE Global Hackathon",
    desc: "🏆 1st Runner-Up at Rajasthan Digifest X TiE Global Hackathon Recognized for developing an innovative solution and demonstrating strong teamwork, technical expertise, and problem-solving abilities in a competitive hackathon environment.",
    date: "2025",
    images: [
      "public/images/tie1.jpeg",
      "public/images/tie2.jpg",
      "public/images/tie3.jpeg",
      "public/images/tie4.jpg",
      "public/images/tie5.jpeg"

          ],
    Url: "https://www.youtube.com/watch?v=fAMFbCjj5AI"
  },
  {
    title: "ACE HACK 5.0 | UEM Jaipur",
    desc: "🏆 2nd Runner-Up by developing an innovative solution to address a real-world challenge. Demonstrated strong technical skills, creativity, teamwork, and effective presentation abilities throughout the competition.",
    date: "2026",
    images: [
      "public/images/uem51.jpeg",
      "public/images/uem52.jpeg",
      "public/images/uem53.jpeg",
      "public/images/uem54.jpeg",
      "public/images/uem55.jpeg"
    ],
    Url: "https://example.com/certificate/ace-hack"
  },
  {
    title: "HACKSTORM | JEC Jaipur",
    desc: "Participated in the HACKSTORM hackathon at JEC Jaipur and secured 7th position by working on a real-world tech challenge with a focus on innovation.",
    date: "2025",
    images: [
      "public/images/jec1.jpeg",
      "public/images/jec2.jpeg",
      "public/images/jec3.jpeg",
    ],
    Url: "https://example.com/certificate/hackstorm"
  },
  {
    title: "INSPIRE AWARD SCHLOARSHIP",
    desc: "🏅 Received a ₹10,000 INSPIRE Award Scheme scholarship in Class 10 for developing an Automatic Sanitizer Dispenser that supported contactless hygiene during the COVID-19 pandemic.",
    date: "2021",
    images: [
      "public/images/inspire.png"
    ],
    Url: "https://example.com/certificate/inspire"
  },
  {
    title: "Hackathon & Tech Event Organizer",
    desc: "Organized technical events such as Geospatial Hackathon, Projectathon 1.0, and Projectathon 2.0, managing end-to-end event execution and fostering innovation, collaboration, and technical learning among participants.",
    date: "2023 — Present",
    images: [
      "public/images/h1.jpg",
      "public/images/h2.jpg"
    ],
    Url: "https://example.com/certificate/organizer"
  },
  // {
  //   title: "HackMole 7.0 | NIT Jalandhar",
  //   desc: "My Team selected for HackMole 7.0 Final offline round, a prestigious hackathon organized by NIT Jalandhar, where we showcased our innovative project and competed with talented teams from across the country.",
  //   date: "2026",
  //   images: [
  //     "public/images/nitjal1.jpeg",
  //     "public/images/nitjal3.jpeg"
  //   ],
  //   Url: "https://example.com/certificate/organizer"
  // },
];

export default function Achievements() {
  return (
    <section id="achievements" className="theme-section-alt relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements"
          subtitle="Achievements, hackathons, competitions, and leadership roles throughout my academic journey."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a) => (
            <article
              key={a.title}
              className="reveal group flex flex-col overflow-hidden rounded-3xl glass transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/30"
            >
              <div className="relative">
                <ImageSlider images={a.images} alt={a.title} className="h-48" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />
                <span className="absolute right-3 top-3 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {a.date}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-bold">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                  {a.desc}
                </p>
                {a.Url && (
                  <a
                    href={a.Url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-violet-400/50 hover:bg-white/5 hover:text-white"
                  >
                    View 
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
