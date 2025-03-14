import { useVisuals } from "../hooks/useData";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { data, isLoading, error } = useVisuals();

  if (isLoading)
    return (
      <AnimatePresence>
        <motion.div
          className="flex h-screen w-full items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p>...</p>
        </motion.div>
      </AnimatePresence>
    );

  if (error) return <p>¯\_(ツ)_/¯</p>;

  return (
    <motion.div
      className="flex flex-col items-center gap-16 px-16 py-20 sm:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {data.map((visual) => {
        return (
          <motion.div
            key={visual._id}
            className="max-h-[60vh]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={visual.image.url + "?h=800&fm=webp"}
              alt={visual.title}
              className="h-full w-auto rounded-md"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
