import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Backdrop from "../Backdrop";
import Wishes from "../Wishes";
import img1 from "../../assests/cake-1.png";

import { GrLinkNext } from "react-icons/gr";

import data from "../../data/data";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose }: any) => {
  const [wishIndex, setWishIndex] = useState(0);

  return (
    <Backdrop onClick={handleClose}>
      <motion.article
        onClick={e => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="modal"
      >
        <img src={img1} alt="Happy Birthday Illustration" />
        <h1>
          Happy Birthday <span className="pink-text">Mama</span>😍🎉
        </h1>

        <AnimatePresence exitBeforeEnter>
          <Wishes>{data[wishIndex].text}</Wishes>
        </AnimatePresence>

        {wishIndex !== data.length - 1 ? (
          <motion.div
            onClick={() => setWishIndex(wishIndex + 1)}
            className="icons"
            whileTap={{ scale: 0.9, backgroundColor: "#f1f1f1" }}
          >
            <GrLinkNext />
          </motion.div>
        ) : (
          <a>
            <motion.div className="cta-btn" whileTap={{ scale: 0.9 }}>
              Last Surprise😗
            </motion.div>
          </a>
        )}
      </motion.article>
    </Backdrop>
  );
};

export default Modal;
