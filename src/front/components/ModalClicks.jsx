import React from "react"
import useModals from "../hooks/useModals";

function ModalClicks(props) {
  const state = props.state;
  const { incrOpenClose, modalOpened, modalClicks } = useModals();

  const handleModal = () => {
    incrOpenClose();
  };

  return (
    <>
      <div className="modal-clicks">
        <button onClick={handleModal}>i am gongn to call popup</button>
      </div>
    </>
  )
}

export default ModalClicks
