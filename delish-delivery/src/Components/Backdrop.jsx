import { motion } from "framer-motion"

function Backdrop({ children }) {
  return (
    <motion.div
      className='absolute top-0 left-0 w-full h-screen backdrop-brightness-50 flex justify-center items-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop