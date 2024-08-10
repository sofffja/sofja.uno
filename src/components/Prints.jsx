import { motion } from 'framer-motion';
import Obra from './Obra';

export default function Prints() {
  const obras = [
    // { title: 'n.009', img: 'flor.webp', text: '' },
    { title: 'n.008', img: 'n011.webp', text: '' },
    { title: 'n.007', img: 'n009.webp', text: '' },
    { title: 'n.006', img: 'n008.webp', text: '' },
    { title: 'n.005', img: 'n007.webp', text: '' },
    { title: 'n.004', img: 'n006.webp', text: '' },
    { title: 'n.003', img: 'c001.webp', text: '' },
    { title: 'n.002', img: 'c002.webp', text: '' },
    { title: 'n.001', img: 'c003.webp', text: '' },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col text-center pb-16"
      >
        {obras.map((obra, index) => (
          <Obra key={obra.title + index} obra={obra} />
        ))}
        <div>✼</div>
      </motion.div>
    </>
  );
}
