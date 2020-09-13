import GlobalStyle from '../styles/globalStyle.js';

import React, { useState } from 'react';
import ModalClicks from "./ModalClicks";
import CustomModal from "./CustomModal";
import { ModalProvider } from "../context/ModalContext";

function App() {

  const state = useState({
    modalOpened: false,
    modalClicks: 0
  });

  return (
    <div className={` root-container ${state.modalOpened ? 'opened' : 'idle'}`}>
      <GlobalStyle />
      <header className="header">syn-app</header>
      <div className="container">
        <div className="container">
          <h1>modal below</h1>
        </div>
        <ModalProvider state={state}>
          <ModalClicks />
          <CustomModal />
        </ModalProvider>
      </div>
    </div>
  )
};

export default App;