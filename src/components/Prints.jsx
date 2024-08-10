import { motion } from 'framer-motion';
import Obra from './Obra';

export default function Prints() {
  const obras = [
    // { title: 'n.009', img: 'flor.webp', text: '' },
    { title: 'n.008', img: 'n011.webp', text: '' },
    { title: 'n.007', img: 'n009.webp', text: '' },
    { title: 'n.007b', img: 'anew-tar04.webp', text: '' },
    { title: 'n.006', img: 'n008.webp', text: '' },
    { title: 'n.005', img: 'n007.webp', text: '' },
    { title: 'n.004', img: 'n006.webp', text: '' },
    { title: 'n.003', img: 'c001.webp', text: '(solo A5)' },
    { title: 'n.002', img: 'c002.webp', text: '(solo A5)' },
    { title: 'n.001', img: 'c003.webp', text: '(solo A5)' },
  ];

  return (
    <motion.div
      className="mt-16 text-[#fff] text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)]">
        <h1 className="text-3xl">PRINTS</h1>
        <p>
          Disponibles en papel perlado tamaño A5, A4 o A3 (aprox dependiendo de
          la imagen)
        </p>
        {/* <p>Numerados del 1 al 20</p> */}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] mx-auto max-w-8xl gap-16 p-16 text-center">
        {obras.map((obra, index) => (
          <div
            key={obra.title + index}
            className="items-center justify-center w-full text-[#777] flex flex-col gap-2"
          >
            <img
              src={`media/${obra.img}`}
              alt={obra.title}
              className={`rounded-md shadow-[0_0_18px_0_rgba(0,0,0,0.3)] max-h-[50vh] h-auto max-w-2/3 lg:max-w-2/5`}
            />
            <p className="drop-shadow-[1px_1px_0px_#fff] ">{obra.title}</p>
            <p className="drop-shadow-[1px_1px_0px_#fff] whitespace-pre-line text-sm">
              {obra.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
