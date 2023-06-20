import { IconButton } from "@mui/material"
import { motion } from "framer-motion"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext } from "react";
import CartContext from "../Context/Context";

function CartItem({ item, onClick }) {
  const { changeItemQuantity } = useContext(CartContext)

  return (
    <motion.div whileHover={{ scale: 0.98 }} className="grid grid-cols-6 h-28 w-full my-2 bg-amber-500 px-2">
      <img className="place-self-center" src={item.img} alt={item.name} />
      <div className="self-center p-2 col-span-2">
      <h3 className="break-words">{item.name}</h3>
      </div>
      <p className="place-self-center">qty:
        <select value={item.qty} onChange={(e) => changeItemQuantity(item, e)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </p>
      <p className="self-center justify-self-end">${item.price * item.qty}</p>
      <IconButton className="self-center justify-self-end" onClick={() => onClick(item)}>
        <DeleteForeverIcon sx={{ color: '#ef4444' }} />
      </IconButton>
    </motion.div>
  )
}

export default CartItem