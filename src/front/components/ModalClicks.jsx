import React from "react"
import useModals from "../hooks/useModals";

function ModalClicks() {
  const { incrOpenClose } = useModals();

  const handleModal = () => {
    incrOpenClose();
  };

  return (
    <>
      <div className="modal-clicks">
        <button onClick={handleModal}>i am going to call popup</button>
      </div>
    </>
  )
}

export default ModalClicks
