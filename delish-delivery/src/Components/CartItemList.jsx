import { useContext } from "react"
import CartItem from "./CartItem"
import CartContext from "../Context/Context"

function CartItemList({ items }) {
  const { removeFromCart } = useContext(CartContext)

  const handleDelete = (item) => {
    removeFromCart(item)
  }

  return (
    <>
        <h2 className="text-white text-center my-5 text-xl">Check Your <span className="text-amber-500">Order</span></h2>
        {items.map((item) => {
          return <CartItem
            key={item.id}
            item={item}
            onClick={(item) => handleDelete(item)}
          />
        })}
        <div className="text-white grid">
          <p className="justify-self-end text-lg">
            Total:
            <span className="text-amber-500">
              ${items
                .map(item => item.price * item.qty)
                .reduce((curr, acc) => curr + acc, 0)}
            </span>
          </p>
        </div>
    </>
  )
}

export default CartItemList