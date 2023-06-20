import { motion } from "framer-motion"

function Button({ text, isSent }) {

  const colorsVariants = {
    amber: 'bg-amber-500',
    gray: 'bg-gray-500'
  }

  return (
    <motion.button
      disabled={isSent ? true : false}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1.1 }}
      className={`p-3 justify-self-center ${isSent ? colorsVariants.gray : colorsVariants.amber} text-white rounded-md`}>
      {text}
    </motion.button>
  )
}

export default Button