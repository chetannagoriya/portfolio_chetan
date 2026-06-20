import { useState } from "react";
import clsx from "clsx";

type Props = {
  images: string[];
  alt: string;
  className?: string;
};

export default function ImageSlider({ images, alt, className }: Props) {
  const [index, setIndex] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className={clsx("group/slider relative w-full overflow-hidden bg-black/20", className || "h-52")}>
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="h-full w-full shrink-0">
            <img src={img} alt={`${alt} - ${i + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur transition-all group-hover/slider:opacity-100 hover:bg-black/70"
            aria-label="Previous image"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 backdrop-blur transition-all group-hover/slider:opacity-100 hover:bg-black/70"
            aria-label="Next image"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
