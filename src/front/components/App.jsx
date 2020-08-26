import React, { useState } from 'react';
import ModalClicks from "./ModalClicks";
import CustomModal from "./CustomModal";
import { ModalProvider } from "../context/ModalContext";
import useModals from "../hooks/useModals";

function App() {

  const state = useState({
    modalOpened: false,
    modalClicks: 0
  });

  const { modalOpened } = useModals();


  return (
    <div className={` root-container ${state.modalOpened ? 'opened' : 'idle'}`}>
      <header className="header">syn-app</header>
      <div className="container">
        <div className="container">
          <h1>modal below</h1>
        </div>
        <ModalProvider state={state}>
          <ModalClicks />
          {!modalOpened || <CustomModal />}
          <CustomModal />
        </ModalProvider>
      </div>
    </div>
  )
};

export default App;