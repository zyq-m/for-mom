import Modal from "./components/Modal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="App">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        Surprise!!👀
      </motion.button>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        // onExitComplete={() => framerLogger(label)}
      >
        {modalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
