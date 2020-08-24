import React from "react"
import useModals from "../hooks/useModals";

function CustomModal(props) {
  const state = props.state;
  const { incrOpenClose, modalOpened, modalClicks } = useModals();
  
  const handleClose = () => incrOpenClose();
  const handleCloseModal = (amImodalQuestion) => {
    amImodalQuestion.target.classList.contains('modal') ? incrOpenClose() : false;
  };

  return (
    <>
      <div className={` modal ${modalOpened ? 'opened' : 'idle'} ${modalOpened}`} onClick={handleCloseModal}>
        <div className="modal_content">
          <span className="close" onClick={handleClose}>&times;</span>
          
        <h1>modal click'n close: {modalClicks}</h1>
          <p>I'm A Pop Up. Everyone hates me!</p>
        </div>
      </div>
    </>
  )
}

export default CustomModal
