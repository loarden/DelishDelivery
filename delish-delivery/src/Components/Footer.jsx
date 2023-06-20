import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from "framer-motion"

function Footer() {
  return (
    <footer className="fixed flex justify-center items-center bottom-0 left-0 h-12 w-full bg-black">
      <motion.h4 whileHover={{scale: 0.9}} className="text-white text-sm">Created and designed by: <a href="https://github.com/loarden"><GitHubIcon /> Biacsi Ors</a></motion.h4>
    </footer>
  )
}

export default Footer