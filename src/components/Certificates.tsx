import SectionHeading from "./SectionHeading";
import { ExternalLinkIcon } from "./Icons";

type Certificate = {
  title: string;
  desc: string;
  date: string;
  imageUrl?: string;
  certificateUrl?: string;
};

const CERTIFICATES: Certificate[] = [
  {
    title: "Oracle Certified Foundations Associate",
    desc: "Earned the Oracle Foundations Associate certification, demonstrating proficiency in fundamental concepts of cloud computing, databases, programming, and modern technology solutions.",
    date: "2025",
    imageUrl: "public/images/0racel.jpg",
    certificateUrl: "https://www.linkedin.com/in/chetannagoriya"
  },
  {
    title: "India AI Impact Buildathon",
    desc: "Participated in the India AI Impact Buildathon, showcasing skills in AI development and problem-solving by creating innovative solutions using artificial intelligence technologies.",
    date: "2026",
    imageUrl: "public/images/ai_summit.png",
    certificateUrl: "https://www.linkedin.com/in/chetannagoriya"
  },
  {
    title: "Linkedin Content and Creative Design",
    desc: "Completed the LinkedIn Content and Creative Design course, gaining expertise in creating engaging content and visually appealing designs for professional networking and personal branding.",
    date: "2024 — 2026",
    imageUrl: "public/images/linkedin.jpeg",
    certificateUrl: "https://www.linkedin.com/in/chetannagoriya"
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="theme-section relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certificates"
          subtitle="Professional certifications and program completions."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c) => (
            <article
              key={c.title}
              className="reveal group flex flex-col overflow-hidden rounded-3xl glass transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/30"
            >
              <div className="relative h-48 overflow-hidden bg-black/10">
                {c.imageUrl ? (
                  <img
                    src={c.imageUrl}
                    alt={c.title}
                    className="h-full w-full object-cover bg-white/5"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-white/5 text-sm text-white/50">
                    No image available
                  </div>
                )}
                <span className="absolute right-3 top-3 rounded-full bg-black/30 px-3 py-1 text-xs font-medium backdrop-blur text-white">
                  {c.date}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                  {c.desc}
                </p>
                {c.certificateUrl && (
                  <a
                    href={c.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-violet-400/50 hover:bg-white/5 hover:text-white"
                  >
                    View Certificate
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
