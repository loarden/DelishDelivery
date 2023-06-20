import { motion } from "framer-motion"

function FilterButton({ text, onClick, index }) {
  return (
    <motion.button
      key={index}
      onClick={() => onClick(text, index)}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1.1 }}
      className={`p-1 hover:bg-amber-400 justify-self-center w-32 bg-amber-500 text-white rounded-md`}>
      {text}
    </motion.button>
  )
}

export default FilterButton