import Backdrop from "./Backdrop"
import { motion } from "framer-motion"

function Modal({ text }) {
  return (
    <Backdrop>
      <motion.div
        className="max-w-xs h-32 flex justify-center items-center w-full bg-amber-500 border-2 border-white text-black rounded-xl text-xl"
        initial={{
          y: '-100vh',
          opacity: 1
        }}
        animate={{
          y: '0',
          opacity: 1,
          transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500
          }
        }}
        exit={{
          y: '-100vh',
          opacity: 1
        }}
      >
        <h2>{text}</h2>
      </motion.div>
    </Backdrop>
  )
}

export default Modal