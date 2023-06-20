import { Link } from "react-router-dom"
import FunctionButton from "./FunctionButton"
import { useContext } from "react"
import CartContext from "../Context/Context"

function Card({ prod }) {
  const { addToCart, cartItems, removeFromCart } = useContext(CartContext)

  const handleAdd = (prod) => {
    addToCart(prod)
  }

  const handeDelete = (prod) => {
    removeFromCart(prod)
  }

  return (
    <div className="text-white border-2 flex flex-col border-amber-500 rounded-lg max-w-xs w-11/12 min-h-fitt">
      <img src={prod.img} alt={prod.name} />
      <div className="relative h-full p-3">
        <Link to={`/product/${prod.id}`}>
          <h4 className="text-lg mb-2">{prod.name}</h4>
        </Link>
        <p className="text-amber-500">${prod.price}</p>
        <div className="absolute bottom-2 right-2">
          {cartItems.some(p => p.id === prod.id) ?
            <FunctionButton
              prod={prod}
              text='Remove'
              color='red'
              onClick={(prod) => handeDelete(prod)}

            /> :
            <FunctionButton
              prod={prod}
              text='Add to cart'
              color='amber'
              onClick={(prod) => handleAdd(prod)}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default Card