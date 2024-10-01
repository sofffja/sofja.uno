import { motion } from 'framer-motion';

export default function About() {
  const baseStyle = 'hover:underline transition-colors';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-16 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)]"
    >
      <div className="flex flex-col items-center">
        <p className="pb-2">3d/music/web/design</p>
        <div className="flex gap-5">
          <p>contact: </p>
          <div className="flex flex-col items-start">
            <a className={baseStyle} href="mailto:sfffj@proton.me">
              sfffj@proton.me
            </a>
            <a className={baseStyle} href="https://www.instagram.com/_sofffja/">
              instagram
            </a>
            <a className={baseStyle} href="https://twitter.com/_sofffja">
              twitter
            </a>
            <a className={baseStyle} href="https://soundcloud.com/sofffja">
              soundcloud
            </a>
          </div>
        </div>
        <div className="pt-2">
          <a className={baseStyle} href="https://www.aguja.re/">
            +++ aguja.re
          </a>
        </div>
      </div>
    </motion.div>
  );
}
