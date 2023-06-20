import { motion } from "framer-motion"

function FunctionButton({ text, prod, onClick, color }) {

  const colorsVariants = {
    amber: 'bg-amber-500',
    red: 'bg-red-500',
    gray: 'bg-gray-500',
  }

  return (
    <motion.button
      onClick={() => onClick(prod)}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1.1 }}
      className={`p-3 justify-self-center ${colorsVariants[color]} text-white rounded-md`}>
      {text}
    </motion.button>
  )
}

export default FunctionButton