import { useParams } from "react-router-dom"
import store from "../Firebase/firestore"
import { useDocument } from "react-firebase-hooks/firestore"
import { doc } from "firebase/firestore"
import FunctionButton from "../Components/FunctionButton"
import { useContext } from "react"
import CartContext from "../Context/Context"

function Product() {
  const { id } = useParams()

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext)

  const [item, loading, error] = useDocument(
    doc(store, 'food', id)
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error..</div>
  }

  const prod = item.data()

  const handleAdd = (prod) => {
    addToCart({...prod, ...{id: id}})
  }

  const handeDelete = (prod) => {
    removeFromCart({...prod, ...{id: id}})
  }

  return (
    <main className="bg-black flex justify-center items-center w-full h-screen">
      <div className="w-11/12 max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-5">
        <div className="max-w-md border-2 border-amber-500">
          <img src={prod.img} alt={prod.name} />
        </div>
        <div className="text-white w-full max-w-md sm:h-72 h-44 flex flex-col justify-between items-start">
          <h2 className="sm:text-3xl text-2xl">{prod.name}</h2>
          <p><span className="text-amber-500">Ingridients: </span> {prod.desc}</p>
          <p className="text-amber-500 sm:text-2xl text-xl">${prod.price}</p>
          {cartItems.some(p => p.id === id) ?
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
    </main>
  )
}

export default Product