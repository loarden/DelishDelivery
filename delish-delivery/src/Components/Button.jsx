import { motion } from "framer-motion"

function Button({ text }) {
  return (
    <motion.button
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1.1 }}
      className={`p-3 justify-self-center bg-amber-500 text-white rounded-md`}>
      {text}
    </motion.button>
  )
}

export default Button