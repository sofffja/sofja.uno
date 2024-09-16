import Obra from './Obra';
import { motion } from 'framer-motion';

export default function Gallery() {
  const obras = [
    { title: 'as_de_flores.jpg', img: 'flor.webp', text: '' },
    { title: 'mas que anibios', img: 'n006.webp', text: '' },
    {
      title: 'cover artwork for Stazma The Junglechrist - Poursuite EP',
      img: 'T010b.webp',
      text: '',
    },
    {
      title: 'cover artwork for Sufrimiento Records V/A',
      img: 'w003.webp',
      text: '',
    },
    {
      title: 'cover artwork for Cimarron - Sin Cara, Sin Nombre',
      img: 'cimarron-1920.webp',
      text: '',
    },
    {
      title: '[▒▒▒╜░╜╙▒▒▒▒▒▒▒]',
      img: 'n011.webp',
      text: `SA001 ☽•∷○
      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓`,
    },
    {
      title: 'in a pool of their own juices',
      img: 'n010.webp',
      text: 'sin ojos ni oídos, sin piernas',
    },
    {
      title: 'anew',
      img: 'n009.webp',
      text: `the whole body is shaking, but there is a quiet feeling inside
      a flame burning at the feet of his feet
      its flames rising by its fires and its fire rising by its flames
      and the hands are empty
      and your arms
      and your legs`,
    },
    {
      title: 'como bichos arrojados en la noche',
      img: 'n007.webp',
      text: `sharp horns that can hide behind some thick cloth
      bodies so dense it's barely visible
      it disappeared from the sea and returned to Earth
      more flesh and fur
      new eyes
      could have just seen it for the first time`,
    },
    { title: 'landscape type II', img: 'n008.webp', text: '' },
    { title: '', img: 'c001.webp', text: '' },
    { title: '', img: 'c002.webp', text: '' },
    { title: '', img: 'c003.webp', text: '' },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col text-center pb-16 pt-16 gap-8 sm:gap-0 sm:pt-0"
      >
        {obras.map((obra, index) => (
          <Obra key={obra.title + index} obra={obra} />
        ))}
        <div>✼</div>
      </motion.div>
    </>
  );
}
