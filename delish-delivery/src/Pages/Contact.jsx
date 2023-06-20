import Button from '../Components/Button'
import { placeholders } from '../assets/data'
import { inputStyle } from '../assets/style'
import useModal from '../Hooks/useModal'
import Modal from '../Components/Modal'
import Animation from '../Components/Animation'
import ContactForm from '../Components/ContactForm'

function Contact() {
  const [showModal, setShowModal] = useModal(false)

  return (
    <>
      <main className="contact-bg relative bg-center bg-cover w-full h-screen flex justify-center items-center before:top-0 before:left-0 before:absolute before:w-full before:h-full before:backdrop-brightness-50">
        <ContactForm 
          onSubmit={(e) => {
            e.preventDefault()
            setShowModal(true)
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