import { useContext, useEffect, useState } from "react"
import CartContext from "../Context/Context"
import CartItemList from "../Components/CartItemList"
import FunctionButton from '../Components/FunctionButton'
import OrderForm from "../Components/OrderForm"
import Modal from "../Components/Modal"
import useModal from "../Hooks/useModal"
import { AnimatePresence } from "framer-motion"
import Animation from "../Components/Animation"

function Cart() {
  const { cartItems } = useContext(CartContext)
  const [next, setNext] = useState(false)
  const [showModal, setShowModal] = useModal(false)
  const [isSent, setIsSent] = useState(false)

  return (
    <>
      <main className="bg-black w-full min-h-screen py-16 flex flex-col items-center">
        <div className="max-w-lg w-full px-3">
          {cartItems.length > 0 ?
            <>
              {next ?
                <OrderForm
                  isSent={isSent}
                  onSubmit={(e) => {
                    e.preventDefault()
                    setShowModal(true)
                    setIsSent(true)
                  }}
                /> :
                <CartItemList
                  items={cartItems}
                />}
              <div className="flex justify-between mt-2">
                <FunctionButton
                  text='Back'
                  color={next ? 'amber' : 'gray'}
                  onClick={() => setNext(false)}
                />
                <FunctionButton
                  text='Next'
                  color={next ? 'gray' : 'amber'}
                  onClick={() => setNext(true)}
                />
              </div>
            </> :
            <div className="text-white text-center mt-10 text-xl">
              Your cart is empty
            </div>
          }
        </div>
      </main>
      <Animation>
        {showModal ? <Modal text='Your Order is on the way :)' /> : ''}
      </Animation>
    </>
  )
}

export default Cart