import { useEffect, useState } from "react";

/* Loading animation shown briefly on first paint */
export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`theme-page fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative h-20 w-20">
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500 border-r-blue-500"
          style={{ animation: "spin-loader 0.9s linear infinite" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold gradient-text">
          CHETAN
        </div>
      </div>
      <p className="mt-6 text-sm tracking-[0.3em] text-white/50">LOADING...</p>
    </div>
  );
}
