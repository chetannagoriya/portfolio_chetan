import { useState } from "react";

import emailjs from "@emailjs/browser";

import SectionHeading from "./SectionHeading";
import {
  MailIcon,
  LinkedInColorIcon,
  GitHubColorIcon,
  InstagramColorIcon,
  XColorIcon,
} from "./Icons";

const CONTACT_INFO = [
  { icon: MailIcon, label: "Email", value: "chetannagoriya7@gmail.com", href: "mailto:chetannagoriya7@gmail.com" },
];

const SOCIALS = [
  { icon: LinkedInColorIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/chetannagoriya", color: "hover:bg-[#0a66c2]/10" },
  { icon: GitHubColorIcon, label: "GitHub", href: "https://github.com/chetannagoriya", color: "hover:bg-white/10" },
  { icon: InstagramColorIcon, label: "Instagram", href: "https://www.instagram.com/chetannagoriya", color: "hover:bg-[#e6683c]/10" },
  { icon: XColorIcon, label: "X (Twitter)", href: "https://twitter.com/chetannagoriya", color: "hover:bg-white/10" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setSent(true);
  //   (e.target as HTMLFormElement).reset();
  //   setTimeout(() => setSent(false), 4000);
  // };

  

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   try {
//     await emailjs.sendForm(
//       "service_yz9psf4",
//       "template_sin1tig",
//       e.currentTarget,
//       "cBqcDStRT4C7je1hA"
//     );

//     setSent(true);
//     e.currentTarget.reset();

//     setTimeout(() => setSent(false), 4000);
//   } catch (error) {
//     console.error("EmailJS Error:", error);
//     alert("Failed to send message.");
//   }
// };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  const form = e.currentTarget; // ✅ pehle store kar lo

  try {
    const result = await emailjs.sendForm(
      "service_yz9psf4",
      "template_sin1tig",
      form,           // ✅ stored reference use karo
      "cBqcDStRT4C7je1hA"
    );

    console.log("EmailJS Result:", result); // debug ke liye

    if (result.status === 200) {
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 4000);
    } else {
      alert("Something went wrong. Status: " + result.status);
    }

  } catch (error) {
    console.error("EmailJS Error:", error);
    // ❌ alert hatao temporarily, console mein dekho exact error
  }
};


  return (
    <section id="contact" className="theme-section relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Get In Touch"
          subtitle="Have a project, opportunity, or just want to say hi? My inbox is always open."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1: Contact info + map */}
          <div className="reveal glass flex flex-col gap-5 rounded-3xl p-7">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <ul className="space-y-4">
              {CONTACT_INFO.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="group flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 text-violet-300 transition-colors group-hover:from-violet-600 group-hover:to-blue-600 group-hover:text-white">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/40">
                        {c.label}
                      </span>
                      <span className="block text-sm font-medium text-white/85">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Card 2: Socials */}
          <div className="reveal glass flex flex-col rounded-3xl p-7">
            <h3 className="text-xl font-bold">Social Links</h3>
            <p className="mt-2 text-sm text-white/55">
              Follow me and connect across platforms.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-white ${s.color}`}
                >
                  <s.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Card 3: Contact form */}
          <div className="reveal glass rounded-3xl p-7">
            <h3 className="text-xl font-bold">Send a Message</h3>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {[
                { name: "name", type: "text", placeholder: "Your Name" },
                { name: "email", type: "email", placeholder: "Your Email" },
                { name: "subject", type: "text", placeholder: "Subject" },
              ].map((f) => (
                <input
                  key={f.name}
                  name={f.name}
                  type={f.type}
                  required
                  placeholder={f.placeholder}
                  className="theme-input w-full rounded-xl px-4 py-3 text-sm placeholder-white/40 outline-none transition-colors focus:border-violet-400/60 focus:bg-white/10"
                />
              ))}
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your Message"
                className="theme-input w-full resize-none rounded-xl px-4 py-3 text-sm placeholder-white/40 outline-none transition-colors focus:border-violet-400/60 focus:bg-white/10"
              />
              <button
                type="submit"
                className="keep-white w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 font-semibold shadow-lg shadow-violet-600/30 transition-transform hover:scale-[1.02]"
              >
                {sent ? "✓ Message Sent!" : "Send Message"}
              </button>
              {sent && (
                <p className="text-center text-sm text-emerald-400">
                  Thanks! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
