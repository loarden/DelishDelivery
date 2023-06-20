import { useState, useEffect } from "react";

export default function useModal( state ) {
  const [showModal, setShowModal] = useState(state)

  useEffect(() => {
    if(showModal === true) {
      setTimeout(() => {
        setShowModal(false)
      }, 1500)
    }
  },[showModal])

  return [showModal, setShowModal]
}