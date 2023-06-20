import { inputStyle } from "../assets/style"
import Button from "./Button"

function ContactForm({onSubmit, isSent}) {
  return (
    <form onSubmit={onSubmit}
      className="flex flex-col relative gap-5 max-w-lg w-11/12">
      <h2 className="text-white text-center text-3xl font-bold">Contact <span className="text-amber-500">us!</span></h2>
      <input className={inputStyle} required type="text" placeholder="First Name" />
      <input className={inputStyle} required type="text" placeholder="Last Name" />
      <input className={inputStyle} required type="email" placeholder="Email" />
      <textarea className={`${inputStyle} resize-none`} required placeholder="Message..." cols="30" rows="4"></textarea>
      <Button
        isSent={isSent}
        text='Submit'
        padding={3}
        color='amber'
      />
    </form>
  )
}

export default ContactForm