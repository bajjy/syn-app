import { useContext } from 'react';
import { ModalContext } from "../context/ModalContext";

const useModals = () => {
  const [state, setState] = useContext(ModalContext);

  function incrOpenClose() {
    let oneMoreModal = state.modalClicks;
    state.modalOpened = state.modalOpened ? false : true;

    oneMoreModal += 1;

    setState(state => 
      (
        { ...state, modalClicks: oneMoreModal }
      )
    );
    return oneMoreModal;
  }

  return {
    incrOpenClose,
    modalOpened: state.modalOpened,
    modalClicks: state.modalClicks
  }
};

export default useModals;
