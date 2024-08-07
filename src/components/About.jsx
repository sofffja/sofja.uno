import { motion } from 'framer-motion';

export default function About() {
  const baseStyle = 'hover:text-primary transition-colors';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-6 md:mt-8 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] flex md:flex-row flex-col justify-between lg:w-3/4 xl:w-2/3"
    >
      <p>digital artist && web developer && electronic musician</p>

      <div className="flex gap-4">
        <p>contact: </p>
        <div className="flex flex-col">
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

      <div>
        <a className={baseStyle} href="https://www.aguja.re/">
          +++ aguja.re
        </a>
      </div>
    </motion.div>
  );
}
