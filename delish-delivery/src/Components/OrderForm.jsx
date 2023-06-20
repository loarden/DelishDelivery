import Button from "./Button"
import { inputStyle } from "../assets/style"

function OrderForm({ onSubmit, isSent }) {
  return (
    <>
      <h2 className="text-white text-center my-5 text-xl">Place Your <span className="text-amber-500">Order</span></h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 mb-3">
        <input className={inputStyle} required type="text" placeholder="Full name"/>
        <input className={inputStyle} required type="email" placeholder="Email"/>
        <input className={inputStyle} required type="text" placeholder="City"/>
        <input className={inputStyle} required type="text" placeholder="Address"/>
        <input className={inputStyle} required type="number" placeholder="Phone number"/>
        <Button 
          isSent={isSent}
          text='Order'
        />
      </form>
    </>
  )
}

export default OrderForm