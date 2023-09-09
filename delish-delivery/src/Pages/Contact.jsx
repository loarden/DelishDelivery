import useModal from '../Hooks/useModal'
import Modal from '../Components/Modal'
import Animation from '../Components/Animation'
import ContactForm from '../Components/ContactForm'
import { useState } from 'react'

function Contact() {
  const [showModal, setShowModal] = useModal(false)
  const [isSent, setIsSent] = useState(false)

  return (
    <>
      <main className="contact-bg relative bg-center bg-cover w-full min-h-screen h- flex justify-center items-center before:top-0 before:left-0 before:absolute before:w-full before:h-full before:backdrop-brightness-50">
        <ContactForm
          isSent={isSent}
          onSubmit={(e) => {
            e.preventDefault()
            setShowModal(true)
            setIsSent(true)
          }}
        />
      </main>
      <Animation>
        {showModal ? <Modal text='Message sent!' /> : ''}
      </Animation>
    </>
  )
}

export default Contact