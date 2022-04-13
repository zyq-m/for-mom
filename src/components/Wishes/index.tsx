import { motion } from "framer-motion";

const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
  },
};

const Wishes = ({ children }: any) => {
  return (
    <motion.p
      onClick={e => e.stopPropagation()}
      variants={fade}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="wishes"
    >
      {children}
    </motion.p>
  );
};

export default Wishes;
