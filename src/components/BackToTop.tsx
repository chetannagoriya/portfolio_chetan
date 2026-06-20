import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`keep-white fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 shadow-lg shadow-violet-600/40 transition-all duration-300 hover:scale-110 ${
        show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
}
