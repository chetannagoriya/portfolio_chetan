type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="reveal mx-auto mb-14 max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
      {subtitle && <p className="mt-4 text-white/60">{subtitle}</p>}
    </div>
  );
}
