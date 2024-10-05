import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Obra({ obra }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (!obra) return null;

  return (
    <div
      key={obra.title}
      className="items-center justify-center w-full sm:min-h-[calc(100vh+3rem)] text-[#777] flex flex-col gap-2"
    >
      <motion.img
        ref={ref}
        src={`media/${obra.img}`}
        alt={obra.title}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isInView && isLoaded ? 1 : 0,
          transition: { duration: 0.6, ease: 'easeInOut', delay: 0.3 },
        }}
        className="rounded-md shadow-[1px_1px_0_0_#00000077,-1px_-1px_0_0_#ffffff77] max-h-[80vh] h-auto max-w-2/3 lg:max-w-2/5"
        onLoad={() => setInterval(() => setIsLoaded(true), 1000)}
        loading="lazy"
      />
      <p className="drop-shadow-[1px_1px_0px_#fff] ">{obra.title}</p>
      <p className="drop-shadow-[1px_1px_0px_#fff] whitespace-pre-line text-sm">
        {obra.text}
      </p>
    </div>
  );
}
