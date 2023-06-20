import { AnimatePresence } from "framer-motion"

function Animation({ children }) {
  return (
    <AnimatePresence
        initial={false}
        wait={true}
        onExitComplete={() => null}
      >
        {children}
    </AnimatePresence>
  )
}

export default Animation