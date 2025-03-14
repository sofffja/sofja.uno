import GoesOutComesInUnderline from "@/fancy/components/text/underline-goes-out-comes-in";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-center mix-blend-difference"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>est. 1996 buenos aires, ar</h2>
      <p>⚘</p>
      <div className="text-center">
        <p>
          <a className="underline" href="https://github.com/sofja">
            <GoesOutComesInUnderline
              label="web dev & design"
              direction="left"
              underlineHeightRatio={0.05}
              underlinePaddingRatio={0}
            />
          </a>
        </p>
        <p>
          1/2 of{" "}
          <a className="underline" href="https://aguja.re/">
            <GoesOutComesInUnderline
              label="aguja"
              direction="left"
              underlineHeightRatio={0.05}
              underlinePaddingRatio={0}
            />
          </a>
        </p>
        <div className="flex items-center justify-center gap-2">
          <a href="https://www.instagram.com/sofja/" className="underline">
            <GoesOutComesInUnderline
              label="ig"
              direction="left"
              underlineHeightRatio={0.05}
              underlinePaddingRatio={0}
            />
          </a>
          <span>--</span>
          <a href="https://github.com/sofffja" className="underline">
            <GoesOutComesInUnderline
              label="gh"
              direction="left"
              underlineHeightRatio={0.05}
              underlinePaddingRatio={0}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
